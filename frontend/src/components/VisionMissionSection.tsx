import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { fadeInLeft, fadeInRight } from '../utils/animations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CircleCheckBig } from 'lucide-react';
import { Button } from './ui/button';

interface VisionMissionSectionProps {
  image: string;
}

export function VisionMissionSection({ image }: VisionMissionSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  const stats = [
    { number: '100 000', label: 'Acteurs économiques ouest-africains d\'ici 2027' },
    { number: '72%', label: 'Entrepreneurs sans présence numérique auparavant' },
    { number: '8 pays', label: 'Présence active en Afrique de l\'Ouest' },
  ];

  const benefits = [
    'Présence digitale instantanée, même pour les entrepreneurs hors ligne',
    'Référencement géolocalisé adapté au contexte ouest-africain',
    'Passerelles IA pour décrire, recommander et mesurer chaque interaction',
  ];

  return (
    <section
      ref={ref}
      id="vision"
      className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-white"
    >
      {/* Decorative background shapes */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 border-4 border-[#FFD700]/20 rounded-full"
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
        className="absolute bottom-10 left-20 w-32 h-32 border-4 border-[#004AAD]/10"
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
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 5 : 12)].map((_, i) => (
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left - Text Content */}
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 rounded-full"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-[#FFD700] text-sm md:text-base" style={{ fontWeight: 700 }}>
                🌍 VISION NEXUS
              </span>
              <span className="text-[#004AAD] text-xs md:text-sm" style={{ fontWeight: 600 }}>
                • Pont numérique d'Afrique de l'Ouest
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-[#004AAD]"
              style={{
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 800,
                lineHeight: '120%',
              }}
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Offrir à chaque talent ouest-africain une vitrine numérique fiable et connectée
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[#333]/80 text-base md:text-lg"
              style={{ lineHeight: '1.7' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Nexus Connect met en lumière les entrepreneurs, artisans et startups d'Afrique de l'Ouest. 
              <strong className="text-[#004AAD]"> Partie du Bénin</strong>, notre plateforme facilite la découverte, 
              la collaboration et l'accès à des opportunités <strong className="text-[#FFD700]">régionales</strong> sans 
              expertise technique préalable.
            </motion.p>

            {/* Benefits List */}
            <motion.ul
              className="space-y-3 md:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-[#333]/80 text-sm md:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <CircleCheckBig className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-[#4ADE80] mt-0.5" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#services"
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full bg-[#004AAD] text-white hover:bg-[#004AAD]/90 rounded-xl shadow-lg px-6 py-3 md:px-8 md:py-6 text-sm md:text-base">
                  Découvrir les solutions Nexus
                </Button>
              </motion.a>
              
              <motion.a
                href="#accueil"
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD]/5 rounded-xl px-6 py-3 md:px-8 md:py-6 text-sm md:text-base"
                  style={{ fontWeight: 600 }}
                >
                  Lancer mon espace professionnel
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Card with Stats */}
          <motion.div
            className="flex"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="relative flex-1 rounded-3xl md:rounded-[2rem] p-[2px] bg-gradient-to-br from-[#FFD700] via-[#4ADE80] to-[#004AAD] shadow-2xl"
              style={{ y, rotateY }}
              whileHover={{
                scale: 1.02,
                rotateY: 3,
                rotateX: 3,
                z: 30,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full rounded-[calc(2rem-2px)] md:rounded-[calc(2rem-2px)] bg-white/95 p-6 md:p-8 lg:p-10 backdrop-blur-sm">
                <div className="space-y-6 md:space-y-8">
                  {/* Card Header */}
                  <div>
                    <motion.p
                      className="text-[#4ADE80] text-xs md:text-sm uppercase tracking-wide mb-3"
                      style={{ fontWeight: 700 }}
                      animate={{
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      🌉 Pont Nexus Connect
                    </motion.p>
                    <p className="text-[#333]/80 text-sm md:text-base lg:text-lg" style={{ lineHeight: '1.6' }}>
                      Notre ambition : cartographier et propulser <strong className="text-[#004AAD]">100 000 acteurs 
                      économiques ouest-africains</strong> d'ici 2027 en reliant collectivités, entreprises, 
                      institutions et investisseurs.
                    </p>
                  </div>

                  {/* Stats Cards */}
                  <div className="space-y-4 md:space-y-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="rounded-2xl bg-[#F7F7F7]/80 p-4 md:p-5 shadow-sm hover:bg-[#F7F7F7] transition-colors cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.15 }}
                        whileHover={{
                          scale: 1.03,
                          x: 5,
                          boxShadow: '0 10px 25px rgba(0, 74, 173, 0.15)',
                        }}
                      >
                        <div
                          className="text-[#004AAD] mb-1"
                          style={{
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            fontWeight: 800,
                          }}
                        >
                          {stat.number}
                        </div>
                        <div
                          className="text-[#333]/70 text-xs md:text-sm lg:text-base"
                          style={{ fontWeight: 500 }}
                        >
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.blockquote
                    className="rounded-2xl bg-gradient-to-br from-[#004AAD] to-[#004AAD]/90 p-5 md:p-6 lg:p-8 text-white shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(0, 74, 173, 0.4)',
                    }}
                  >
                    <p
                      className="italic leading-relaxed mb-4 text-sm md:text-base lg:text-lg"
                      style={{ lineHeight: '1.6' }}
                    >
                      "Nexus Connect ouvre le marché ouest-africain à de nouvelles collaborations en valorisant 
                      nos savoir-faire depuis le Bénin jusqu'au Sénégal, du Ghana au Mali."
                    </p>
                    <footer className="text-[#FFD700] text-xs md:text-sm uppercase tracking-wide" style={{ fontWeight: 700 }}>
                      — Pont Nexus Connect • Afrique de l'Ouest
                    </footer>
                  </motion.blockquote>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-[#FFD700]/10 to-transparent pointer-events-none"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating orb */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24 bg-[#FFD700] rounded-full opacity-80 blur-xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
