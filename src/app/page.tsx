import { Hero } from '@/components/sections/Hero';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { Expertise } from '@/components/sections/Expertise';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { Industries } from '@/components/sections/Industries';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ImpactStats />
      <Expertise />
      <WhatWeDo />
      <Industries />
      <HowWeWork />
      <CTA />
    </div>
  );
}