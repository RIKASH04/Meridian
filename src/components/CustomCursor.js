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

    // GSAP quickTo for ultra-smooth and lag-free mouse tracking
    const xToCursor = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
    const yToCursor = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });
    
    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' });

    let lastMouseX = window.innerWidth / 2;
    let lastMouseY = window.innerHeight / 2;
    let lastTime = Date.now();
    let angle = 0;
    let speed = 0;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      xToCursor(clientX);
      yToCursor(clientY);
      xToDot(clientX);
      yToDot(clientY);

      // Simple, beautiful velocity scaling (elastic spring effect)
      const now = Date.now();
      const dt = now - lastTime || 1;
      const dx = clientX - lastMouseX;
      const dy = clientY - lastMouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      speed = Math.min(distance / dt, 1.5);

      gsap.to(cursor, {
        scale: 1 + speed * 0.2,
        duration: 0.2,
        overwrite: 'auto'
      });

      lastMouseX = clientX;
      lastMouseY = clientY;
      lastTime = now;
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 1.8,
        backgroundColor: 'rgba(94, 23, 235, 0.25)',
        borderColor: '#8EA0FF',
        duration: 0.35,
        overwrite: 'auto'
      });
      gsap.to(dot, {
        scale: 1.5,
        backgroundColor: '#8EA0FF',
        duration: 0.2,
        overwrite: 'auto'
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        duration: 0.35,
        overwrite: 'auto'
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: '#fff',
        duration: 0.3,
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Dynamic selectors to register interactive hover states
    const updateListeners = () => {
      const links = document.querySelectorAll('a, button, [data-cursor-hover]');
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    updateListeners();

    // Use MutationObserver to automatically apply hover effects on newly rendered DOM elements
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      const links = document.querySelectorAll('a, button, [data-cursor-hover]');
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
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
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={cursorDotRef}
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
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
