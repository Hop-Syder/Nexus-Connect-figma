import { motion } from 'motion/react';

export function AfricanPatterns() {
  return (
    <>
      {/* Motif Kente - Top Left */}
      <motion.div
        className="fixed top-20 left-0 w-40 h-40 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #FFD700 0, #FFD700 4px, transparent 4px, transparent 12px),
            repeating-linear-gradient(-45deg, #004AAD 0, #004AAD 4px, transparent 4px, transparent 12px)
          `,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Motif Adinkra - Top Right */}
      <motion.div
        className="fixed top-32 right-20 w-32 h-32 opacity-[0.04] pointer-events-none z-0"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="20" fill="none" stroke="#FFD700" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#004AAD" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M 50 20 L 50 80 M 20 50 L 80 50" stroke="#FFD700" strokeWidth="2" />
          <circle cx="50" cy="20" r="4" fill="#004AAD" />
          <circle cx="50" cy="80" r="4" fill="#004AAD" />
          <circle cx="20" cy="50" r="4" fill="#004AAD" />
          <circle cx="80" cy="50" r="4" fill="#004AAD" />
        </svg>
      </motion.div>

      {/* Motif Bogolan - Bottom Left */}
      <motion.div
        className="fixed bottom-40 left-10 w-48 h-48 opacity-[0.03] pointer-events-none z-0"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Zigzag patterns */}
          <path d="M 10 10 L 20 20 L 30 10 L 40 20 L 50 10 L 60 20 L 70 10 L 80 20 L 90 10" 
                stroke="#004AAD" fill="none" strokeWidth="2" />
          <path d="M 10 30 L 20 40 L 30 30 L 40 40 L 50 30 L 60 40 L 70 30 L 80 40 L 90 30" 
                stroke="#FFD700" fill="none" strokeWidth="2" />
          <path d="M 10 50 L 20 60 L 30 50 L 40 60 L 50 50 L 60 60 L 70 50 L 80 60 L 90 50" 
                stroke="#004AAD" fill="none" strokeWidth="2" />
          <path d="M 10 70 L 20 80 L 30 70 L 40 80 L 50 70 L 60 80 L 70 70 L 80 80 L 90 70" 
                stroke="#FFD700" fill="none" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Motif Géométrique - Bottom Right */}
      <motion.div
        className="fixed bottom-20 right-10 w-36 h-36 opacity-[0.04] pointer-events-none z-0"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#004AAD" strokeWidth="2" />
          <polygon points="50,25 75,50 50,75 25,50" fill="none" stroke="#FFD700" strokeWidth="2" />
          <circle cx="50" cy="50" r="8" fill="none" stroke="#004AAD" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-0"
          style={{
            background: i % 2 === 0 ? '#FFD700' : '#004AAD',
            opacity: 0.1,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </>
  );
}
