import { Footer } from '@/components/website/footer';
import Header from '@/components/website/header';
import {
  HeroSection,
  ComponentsShowcase,
  BlocksShowcase,
  TemplatesShowcase,
  InstallationSection,
  FeaturesSection,
  CTASection,
} from '@/components/website/landing';

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative'>
        <HeroSection />
        <InstallationSection />
        <ComponentsShowcase />
        <BlocksShowcase />
        <TemplatesShowcase />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
