import { About } from '@/components/sections/About';
import { CTAFinal } from '@/components/sections/CTAFinal';
import { Help } from '@/components/sections/Help';
import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { Projects } from '@/components/sections/Projects';
import { QuoteBand } from '@/components/sections/QuoteBand';
import { Renovation } from '@/components/sections/Renovation';
import { Stats } from '@/components/sections/Stats';
import { Testimonial } from '@/components/sections/Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Pillars />
      <Renovation />
      <QuoteBand />
      <Help />
      <Projects />
      <Testimonial />
      <CTAFinal />
    </>
  );
}
