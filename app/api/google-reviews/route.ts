import { NextResponse } from 'next/server';

export interface GooglePlaceReview {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text: string; languageCode?: string };
  originalText?: { text: string; languageCode?: string };
  authorAttribution?: {
    displayName: string;
    uri?: string;
    photoUri?: string;
  };
  publishTime?: string;
  googleMapsUri?: string;
}

export interface GooglePlacesResponse {
  id?: string;
  displayName?: { text: string; languageCode?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GooglePlaceReview[];
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        success: false,
        configured: false,
        message: 'Google Places API Key or Place ID is not configured.',
        reviews: [],
        rating: 5.0,
        userRatingCount: 0,
        googleMapsUri: '#',
      },
      { status: 200 }
    );
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,googleMapsUri,reviews',
      },
      next: { revalidate: 3600 }, // Cache response for 1 hour according to Google Places caching terms
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Places API error response:', response.status, errorText);
      return NextResponse.json(
        {
          success: false,
          configured: true,
          status: response.status,
          message: `Places API returned error ${response.status}`,
          reviews: [],
          rating: 5.0,
          userRatingCount: 0,
          googleMapsUri: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
        },
        { status: 200 }
      );
    }

    const data: GooglePlacesResponse = await response.json();

    // Exclude any non-5-star reviews and take up to 10 authentic reviews
    const formattedReviews = (data.reviews || [])
      .filter((rev) => (rev.rating ?? 5) === 5)
      .slice(0, 10)
      .map((rev, index) => {
        const textContent = rev.text?.text || rev.originalText?.text || '';
        return {
          id: rev.name || `review-${index}`,
          authorName: rev.authorAttribution?.displayName || 'Home Aura Client',
          authorPhotoUrl: rev.authorAttribution?.photoUri || '',
          authorUri: rev.authorAttribution?.uri || data.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${placeId}`,
          rating: rev.rating || 5,
          relativeTime: rev.relativePublishTimeDescription || 'Recently',
          publishTime: rev.publishTime || '',
          text: textContent,
          googleMapsUri: rev.googleMapsUri || rev.authorAttribution?.uri || data.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${placeId}`,
        };
      });

    return NextResponse.json({
      success: true,
      configured: true,
      source: 'Google Places API (New)',
      displayName: data.displayName?.text || 'Home Aura Design and Construction',
      rating: data.rating ?? 5.0,
      userRatingCount: data.userRatingCount ?? formattedReviews.length,
      googleMapsUri: data.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      reviews: formattedReviews,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown server error';
    console.error('Failed to fetch Google Places details:', errorMsg);
    return NextResponse.json(
      {
        success: false,
        configured: true,
        message: errorMsg,
        reviews: [],
        rating: 5.0,
        userRatingCount: 0,
        googleMapsUri: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      },
      { status: 200 }
    );
  }
}
