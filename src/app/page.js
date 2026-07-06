'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports to prevent SSR issues with GSAP
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const Preloader = dynamic(() => import('@/components/Preloader'), { ssr: false });
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const ScrollVideo = dynamic(() => import('@/components/ScrollVideo'), { ssr: false });
const Marquee = dynamic(() => import('@/components/Marquee'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const Works = dynamic(() => import('@/components/Works'), { ssr: false });
const Priorities = dynamic(() => import('@/components/Priorities'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  // Start false on both server and client to avoid hydration mismatch,
  // then check sessionStorage in useEffect (client-only).
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    // If preloader already played this session, skip it
    if (sessionStorage.getItem('preloaderDone') === 'true') {
      setShowPreloader(false);
      setPreloaderDone(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderDone', 'true');
    setShowPreloader(false);
    setPreloaderDone(true);
  };

  return (
    <>
      <CustomCursor />
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main Content */}
      <main>
        <Navbar visible={preloaderDone} />
        <Hero visible={preloaderDone} />
        <ScrollVideo />
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
