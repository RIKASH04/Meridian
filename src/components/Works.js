'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './Works.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'neighbourfriendly',
    category: 'Website',
    image: '/neighbourfriendly.png',
  },
  {
    title: 'krishimitra',
    category: 'Mobile App',
    image: '/krishimitra.png',
  },
  {
    title: 'Clensifilters',
    category: 'E-commerce',
    image: '/clensifilters_sketch.png',
  },
  {
    title: 'wagyuprimeuae',
    category: 'E-commerce',
    image: '/wagyuprimeuae.png',
  },
  {
    title: 'alfredai',
    category: 'AI Chatbot',
    image: '/alfredai.png',
  },
  {
    title: 'q-pro',
    category: 'Smart Queue System',
    image: '/qpro.png',
  },
];

const extendedProjects = [...projects, ...projects, ...projects];

export default function Works() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Drag-to-scroll state refs
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

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

    // Do not warp mid-drag to prevent cursor judder
    if (isDragging.current) {
      return;
    }

    const scrollLeft = container.scrollLeft;
    const card = container.querySelector(`.${styles.card}`);
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = window.innerWidth <= 768 ? 20 : 40; // Gap between cards in pixels
    const step = cardWidth + gap;
    const N = projects.length;

    // Check bounds for infinite loop wrap-around
    if (scrollLeft < N * step) {
      // Temporarily disable scroll snapping to prevent stutter/stuck animation
      container.style.scrollSnapType = 'none';
      container.scrollLeft = scrollLeft + N * step;
      setTimeout(() => {
        container.style.scrollSnapType = 'x mandatory';
      }, 30);
      return;
    } else if (scrollLeft >= 2 * N * step) {
      // Temporarily disable scroll snapping to prevent stutter/stuck animation
      container.style.scrollSnapType = 'none';
      container.scrollLeft = scrollLeft - N * step;
      setTimeout(() => {
        container.style.scrollSnapType = 'x mandatory';
      }, 30);
      return;
    }

    // Calculate which card of the middle copy is active
    const index = Math.round((container.scrollLeft - N * step) / step);
    setActiveIndex(Math.min(Math.max(index, 0), N - 1));
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
      container.style.scrollSnapType = 'x mandatory';
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
            <span className={styles.label}>Featured Works</span>
            <h2 className={styles.heading}>
              Featured <span className={styles.headingAccent}>Works</span>
            </h2>
          </div>
          <a href="#" className={styles.seeAll} data-cursor-hover>
            See All Projects
            <span className={styles.seeAllArrow}>→</span>
          </a>
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
          style={{ cursor: 'grab' }}
        >
          <div className={styles.track}>
            {extendedProjects.map((project, i) => {
              const isCardActive = (i % projects.length) === activeIndex;
              return (
                <div key={i} className={styles.card} data-cursor-hover>
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
                </div>
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
