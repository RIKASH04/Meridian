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
    title: 'NeighborFriendlyRentals',
    category: 'Web Platform',
    subtitle: 'A trust-first peer-to-peer neighborhood rental marketplace with verified users and digital agreements.',
    client: 'NeighbourFriendly Rentals',
    date: '2025',
    tags: ['Next.js', 'Geo-Fencing', 'Peer-to-Peer', 'Web App'],
    heroImage: '/images/works/neighbourfriendly.png',
    conceptTitle: 'Trust-First Rental Sharing',
    conceptDesc: 'Finding reliable items and renting them within local communities has been challenging due to safety and trust concerns. NeighbourFriendly Rentals is a trust-first marketplace designed to let users safely turn unused household items (like cameras, drills, and speakers) into extra income, while allowing neighbors to rent what they need locally for a fraction of the cost.',
    approachTitle: 'Verification & Security Ecosystem',
    approachDesc: 'We engineered a local-first discovery directory focusing on verified identity and secure interactions. By implementing digital rental agreements and rating/review mechanisms, we eliminated the stress and paperwork of neighborhood renting. The site allows seamless browsing, direct chat, and transparent user verification.',
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
    subtitle: 'Kannada-first voice assistant AI app empowering farmers with crop disease detection, price predictions, and soil analytics.',
    client: 'Agricultural AI Initiative',
    date: '2026',
    tags: ['React Native', 'Voice Assistant', 'AI Diagnostics', 'Price Prediction'],
    heroImage: '/images/works/krishimitra.png',
    conceptTitle: 'AI Agronomy & Voice First Accessibility',
    conceptDesc: 'Remote agricultural regions benefit immensely from real-time pricing and crop diagnostics, but language and literacy barriers often limit accessibility. KrishiMitra is designed specifically for Kannada-speaking farmers, prioritizing a voice assistant interface so farmers can interact and query information naturally through spoken commands.',
    approachTitle: 'Smart Telemetry & Price Forecasting',
    approachDesc: 'We integrated a mobile-optimized computer vision model for instant crop disease detection from photos, paired with an advanced price prediction algorithm that acts like a stock market ticker for agricultural crops. The app also delivers critical localized data such as weather, soil health metrics, and wholesale market prices, all accessible via voice assistance.',
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
    category: 'Shower Filter UAE',
    subtitle: 'Premium filtered shower heads engineered with activated carbon technology for UAE water conditions.',
    client: 'Clensi UAE',
    date: '2026',
    tags: ['Next.js', 'B2C E-commerce', 'Stripe', 'Activated Carbon'],
    heroImage: '/images/works/clensifilters_sketch.png',
    conceptTitle: 'Pure Shower Filtration',
    conceptDesc: 'Hard minerals, chlorine, and impurities in tap water frequently strip moisture from hair and skin, a common issue under UAE water conditions. Clensifilters was designed as a premium B2C e-commerce platform offering state-of-the-art filtered shower heads that remove 99% of heavy metals and chlorine.',
    approachTitle: 'High-Conversion E-commerce Architecture',
    approachDesc: 'We built a high-performance headless digital storefront integrated with Stripe for secure payments and a fast checkout flow. The user interface showcases scientific educational guides, customer testimonials, and an easy replacement cartridge subscription structure to provide a premium wellness product experience across all 7 Emirates.',
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
    subtitle: 'Direct-to-consumer luxury culinary delivery showcasing premium Japanese A5, Australian, and American beef cuts.',
    client: 'Wagyu Prime Middle East',
    date: '2026',
    tags: ['Luxury Retail', 'Shopify Headless', 'Next.js', 'Stripe'],
    heroImage: '/images/works/wagyuprimeuae.png',
    conceptTitle: 'Elite Gourmet Delivery',
    conceptDesc: 'Delivering high-value, temperature-sensitive Japanese A5 Wagyu requires both a highly trustable cold logistics integration and a visual presence that represents the prestige of the culinary cuts. Wagyu Prime UAE serves elite meat cuts across the UAE through a direct-to-consumer luxury storefront.',
    approachTitle: 'Immersive Luxury Purchasing',
    approachDesc: 'We engineered a premium dark-themed storefront featuring gold accent styling, smooth animations, and detailed marbling calculators. The checkout pipeline is optimized for luxury food ordering, displaying delivery schedule selectors integrated with temperature-controlled shipping partners to guarantee quality steaks on arrival.',
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
    subtitle: 'An intelligent assistant helping users understand concepts deeply with customizable difficulty levels.',
    client: 'Alfred AI Corp',
    date: '2026',
    tags: ['AI Chatbot', 'LLMs', 'Adaptive Learning', 'UX Design'],
    heroImage: '/images/works/alfredai.png',
    conceptTitle: 'Adaptive Learning & Deep Comprehension',
    conceptDesc: 'Standard AI assistants answer queries with a single, fixed explanation style that might be too simple or overly complex for the user\'s current knowledge. Alfred AI is built to democratize deep understanding of concepts by showing the inherent difficulty level of topics and allowing users to customize the difficulty level of the answers they receive.',
    approachTitle: 'Tailored Interface & Interactive Settings',
    approachDesc: 'We designed a clean, user-friendly workspace featuring real-time stream replies and an interactive complexity slider. The interface exposes difficulty indicators for each learning path, letting users dial the output style from beginner-friendly metaphors to postgraduate academic breakdowns.',
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
    category: 'Smart Queue SaaS',
    subtitle: 'Enterprise-grade queue management SaaS to prevent overcrowding with admin and super-admin panels.',
    client: 'Q-Pro Systems',
    date: '2025',
    tags: ['WebSockets', 'SaaS Platform', 'Admin Panel', 'Real-time'],
    heroImage: '/images/works/qpro.png',
    conceptTitle: 'Crowding Prevention & Queue Logistics',
    conceptDesc: 'Busy clinics, retail stores, and service desks struggle with physical crowding and long waiting times. Q-Pro resolves this by hosting a lightweight virtual queue system where customers can join simply by scanning a QR code or accessing the website, keeping them updated on wait times from anywhere.',
    approachTitle: 'Real-Time Telemetry & Multi-Tier Admin',
    approachDesc: 'We built a scalable WebSocket architecture for instant queue updates. We engineered separate admin and super-admin portals, enabling store managers and organization executives to monitor waiting dashboards, assign tasks, configure QR printouts, and analyze peak-hour service telemetry.',
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
            alt={`${project.title} case study - ${project.category} by Meridian Digital Agency`}
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
                  alt={`${project.title} ${project.category} application dashboard detail ${index + 1}`}
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
                  alt={`${project.title} ${project.category} user interface design showcase ${index + 1}`}
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
