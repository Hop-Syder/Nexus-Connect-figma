import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Users, Rocket, Award } from 'lucide-react';

const milestones = [
  {
    icon: MapPin,
    year: '2024',
    title: 'Naissance au Bénin',
    description: 'Inspirés par l\'histoire du roi Guézo et de la jarre trouée, symbole d\'union et de collaboration.',
    image: '🏺',
  },
  {
    icon: Users,
    year: '2024',
    title: 'Premières collaborations',
    description: 'Les premiers entrepreneurs et artisans rejoignent la plateforme, créant les fondations de l\'écosystème.',
    image: '🤝',
  },
  {
    icon: Rocket,
    year: '2025',
    title: 'Expansion régionale',
    description: 'Extension à toute l\'Afrique de l\'Ouest avec des partenariats stratégiques et institutionnels.',
    image: '🚀',
  },
  {
    icon: Award,
    year: '2025+',
    title: 'Impact continental',
    description: 'Nexus Connect devient la référence pour connecter les talents africains au monde.',
    image: '🌍',
  },
];

export function StorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section
      ref={ref}
      id="histoire"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8E1 50%, #FFFFFF 100%)',
      }}
    >
      {/* Animated decorative jarre pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 text-[200px]"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🏺
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          style={{ opacity, scale }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-[#FFD700]/20 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#004AAD]" style={{ fontSize: '14px', fontWeight: 600 }}>
              NOTRE HISTOIRE
            </span>
          </motion.div>

          <motion.h2
            className="text-[#004AAD] mb-8"
            style={{
              fontSize: '40px',
              fontWeight: 800,
              lineHeight: '120%',
              maxWidth: '900px',
              margin: '0 auto',
            }}
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            La légende de la jarre trouée
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p
              className="text-[#333]/90"
              style={{ fontSize: '18px', lineHeight: '1.8' }}
            >
              Né au Bénin, Nexus Connect s'inspire de l'histoire du roi{' '}
              <span className="text-[#004AAD]" style={{ fontWeight: 700 }}>
                Guézo
              </span>{' '}
              — qui, selon la tradition, fit de la « jarre trouée » une métaphore
              de l'union des talents et des forces.
            </p>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[#FFD700] shadow-lg"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
              }}
              transition={{ duration: 0.3 }}
            >
              <p
                className="text-[#004AAD] italic"
                style={{ fontSize: '20px', lineHeight: '1.8', fontWeight: 600 }}
              >
                "Chaque trou bouché par une main représentait une contribution
                collective. À l'image de cette jarre — que l'on peut remplir parce
                que chacun y met sa part — Nexus Connect s'engage à relier les
                talents africains, à combler les 'trous' de visibilité, et à mettre
                en valeur l'unicité de l'innovation."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD700] via-[#004AAD] to-[#FFD700] -translate-x-1/2 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5 }}
          />

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.title}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  {/* Content Card */}
                  <motion.div
                    className="flex-1 bg-white rounded-2xl p-8 shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      rotateY: isLeft ? -5 : 5,
                      z: 50,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="flex items-center gap-4 mb-4"
                      whileHover={{ x: isLeft ? -10 : 10 }}
                    >
                      <motion.div
                        className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFD700]/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-[#004AAD]" />
                      </motion.div>
                      <span
                        className="text-[#FFD700]"
                        style={{ fontSize: '24px', fontWeight: 800 }}
                      >
                        {milestone.year}
                      </span>
                    </motion.div>

                    <h3
                      className="text-[#004AAD] mb-3"
                      style={{ fontSize: '24px', fontWeight: 700 }}
                    >
                      {milestone.title}
                    </h3>

                    <p
                      className="text-[#333]/80"
                      style={{ fontSize: '16px', lineHeight: '1.6' }}
                    >
                      {milestone.description}
                    </p>
                  </motion.div>

                  {/* Center Icon */}
                  <motion.div
                    className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-xl border-4 border-[#FFD700] z-10"
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)',
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      fontSize: '32px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {milestone.image}
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700]/20 rounded-full"
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
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
