import { Hero } from '@/components/sections/Hero';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { Expertise } from '@/components/sections/Expertise';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { WhyChooseVyntor } from '@/components/sections/WhyChoose';
import { Industries } from '@/components/sections/Industries';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ImpactStats />
      <Expertise />
      <HowWeWork />
      <Industries />
      <WhyChooseVyntor />
      <CTA />
    </div>
  );
}