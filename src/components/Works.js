'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Works.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: 'neighbourfriendly',
    title: 'NeighborFriendlyRentals',
    category: 'Website',
    image: '/images/projects/neighbourfriendly/krish1.png',
  },
  {
    slug: 'krishimitra',
    title: 'KrishiMitra',
    category: 'Mobile App',
    image: '/images/projects/krishimitra/krishi5.png',
  },
  {
    slug: 'clensifilters',
    title: 'Clensifilters',
    category: 'E-commerce',
    image: '/images/works/clensifilters_sketch.png',
  },
  {
    slug: 'wagyuprimeuae',
    title: 'Wagyu Prime UAE',
    category: 'E-commerce',
    image: '/images/works/wagyuprimeuae.png',
  },
  {
    slug: 'alfredai',
    title: 'Alfred AI',
    category: 'AI Chatbot',
    image: '/images/projects/alfredai/alf1.png',
  },
  {
    slug: 'q-pro',
    title: 'Q-Pro',
    category: 'Smart Queue System',
    image: '/images/works/qpro.png',
  },
];

const extendedProjects = [...projects, ...projects, ...projects];

export default function Works() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Drag-to-scroll state refs
  const isDragging = useRef(false);
  const isTouching = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const hasDragged = useRef(false);

  useEffect(() => {
    // Initialize scroll position to the middle copy on load
    const container = carouselRef.current;
    if (container) {
      const initScroll = () => {
        const card = container.querySelector(`.${styles.card}`);
        if (card) {
          const cardWidth = card.offsetWidth;
          const gap = window.innerWidth <= 768 ? 20 : 40;
          const step = cardWidth + gap;
          const N = projects.length;
          container.scrollLeft = N * step;
        }
      };
      
      initScroll();
      const timer = setTimeout(initScroll, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Sync scroll position with active dot indicator and loop infinitely
  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const card = container.querySelector(`.${styles.card}`);
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = window.innerWidth <= 768 ? 20 : 40; // Gap between cards in pixels
    const step = cardWidth + gap;
    const N = projects.length;

    // Calculate which card of the copy is active using modulo
    const index = Math.round(scrollLeft / step) % N;
    // Handle negative values if any
    const normalizedIndex = index < 0 ? (index + N) % N : index;
    setActiveIndex(normalizedIndex);

    // Do not warp mid-drag or mid-touch to prevent visual jumpiness
    if (isDragging.current || isTouching.current) {
      return;
    }

    // Only warp when close to the absolute ends of the 3x copy list
    if (scrollLeft < 0.8 * step) {
      container.style.scrollSnapType = 'none';
      container.scrollLeft = scrollLeft + N * step;
      setTimeout(() => {
        if (container) container.style.scrollSnapType = 'x mandatory';
      }, 50);
    } else if (scrollLeft > (3 * N - 1.8) * step) {
      container.style.scrollSnapType = 'none';
      container.scrollLeft = scrollLeft - N * step;
      setTimeout(() => {
        if (container) container.style.scrollSnapType = 'x mandatory';
      }, 50);
    }
  };

  // Scroll smoothly to the clicked card
  const scrollToCard = (index) => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.querySelector(`.${styles.card}`);
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = window.innerWidth <= 768 ? 20 : 40;
    const step = cardWidth + gap;
    const N = projects.length;

    // Temporarily disable snap to avoid fighting the smooth scroll
    container.style.scrollSnapType = 'none';
    container.scrollTo({
      left: (index + N) * step,
      behavior: 'smooth',
    });
    setActiveIndex(index);

    // Re-enable snap after the smooth scroll finishes
    setTimeout(() => {
      if (container) container.style.scrollSnapType = 'x mandatory';
    }, 600);
  };

  // Mouse Drag handlers for desktop drag-to-scroll
  const handleMouseDown = (e) => {
    const container = carouselRef.current;
    if (!container) return;

    isDragging.current = true;
    container.style.scrollBehavior = 'auto'; // Disable transition during drag
    container.style.cursor = 'grabbing';
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftStart.current = container.scrollLeft;

    // Track start position to detect actual drag vs click
    hasDragged.current = false;
    dragStartX.current = e.pageX;
    dragStartY.current = e.pageY;
  };

  const handleMouseLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const container = carouselRef.current;
    if (container) {
      container.style.scrollBehavior = 'smooth';
      container.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const container = carouselRef.current;
    if (container) {
      container.style.scrollBehavior = 'smooth';
      container.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const container = carouselRef.current;
    if (!container) return;

    // Detect if we actually dragged more than a tiny threshold
    const dx = Math.abs(e.pageX - dragStartX.current);
    const dy = Math.abs(e.pageY - dragStartY.current);
    if (dx > 5 || dy > 5) {
      hasDragged.current = true;
    }

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    container.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <section ref={sectionRef} className={styles.works} id="works">
      {/* Top light-themed header section */}
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.topLeft}>
            <span className={styles.label}>Our Works</span>
            <h2 className={styles.heading}>
              Our <span className={styles.headingAccent}>Works</span>
            </h2>
          </div>
          <Link href="/projects" className={styles.seeAll} data-cursor-hover>
            See All Projects
            <span className={styles.seeAllArrow}>→</span>
          </Link>
        </div>
      </div>

      {/* Bottom dark-themed carousel section */}
      <div className={styles.carouselSection}>
        <div
          ref={carouselRef}
          className={styles.carouselContainer}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => { isTouching.current = true; }}
          onTouchEnd={() => { isTouching.current = false; }}
          onTouchCancel={() => { isTouching.current = false; }}
          style={{ cursor: 'grab' }}
        >
          <div className={styles.track}>
            {extendedProjects.map((project, i) => {
              const isCardActive = (i % projects.length) === activeIndex;
              return (
                <Link
                  key={i}
                  href={`/${project.slug}`}
                  className={styles.card}
                  data-cursor-hover
                  onClick={(e) => {
                    if (hasDragged.current) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 640px"
                      className={styles.cardImage}
                      priority={i >= projects.length && i < 2 * projects.length} // Prioritize middle copy
                      draggable={false} // Prevent default browser image drag
                    />
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={`${styles.cardTitle} ${isCardActive ? styles.activeTitle : ''}`}>
                      {project.title}
                    </h3>
                    <span className={`${styles.cardCategory} ${isCardActive ? styles.activeCategory : ''}`}>
                      {project.category}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className={styles.pagination}>
          <div className={styles.dotContainer}>
            {projects.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
                onClick={() => scrollToCard(i)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.transitionSpacer} />
    </section>
  );
}
