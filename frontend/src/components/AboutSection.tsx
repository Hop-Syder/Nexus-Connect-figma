import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface AboutSectionProps {
  mapImage: string;
}

export function AboutSection({ mapImage }: AboutSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]);

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-white overflow-hidden"
      style={{ opacity }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Map Image */}
          <motion.div 
            className="relative"
            style={{ 
              x, 
              scale,
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <motion.div 
              className="absolute -inset-8 bg-[#FFD700]/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                z: 50
              }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ImageWithFallback
                  src={mapImage}
                  alt="Carte d'Afrique stylisée"
                  className="relative rounded-2xl w-full h-auto opacity-90 shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Orbiting elements */}
            <motion.div
              className="absolute top-1/4 -right-4 w-8 h-8 bg-[#FFD700] rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ 
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
                transformStyle: 'preserve-3d'
              }}
            />
            <motion.div
              className="absolute bottom-1/4 -left-4 w-6 h-6 bg-[#004AAD] rounded-full"
              animate={{ 
                rotate: -360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ 
                boxShadow: '0 0 20px rgba(0, 74, 173, 0.6)',
                transformStyle: 'preserve-3d'
              }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            style={{ rotateY }}
          >
            <motion.h2 
              className="text-[#004AAD] mb-6" 
              style={{
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '130%'
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                x: 10,
                textShadow: "0 0 8px rgba(0, 74, 173, 0.3)"
              }}
            >
              Connecter. Inspirer. Révéler le potentiel africain.
            </motion.h2>
            <motion.p 
              className="text-[#444] mb-8" 
              style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Nexus Connect est un réseau numérique qui relie les entrepreneurs, startups et institutions d'Afrique de l'Ouest. Une vitrine pour grandir, collaborer et rayonner.
            </motion.p>
            <motion.p 
              className="text-[#444] mb-8" 
              style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Notre mission est de créer un écosystème où chaque talent africain peut se développer, où chaque idée trouve son public, et où chaque projet trouve ses partenaires.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateX: 5
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white transition-all duration-300 rounded-[10px] shadow-lg hover:shadow-2xl"
                style={{ fontSize: '16px', fontWeight: 600 }}
              >
                Découvrir la vision
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
