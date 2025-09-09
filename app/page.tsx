import { Footer } from '@/components/website/footer';
import Header from '@/components/website/header';
import HeroSec from '@/components/website/hero-sec';
import { OWNER_URL } from '@/components/website/utils/websiteConstants';

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative'>
        <HeroSec />
      </main>
      <Footer />
    </>
  );
}
