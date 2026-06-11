'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports to prevent SSR issues with GSAP
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const Preloader = dynamic(() => import('@/components/Preloader'), { ssr: false });
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Marquee = dynamic(() => import('@/components/Marquee'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const Works = dynamic(() => import('@/components/Works'), { ssr: false });
const Priorities = dynamic(() => import('@/components/Priorities'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <CustomCursor />
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Main Content */}
      <main>
        <Navbar visible={preloaderDone} />
        <Hero visible={preloaderDone} />
        <About />
        <Marquee />
        <Services />
        <Works />
        <Priorities />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
