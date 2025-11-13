import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function ServiceHero() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FFD700]/10 via-white to-[#004AAD]/5"
      style={{ perspective: '1000px' }}
    >
      {/* Decorative animated shapes */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 md:w-40 md:h-40 border-4 border-[#FFD700]/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32 border-4 border-[#004AAD]/10"
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#004AAD]/10 rounded-full border border-[#004AAD]/20"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#004AAD] text-sm md:text-base" style={{ fontWeight: 700 }}>
                Suite Nexus Connect
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-[#004AAD]"
              style={{
                fontSize: 'clamp(32px, 6vw, 56px)',
                fontWeight: 800,
                lineHeight: '110%',
              }}
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Des services taillés sur mesure pour l'Afrique de l'Ouest
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[#333]/80 text-base md:text-lg lg:text-xl max-w-2xl"
              style={{ lineHeight: '1.7' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Une plateforme modulaire qui répond aux besoins des entrepreneurs, 
              des réseaux d'accompagnement et des institutions publiques. 
              Chaque service est pensé pour les <strong className="text-[#004AAD]">réalités du Bénin</strong> et de l'Afrique de l'Ouest.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full sm:w-auto bg-[#FFD700] text-[#004AAD] hover:bg-[#FFD700]/90 rounded-xl shadow-lg px-6 py-3 md:px-8 md:py-6 text-sm md:text-base group"
                  style={{ fontWeight: 700 }}
                >
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Explorer nos services
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD]/5 rounded-xl px-6 py-3 md:px-8 md:py-6 text-sm md:text-base"
                  style={{ fontWeight: 600 }}
                >
                  Demander une démo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
                z: 30,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Decorative gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-[#004AAD]/20 pointer-events-none z-10"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Entrepreneurs africains collaborant"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 md:p-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#FFD700] to-[#004AAD] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl md:text-2xl" style={{ fontWeight: 800 }}>✨</span>
                </div>
                <div>
                  <div className="text-[#004AAD] text-xl md:text-2xl" style={{ fontWeight: 800 }}>500+</div>
                  <div className="text-[#333]/70 text-xs md:text-sm" style={{ fontWeight: 600 }}>Clients actifs</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
