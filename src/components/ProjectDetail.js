'use client';
import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import styles from './ProjectDetail.module.css';

const PROJECT_DATA = {
  neighbourfriendly: {
    title: 'NeighborFriendly',
    category: 'Web Platform',
    subtitle: 'Reimagining local community engagement and peer-to-peer neighborhood support.',
    client: 'NeighborFriendly Inc.',
    date: 'August 2025',
    tags: ['Next.js', 'Geo-Fencing', 'UI/UX Design', 'Web App'],
    heroImage: '/images/works/neighbourfriendly.png',
    conceptTitle: 'Project Genesis & Vision',
    conceptDesc: 'Finding reliable local services and fostering genuine community support within neighborhoods has historically been fragmented across giant, ad-laden networks. NeighborFriendly was conceived to bridge this gap, offering a seamless, ad-free digital ecosystem where residents can securely connect, share alerts, support local creators, and coordinate immediate neighborhood favors in real-time.',
    approachTitle: 'Design & Engineering Strategy',
    approachDesc: 'We designed and engineered a modern, ultra-responsive web platform focused on verified user identity and location-aware directory lookup. Leveraging high-performance geo-location queries, users can discover services within custom radiuses. We integrated a real-time messaging system, high-contrast layouts, and clean review verification to build absolute trust.',
    galleryImages: [
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80'
    ],
    gridImages: [
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1000&q=80'
    ],
  },
  krishimitra: {
    title: 'KrishiMitra',
    category: 'Mobile Application',
    subtitle: 'Empowering rural farmers with real-time agronomy, market pricing, and smart diagnostics.',
    client: 'Ministry of Agriculture & Rural Development',
    date: 'October 2025',
    tags: ['React Native', 'AI Diagnostics', 'Offline-First', 'Mobile App'],
    heroImage: '/images/works/krishimitra.png',
    conceptTitle: 'Agricultural Access Gap',
    conceptDesc: 'Farmers in remote agricultural zones frequently face crop diseases, unpredictable climate shifts, and lack of direct wholesale pricing. Our objective with KrishiMitra was to build an ultra-accessible, offline-first mobile app that operates under weak bandwidth and converts complex agronomic science into clear, localized actions.',
    approachTitle: 'Strategic Technology Architecture',
    approachDesc: 'We built a lightweight React Native application featuring offline SQLite syncing for local data preservation. We integrated a mobile-optimized machine learning model to diagnose plant diseases from standard camera photos, alongside a custom text-to-speech broadcast system to break down accessibility barriers for non-literate farmers.',
    galleryImages: [
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=80'
    ],
    gridImages: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80'
    ],
  },
  clensifilters: {
    title: 'Clensifilters',
    category: 'E-commerce / B2B',
    subtitle: 'A premium, high-conversion digital storefront for industrial filtration solutions.',
    client: 'Clensi Industrial Corporation',
    date: 'November 2025',
    tags: ['Next.js', 'Parametric Search', 'Headless B2B', 'E-commerce'],
    heroImage: '/images/works/clensifilters_sketch.png',
    conceptTitle: 'Simplifying Procurement Complexity',
    conceptDesc: 'Industrial B2B buying flows are notorious for clunky, outdated catalog sheets and slow quotation pipelines. Clensifilters needed a digital platform that would simplify parts specification discovery and ordering for engineers worldwide, while establishing a premium, tech-forward brand identity.',
    approachTitle: 'Headless Architecture & Search Logic',
    approachDesc: 'We developed a headless e-commerce store with static-generation for instant load speeds. At its core is a custom parametric search system allowing procurement agents to filter thousands of specifications in fractions of a second. We structured the UI with clean typography, high-definition product blueprints, and single-click RFQs.',
    galleryImages: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=1000&q=80'
    ],
    gridImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80'
    ],
  },
  wagyuprimeuae: {
    title: 'Wagyu Prime UAE',
    category: 'Luxury E-commerce',
    subtitle: 'Direct-to-consumer luxury culinary e-commerce showcasing elite Japanese beef cuts.',
    client: 'Wagyu Prime Middle East Group',
    date: 'December 2025',
    tags: ['Shopify Headless', 'Branding', 'Animation', 'Luxury Retail'],
    heroImage: '/images/works/wagyuprimeuae.png',
    conceptTitle: 'Elevating the Culinary Experience',
    conceptDesc: 'Wagyu beef is an elite, high-value product, but standard retail websites fail to convey the prestige and heritage of Japanese meat cuts. Our challenge was to craft a luxury direct-to-consumer storefront that feels as sophisticated and curated as a high-end Michelin-starred steakhouse.',
    approachTitle: 'Visual Craft & Interactive Elegance',
    approachDesc: 'We developed a dark-mode luxury e-commerce experience featuring smooth gold gradients, high-end photography, and immersive page transitions. We included interactive grading calculators (covering A5 score metrics) and custom delivery calendars synced to temperature-controlled logistics, guaranteeing pristine product quality on arrival.',
    galleryImages: [
      'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1000&q=80'
    ],
    gridImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1628294895520-23f2f81498b3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'
    ],
  },
  alfredai: {
    title: 'Alfred AI',
    category: 'AI SaaS Product',
    subtitle: 'Enterprise-grade intelligent assistant optimizing workplace workflow and documentation.',
    client: 'Alfred Technologies Ltd.',
    date: 'January 2026',
    tags: ['LLMs & RAG', 'Next.js', 'Enterprise SaaS', 'AI Integration'],
    heroImage: '/images/works/alfredai.png',
    conceptTitle: 'Democratizing Internal Intelligence',
    conceptDesc: 'Modern enterprises waste thousands of hours weekly searching through disjointed spreadsheets, wikis, and PDF archives. Alfred AI was developed to serve as a secure internal intelligence engine, digesting huge troves of proprietary data and delivering instantaneous, accurately cited answers to employee queries.',
    approachTitle: 'Interface Clarity & Data Security',
    approachDesc: 'We created an extremely clean chat workspace featuring real-time stream rendering, syntax highlights, and hover-triggered source citation cards. We designed an admin control center for workspace telemetry and role permissions, maintaining enterprise-grade safety configurations without compromising on clean usability.',
    galleryImages: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
    ],
    gridImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80'
    ],
  },
  qpro: {
    title: 'Q-Pro',
    category: 'Smart Queue System',
    subtitle: 'Modernizing retail and healthcare wait-times with smart, virtual queue logistics.',
    client: 'Q-Pro Queue Systems',
    date: 'February 2026',
    tags: ['WebSockets', 'IoT Integration', 'Dashboard', 'Real-time SaaS'],
    heroImage: '/images/works/qpro.png',
    conceptTitle: 'Frictionless Waiting Operations',
    conceptDesc: 'Crowded lobbies and physical ticket systems cause high customer friction. Q-Pro replaces outdated kiosks with a lightweight virtual queue: customers scan a QR code to join, receive real-time queue notifications on their phone, and can wait comfortably anywhere they choose.',
    approachTitle: 'Realtime Infrastructure & Telemetry',
    approachDesc: 'We engineered a highly performant WebSocket broker powering instant status syncs. The dashboard lets agents view waiting arrays, estimate completion times, and trigger alerts. We styled the customer web screen with responsive ring animations and subtle haptic cues to make waiting feel completely stress-free.',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
    ],
    gridImages: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80'
    ],
  }
};

