'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const ropePath = "M 5,230 Q 213,275 422,250";


const services = [
  {
    title: 'Web & Mobile\nApplications',
    description: 'Fast, secure & responsive web and mobile apps that users love.',
    japanese: '開発',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="15" y="8" width="7" height="13" rx="1.5" fill="#5E17EB" stroke="#c2b0ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18.5" cy="18.5" r="0.75" fill="#c2b0ff"/>
      </svg>
    ),
  },
  {
    title: 'AI Solutions\n& Integrations',
    description: 'Intelligent systems powered by AI, ML & advanced analytics.',
    japanese: '知能',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5c0 .88.25 1.71.69 2.42A3.5 3.5 0 0 0 4 12c0 1.25.66 2.35 1.65 2.97A4.5 4.5 0 0 0 9.5 19.5v-2a2.5 2.5 0 0 1-2.5-2.5v-.5a1 1 0 0 0-1-1h-.5a1.5 1.5 0 0 1-1.5-1.5c0-.83.67-1.5 1.5-1.5h.5a1 1 0 0 0 1-1v-.5A2.5 2.5 0 0 1 9.5 8V2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 .88-.25 1.71-.69 2.42A3.5 3.5 0 0 1 20 12c0 1.25-.66 2.35-1.65 2.97A4.5 4.5 0 0 1 14.5 19.5v-2a2.5 2.5 0 0 0 2.5-2.5v-.5a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 0 1.5-1.5c0-.83-.67-1.5-1.5-1.5h-.5a1 1 0 0 1-1-1v-.5A2.5 2.5 0 0 0 14.5 8V2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4v14M9 12h6" stroke="#c2b0ff" strokeWidth="1.5" opacity="0.5" strokeDasharray="2 2"/>
        <circle cx="14.5" cy="6.5" r="1" fill="#c2b0ff"/>
        <circle cx="17.5" cy="11.5" r="1" fill="#c2b0ff"/>
        <circle cx="15.5" cy="15.5" r="1" fill="#c2b0ff"/>
      </svg>
    ),
  },
  {
    title: 'Automation\n& Workflows',
    description: 'Smart automations that eliminate manual work and boost productivity.',
    japanese: '自動',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#c2b0ff" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 12a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.8" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'ERP & Business\nSystems',
    description: 'Custom ERP solutions tailored to streamline your entire business.',
    japanese: '業務',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="14" y="3" width="7" height="5" rx="1.5" stroke="#c2b0ff" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="3" y="15" width="7" height="6" rx="1.5" stroke="#c2b0ff" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="14" y="11" width="7" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 7h4M7 12v3M17 8v3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    title: 'Cloud &\nDevOps',
    description: 'Scalable cloud infrastructure and modern DevOps practices.',
    japanese: '基盤',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 18H18a4 4 0 0 0 2-7.46 6 6 0 0 0-11.91-1C5.45 9.77 4 11.71 4 14a4 4 0 0 0 2.5 4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 14.5a2 2 0 1 1 0-3c1-.75 2.5.75 3.5 1.5 1 .75 2.5 2.25 3.5 1.5a2 2 0 1 0 0-3" stroke="#c2b0ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'E-Commerce\nSolutions',
    description: 'High-converting, secure and feature-rich online stores.',
    japanese: '商業',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="14" r="2" stroke="#c2b0ff" strokeWidth="1.8"/>
        <path d="M12 16v3" stroke="#c2b0ff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security to protect your data and users.',
    japanese: '防衛',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9" y="10" width="6" height="5" rx="1" stroke="#c2b0ff" strokeWidth="1.8" fill="rgba(194, 176, 255, 0.2)"/>
        <path d="M12 7a2 2 0 0 1 2 2v1h-4V9a2 2 0 0 1 2-2z" stroke="#c2b0ff" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    title: 'Custom Software\nSystems',
    description: 'Bespoke solutions for complex challenges. Built to scale.',
    japanese: '設計',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#c2b0ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = -((y - centerY) / centerY) * 15;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 769px)', () => {
        const track = trackRef.current;
        if (!track) return;

        const scrollWidth = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: `+=${scrollWidth}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Fade out scroll hint quickly on scroll start
        const hint = sectionRef.current?.querySelector(`.${styles.scrollHint}`);
        
        if (hint) {
          gsap.to(hint, {
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=200',
              scrub: true,
            },
          });
        }

        // Animate wheel rotation bound to scroll position
        const wheels = sectionRef.current?.querySelectorAll(`.${styles.wheel}`);
        if (wheels && wheels.length > 0) {
          const circumference = 2 * Math.PI * 27.5;
          const totalRotation = -360 * (scrollWidth / circumference);
          
          gsap.to(wheels, {
            rotation: totalRotation,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: `+=${scrollWidth}`,
              scrub: 0.8,
            },
          });
        }
      });

      // Mobile: Stacking cards with vertical scroll pinning
      mm.add('(max-width: 768px)', () => {
        const track = trackRef.current;
        if (!track) return;
        const cards = track.querySelectorAll(`.${styles.card}`);
        if (!cards || cards.length === 0) return;

        // Initial positions: Card 0 sits in view, subsequent cards are off-screen at the bottom
        cards.forEach((card, i) => {
          gsap.set(card, {
            y: i === 0 ? 0 : window.innerHeight,
            zIndex: 10 + i,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: `+=${(cards.length - 1) * 100}%`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // Slide each card up to fully cover the previous one — clean replace, no overlap
        for (let i = 1; i < cards.length; i++) {
          tl.to(cards[i], {
            y: 0,
            ease: 'none',
          });
          // Hide the now-covered card so its shadow doesn't bleed through
          tl.set(cards[i - 1], { opacity: 0 });
        }

        // Fade out scroll hint on mobile scroll start
        const hint = sectionRef.current?.querySelector(`.${styles.scrollHint}`);
        if (hint) {
          gsap.to(hint, {
            opacity: 0,
            scale: 0.9,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=150',
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.services} id="services">

      {/* Scroll hint — right side, fades on scroll */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollRing}>
          <svg viewBox="0 0 100 100" className={styles.scrollRingSvg}>
            <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"
              strokeDasharray="66 198" className={styles.scrollRingArc} />
          </svg>
          <div className={styles.scrollArrow}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>

      <div ref={trackRef} className={styles.track}>

        {/* Heading — same row as cards, takes up full viewport width */}
        <div className={styles.headingBlock}>
          <span className={styles.label}>Services We Provide</span>
          <h2 className={styles.heading}>
            What We<br />
            <span className={styles.headingAccent}>Build</span>
          </h2>
        </div>

        {/* Tow Rope connecting truck bed to the first card (layered behind) */}
        <div className={styles.towRope}>
          <svg width="427" height="400" viewBox="0 0 427 400" fill="none">
            {/* Soft Shadow */}
            <path
              d={ropePath}
              stroke="rgba(0,0,0,0.22)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Dark brown base layer */}
            <path
              d={ropePath}
              stroke="#3E2723"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Main brown rope color */}
            <path
              d={ropePath}
              stroke="#7B502C"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Mid-tone braid segment twists */}
            <path
              d={ropePath}
              stroke="#9C6B43"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="12,8"
            />
            {/* Tan highlights */}
            <path
              d={ropePath}
              stroke="#D2B48C"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="6,14"
              strokeDashoffset="3"
            />
            {/* Specular light fiber reflection */}
            <path
              d={ropePath}
              stroke="#FFF5E6"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="3,17"
              strokeDashoffset="6"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* Decorative car inside the track, moving with the cards */}
        <div className={styles.decorCarTrack}>
          <div className={styles.carWrapper}>
            <div className={styles.rumbleWrapper}>
              {/* Base truck */}
              <Image
                src="/carr.png"
                alt="Yellow delivery truck"
                width={400}
                height={400}
                className={styles.carImage}
                priority
              />

              {/* Left Wheel Overlay */}
              <div className={`${styles.wheel} ${styles.leftWheel}`}>
                <Image
                  src="/carr.png"
                  alt=""
                  width={400}
                  height={400}
                  className={styles.wheelImage}
                  priority
                />
              </div>

              {/* Right Wheel Overlay */}
              <div className={`${styles.wheel} ${styles.rightWheel}`}>
                <Image
                  src="/carr.png"
                  alt=""
                  width={400}
                  height={400}
                  className={styles.wheelImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards with alternating tilt */}
        {services.map((service, i) => (
          <div
            key={i}
            className={styles.card}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ '--tilt': i % 2 === 0 ? '-5deg' : '5deg' }}
          >
            {/* Japanese vertical watermark in top-right */}
            {service.japanese && (
              <div className={styles.japaneseText}>
                {service.japanese}
              </div>
            )}

            {/* Decorative arcs */}
            <svg className={styles.cardArcs} viewBox="0 0 400 550" preserveAspectRatio="none">
              <circle cx="200" cy="600" r="380" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15" />
              <circle cx="200" cy="600" r="300" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.12" />
              <circle cx="200" cy="600" r="220" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.08" />
              <path d="M-50,150 C100,50 300,250 450,100" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.12" />
              <path d="M-50,220 C120,80 280,380 450,240" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.08" />
            </svg>

            {/* Background image and content overlay */}
            <div className={styles.phoneArea}>
              <Image
                src="/imgggg.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className={styles.cardBgImage}
                priority={i < 3}
              />
              <div className={styles.screenContent}>
                {service.icon && (
                  <div className={styles.cardIcon}>
                    {service.icon}
                  </div>
                )}
                <h3 className={styles.cardTitle}>
                  {service.title.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < service.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h3>
              </div>
            </div>

            {/* Bottom info area — logo + description */}
            <div className={styles.cardInfo}>
              <Image
                src="/log2.svg"
                alt=""
                width={40}
                height={28}
                className={styles.cardLogo}
              />
              {service.description && (
                <p className={styles.cardDesc}>
                  {service.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.transitionSpacer} />
    </section>
  );
}
