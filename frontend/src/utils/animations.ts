// Configuration réutilisable pour animations Motion
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    verySlow: 2.0,
  },
  ease: {
    smooth: [0.22, 1, 0.36, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
  },
};

// Variants Motion prédéfinis
export const fadeInUp = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: ANIMATION_CONFIG.ease.smooth },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: ANIMATION_CONFIG.ease.smooth },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: ANIMATION_CONFIG.ease.smooth },
  },
};

export const card3DVariants = {
  rest: { scale: 1, rotateY: 0, rotateX: 0, z: 0 },
  hover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    z: 50,
    transition: { duration: 0.3 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: ANIMATION_CONFIG.ease.smooth },
  },
};

export const rotateIn = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 1, ease: ANIMATION_CONFIG.ease.smooth },
  },
};