// Map q-pro (slug with hyphen) to qpro data key
PROJECT_DATA['q-pro'] = PROJECT_DATA.qpro;

export default function ProjectDetail() {
  const params = useParams();
  const rawId = params?.id || '';
  const id = rawId.toLowerCase();
  
  const carouselRef = useRef(null);

  const project = PROJECT_DATA[id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (project) {
      // Entrance animations using GSAP
      gsap.fromTo(`.${styles.heroImage}`,
        { scale: 1.15, filter: 'brightness(0.3) contrast(1.1)' },
        { scale: 1.05, filter: 'brightness(0.7) contrast(1.1)', duration: 1.8, ease: 'power3.out' }
      );
      
      gsap.fromTo(`.${styles.heroCategory}`, 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      );

      gsap.fromTo(`.${styles.heroTitle}`, 
        { opacity: 0, y: 35 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.3 }
      );

      gsap.fromTo(`.${styles.heroSubtitle}`, 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.5 }
      );
    }
  }, [id, project]);

  const handleScrollCarousel = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(`.${styles.moreCard}`);
      if (card) {
        const step = card.offsetWidth + 30; // Card width + gap
        const scrollAmount = direction === 'left' ? -step * 1.2 : step * 1.2;
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  if (!project) {
    return (
      <div className={styles.wrapper} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between', backgroundColor: '#121212', color: '#ffffff' }}>
        <Navbar visible={true} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 24px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#5E17EB', fontWeight: '700', marginBottom: '16px' }}>404 Project Not Found</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', letterSpacing: '-0.02em', margin: '0 0 24px 0' }}>The creation does not exist.</h1>
          <p style={{ color: '#aaaaaa', maxWidth: '500px', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '40px' }}>
            The project details you are looking for might have been relocated or renamed. Please explore our other creations.
          </p>
          <Link href="/#works" style={{ display: 'inline-flex', padding: '16px 36px', borderRadius: '100px', backgroundColor: '#5E17EB', color: '#ffffff', fontWeight: '600', textDecoration: 'none', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            Explore All Works
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get the other projects to display in the "More Creations" bottom slider
  const otherProjects = Object.keys(PROJECT_DATA)
    .filter((key) => key !== id && key !== 'q-pro') // Filter out active project and the duplicate q-pro alias
    .map((key) => ({
      slug: key,
      ...PROJECT_DATA[key],
    }));

  return (
    <div className={styles.wrapper}>
      <CustomCursor />
      
      {/* Absolute Navbar on Subpages */}
      <Navbar visible={true} />

      {/* ─── Hero Banner Section ─── */}
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroCategory}>{project.category}</span>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroSubtitle}>{project.subtitle}</p>
        </div>
      </section>

      {/* ─── Detailed Specifications Section ─── */}
      <section className={styles.detailSection}>
        <div className={styles.container}>
          {/* Panel 1: Genesis & Concept */}
          <div className={styles.panelGrid}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>{project.conceptTitle}</h2>
              <div className={styles.metaInfo}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>/ Client</span>
                  <span className={styles.metaValue}>{project.client}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>/ Timeline</span>
                  <span className={styles.metaValue}>{project.date}</span>
                </div>
              </div>
              <div className={styles.tagsContainer}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tagPill}>{tag}</span>
                ))}
              </div>
            </div>
            <div className={styles.rightCol}>
              <p className={styles.description}>{project.conceptDesc}</p>
            </div>
          </div>

          {/* Double Image Gallery Mockup */}
          <div className={styles.galleryMid}>
            {project.galleryImages.map((imgSrc, index) => (
              <div key={index} className={styles.galleryImgWrap}>
                <Image
                  src={imgSrc}
                  alt={`${project.title} detail ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className={styles.galleryImg}
                />
              </div>
            ))}
          </div>

          {/* Panel 2: Execution & Strategy */}
          <div className={styles.panelGrid}>
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>{project.approachTitle}</h2>
            </div>
            <div className={styles.rightCol}>
              <p className={styles.description}>{project.approachDesc}</p>
            </div>
          </div>

          {/* Grid Gallery Details */}
          <div className={styles.galleryGrid}>
            {project.gridImages.map((imgSrc, index) => (
              <div key={index} className={styles.gridImgWrap}>
                <Image
                  src={imgSrc}
                  alt={`${project.title} grid layout ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className={styles.gridImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom creations slider: More Creations ─── */}
      <section className={styles.moreWorksSection}>
        <div className={styles.container}>
          <div className={styles.moreWorksHeader}>
            <div>
              <span className={styles.moreLabel}>/ Discover</span>
              <h2 className={styles.moreHeading}>More Creations</h2>
            </div>
            <div className={styles.moreNav}>
              <button
                className={styles.navArrowBtn}
                onClick={() => handleScrollCarousel('left')}
                aria-label="Previous Project"
              >
                ←
              </button>
              <button
                className={styles.navArrowBtn}
                onClick={() => handleScrollCarousel('right')}
                aria-label="Next Project"
              >
                →
              </button>
            </div>
          </div>

          {/* Horizontal scroll track */}
          <div ref={carouselRef} className={styles.moreWorksCarousel}>
            <div className={styles.carouselTrack}>
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className={styles.moreCard}
                >
                  <div className={styles.moreCardImageWrap}>
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      sizes="440px"
                      className={styles.moreCardImage}
                    />
                  </div>
                  <div className={styles.moreCardInfo}>
                    <span className={styles.moreCardCategory}>{p.category}</span>
                    <h3 className={styles.moreCardTitle}>{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA: Back to all works */}
          <div className={styles.seeAllCreationsContainer}>
            <Link href="/projects" className={styles.seeAllCreationsBtn}>
              Explore All Works
              <span className={styles.seeAllCreationsIcon}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
