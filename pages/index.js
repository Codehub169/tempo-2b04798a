import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import WhyHueneuSection from '../components/WhyHueneuSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>hueneu - Graphic Design Studio</title>
        <meta name="description" content="hueneu: Where stories find their aesthetic. Designs that whisper loud stories." />
        {/* Add other relevant meta tags from _document.js if they are page-specific, or keep them global */}
      </Head>
      <HeroSection />
      <StorySection />
      <WhyHueneuSection />
      <ServicesSection />
      <ContactSection />
      {/* You can add a Footer component here if you have one */}
    </>
  );
}
