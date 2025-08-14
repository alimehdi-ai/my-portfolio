// Reusable Framer Motion variants and helpers
import { Variants, cubicBezier } from 'framer-motion';

// Use cubicBezier for TypeScript safety
export const easing = cubicBezier(0.22, 1, 0.36, 1);

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easing } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easing } },
};

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', distance = 40): Variants => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const sign = direction === 'left' || direction === 'up' ? -1 : 1;
  const hidden = axis === 'x' ? { x: sign * distance } : { y: sign * distance };
  return {
    hidden: { opacity: 0, ...hidden },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: easing },
    },
  };
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easing },
  },
};

export const viewportOnce = { once: true, amount: 0.15 } as const;
