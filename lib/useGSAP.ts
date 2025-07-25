import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2 }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
      );

      gsap.fromTo('.hero-buttons',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: 'back.out(1.7)' }
      );

      gsap.fromTo('.hero-stats',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 1.2, ease: 'elastic.out(1, 0.3)' }
      );

      gsap.fromTo('.hero-image',
        { x: 100, opacity: 0, rotation: 5 },
        { x: 0, opacity: 1, rotation: 0, duration: 1.5, delay: 0.3, ease: 'power3.out' }
      );

      // Floating animation for hero image
      gsap.to('.hero-image', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });

      // Services section animations
      gsap.fromTo('.service-card',
        { y: 100, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Features section animations
      gsap.fromTo('.feature-item',
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.features-image',
        { x: 100, opacity: 0, rotation: -5 },
        { 
          x: 0, 
          opacity: 1, 
          rotation: 0, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Articles section animations
      gsap.fromTo('.article-card',
        { y: 80, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.7, 
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.articles-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // CTA section animations
      gsap.fromTo('.cta-content',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Contact form animations
      gsap.fromTo('.contact-form',
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.contact-info',
        { x: 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Navigation animations
      gsap.fromTo('.nav-item',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );

      // Logo animation
      gsap.fromTo('.logo',
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' }
      );

      // Button hover animations
      const buttons = document.querySelectorAll('.animated-button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });

      // Parallax effect for hero background
      gsap.to('.hero-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Text reveal animations
      gsap.fromTo('.reveal-text',
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.reveal-text',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating elements
      const floatingElements = document.querySelectorAll('.floating');
      floatingElements.forEach((el, index) => {
        gsap.to(el, {
          y: -20,
          duration: 2 + index * 0.5,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      });

      // Pulse animations
      gsap.to('.pulse-element', {
        scale: 1.1,
        opacity: 0.7,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });

      // Morphing shapes
      gsap.to('.morph-shape', {
        morphSVG: 'circle',
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });

    }, scope);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return scope;
};
