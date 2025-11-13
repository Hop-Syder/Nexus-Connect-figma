import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-[50vh] flex items-center bg-[#FFD700] overflow-hidden"
      style={{ 
        scale,
        perspective: '1000px'
      }}
    >
      {/* Animated Decorative Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-20 w-40 h-40 border-8 border-[#004AAD] rounded-full"
          style={{ rotate }}
          animate={{ 
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-32 w-32 h-32 border-8 border-[#004AAD]"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-24 h-24 border-8 border-[#004AAD]"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          className="absolute top-20 right-1/4 w-20 h-20 border-8 border-[#004AAD] rounded-full"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Triangle patterns */}
        <motion.svg 
          className="absolute bottom-10 right-20" 
          width="60" 
          height="60" 
          viewBox="0 0 60 60"
          animate={{ 
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <polygon points="30,10 50,50 10,50" fill="none" stroke="#004AAD" strokeWidth="6"/>
        </motion.svg>
        <motion.svg 
          className="absolute top-1/3 left-10" 
          width="50" 
          height="50" 
          viewBox="0 0 50 50"
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <polygon points="25,5 45,40 5,40" fill="none" stroke="#004AAD" strokeWidth="5"/>
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h2 
              className="text-[#004AAD] mb-8" 
              style={{
                fontSize: '32px',
                fontWeight: 800,
                lineHeight: '1.3'
              }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(0, 74, 173, 0.5)"
              }}
            >
              Rejoignez la première vitrine numérique des talents africains.
            </motion.h2>
          </motion.div>

          <motion.p 
            className="text-[#004AAD]/80 mb-10" 
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 2.5rem'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Créez votre profil en quelques minutes et commencez à connecter avec un réseau d'entrepreneurs passionnés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -10,
              rotateX: 10,
              z: 50
            }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              transformStyle: 'preserve-3d',
              display: 'inline-block'
            }}
          >
            <Button 
              size="lg"
              className="bg-[#004AAD] text-white hover:bg-[#003380] transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,74,173,0.5)] transform relative overflow-hidden group"
              style={{
                fontSize: '18px',
                fontWeight: 600,
                padding: '20px 40px',
                borderRadius: '12px'
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                animate={{ 
                  x: ['-200%', '200%']
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
                Créer mon profil maintenant
              </span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#004AAD]/20"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle texture overlay with 3D effect */}
      <motion.div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004AAD' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        animate={{ 
          rotateZ: [0, 360]
        }}
        transition={{ 
          duration: 60, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.section>
  );
}
