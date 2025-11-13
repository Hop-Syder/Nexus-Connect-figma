import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  isTransitioning: boolean;
}

export function PageTransition({ isTransitioning }: PageTransitionProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#004AAD] to-[#002D6B]"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ clipPath: 'circle(0% at 50% 50%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Logo animation */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }}
          >
            <motion.div 
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FFD700] shadow-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 215, 0, 0.5)',
                  '0 0 40px rgba(255, 215, 0, 0.8)',
                  '0 0 20px rgba(255, 215, 0, 0.5)',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <span 
                className="text-[#004AAD]" 
                style={{ fontWeight: 700, fontSize: '40px' }}
              >
                N
              </span>
            </motion.div>
          </motion.div>

          {/* Decorative circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-[#FFD700]/30"
              style={{
                width: `${(i + 1) * 100}px`,
                height: `${(i + 1) * 100}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: 'easeOut'
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
