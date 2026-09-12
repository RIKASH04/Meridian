'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    // Center the custom cursors
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(dot, { xPercent: -50, yPercent: -50 });

    // GSAP quickTo for ultra-smooth and hardware-accelerated mouse tracking
    const xToCursor = gsap.quickTo(cursor, 'x', { duration: 0.3, ease: 'power3.out' });
    const yToCursor = gsap.quickTo(cursor, 'y', { duration: 0.3, ease: 'power3.out' });
    const scaleToCursor = gsap.quickTo(cursor, 'scale', { duration: 0.25, ease: 'power2.out' });

    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.06, ease: 'power2.out' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.06, ease: 'power2.out' });

    let lastMouseX = window.innerWidth / 2;
    let lastMouseY = window.innerHeight / 2;
    let lastTime = performance.now();
    let isHovering = false;

    // Throttled RAF handler for mouse velocity
    let rafId = null;
    let pendingEvent = null;

    const processPointer = () => {
      if (!pendingEvent) return;
      const { clientX, clientY } = pendingEvent;

      xToCursor(clientX);
      yToCursor(clientY);
      xToDot(clientX);
      yToDot(clientY);

      const now = performance.now();
      const dt = Math.max(now - lastTime, 1);
      const dx = clientX - lastMouseX;
      const dy = clientY - lastMouseY;
      const distance = Math.hypot(dx, dy);
      const speed = Math.min(distance / dt, 1.5);

      if (!isHovering) {
        scaleToCursor(1 + speed * 0.15);
      }

      lastMouseX = clientX;
      lastMouseY = clientY;
      lastTime = now;
      pendingEvent = null;
    };

    const onMouseMove = (e) => {
      pendingEvent = e;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          processPointer();
          rafId = null;
        });
      }
    };

    // Clean, high-performance event delegation — replaces heavy MutationObserver
    const onMouseOver = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor-hover], input, textarea');
      if (interactive) {
        isHovering = true;
        gsap.to(cursor, {
          scale: 1.8,
          backgroundColor: 'rgba(94, 25, 246, 0.25)',
          borderColor: '#8EA0FF',
          duration: 0.3,
          overwrite: 'auto',
        });
        gsap.to(dot, {
          scale: 1.4,
          backgroundColor: '#8EA0FF',
          duration: 0.2,
          overwrite: 'auto',
        });
      }
    };

    const onMouseOut = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor-hover], input, textarea');
      if (interactive) {
        isHovering = false;
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 255, 255, 0.5)',
          duration: 0.3,
          overwrite: 'auto',
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#fff',
          duration: 0.25,
          overwrite: 'auto',
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="customCursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1.2px solid rgba(255, 255, 255, 0.5)',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      />
      <div
        ref={cursorDotRef}
        className="customCursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      />
    </>
  );
}
