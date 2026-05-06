import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/reasons';
import { Projects } from '@/components/sections/projects';
import { Pricing } from '@/components/sections/pricing';
import { Testimonials } from '@/components/sections/testimonials';
import { Process } from '@/components/sections/process';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-beige selection:bg-gold/30 selection:text-navy">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
