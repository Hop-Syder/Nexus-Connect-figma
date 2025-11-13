import { motion, useInView } from 'motion/react';
import { Shield, Zap, Users, Globe } from 'lucide-react';
import { useRef } from 'react';

const reasons = [
  {
    icon: Shield,
    title: 'Conçu pour l\'Afrique de l\'Ouest',
    description: 'Des fonctionnalités pensées pour les réalités locales : mode hors-ligne, support multilingue, paiements mobiles adaptés.',
    color: '#004AAD',
    gradient: 'from-[#004AAD]/10',
  },
  {
    icon: Zap,
    title: 'Simple et Rapide',
    description: 'Créez votre profil en 5 minutes sans compétences techniques. Interface intuitive disponible en français et langues locales.',
    color: '#FFD700',
    gradient: 'from-[#FFD700]/10',
  },
  {
    icon: Users,
    title: 'Communauté Active',
    description: 'Rejoignez 500+ entrepreneurs, artisans et startups déjà connectés. Bénéficiez du réseau et des opportunités de collaboration.',
    color: '#4ADE80',
    gradient: 'from-[#4ADE80]/10',
  },
  {
    icon: Globe,
    title: 'Visibilité Régionale',
    description: 'Présence dans 8 pays ouest-africains avec partenariats institutionnels et validation par Nexus Partners.',
    color: '#9333EA',
    gradient: 'from-[#9333EA]/10',
  },
];

export function ServiceWhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-[#F7F7F7] to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-[#004AAD]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-32 left-20 w-20 h-20 border-4 border-[#FFD700]/20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 border-4 border-[#004AAD]/10 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#004AAD]/10 rounded-full border border-[#004AAD]/20"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#004AAD] text-sm" style={{ fontWeight: 700 }}>
              💡 Pourquoi Nexus Connect
            </span>
          </motion.div>

          <motion.h2
            className="text-[#004AAD]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              lineHeight: '120%',
            }}
            initial={{ opacity: 0, rotateX: 90 }}
            animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            La plateforme pensée pour vous
          </motion.h2>

          <motion.p
            className="text-[#333]/80 text-base md:text-lg max-w-3xl mx-auto"
            style={{ lineHeight: '1.7' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Nexus Connect n'est pas une simple vitrine. C'est un écosystème complet 
            qui comprend les défis et opportunités de l'entrepreneuriat ouest-africain.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 md:p-8 lg:p-10 shadow-md transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 30px 60px rgba(0, 74, 173, 0.15)',
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Gradient overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative space-y-4">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl"
                  style={{
                    backgroundColor: `${reason.color}15`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <reason.icon 
                    className="w-7 h-7 md:w-8 md:h-8" 
                    style={{ color: reason.color }}
                    strokeWidth={2.5}
                  />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-[#004AAD]"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    fontWeight: 800,
                  }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#333]/70 text-sm md:text-base"
                  style={{ lineHeight: '1.6' }}
                >
                  {reason.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: reason.color }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 bg-gradient-to-r from-[#004AAD]/5 to-[#FFD700]/5 rounded-2xl border border-gray-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-4xl">🎯</div>
            <div className="text-center sm:text-left space-y-1">
              <p className="text-[#004AAD] text-base md:text-lg" style={{ fontWeight: 700 }}>
                Plus de 500 entrepreneurs nous font déjà confiance
              </p>
              <p className="text-[#333]/70 text-sm md:text-base">
                Rejoignez une communauté qui grandit chaque jour
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
