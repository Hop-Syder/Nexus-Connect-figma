import { motion } from 'motion/react';
import { GraduationCap, Users2, Leaf, Sparkles } from 'lucide-react';
import { staggerContainer } from '../utils/animations';

const commitments = [
  {
    icon: GraduationCap,
    title: 'Inclusion Numérique des Jeunes',
    description:
      'Former la prochaine génération de talents tech à travers des programmes de mentorat et de formation gratuite.',
    stats: '500+ jeunes formés',
    color: '#FFD700',
  },
  {
    icon: Users2,
    title: 'Formation des Femmes à la Tech',
    description:
      'Réduire le fossé de genre dans le numérique en offrant des opportunités d\'apprentissage et d\'accompagnement dédiées.',
    stats: '40% de femmes dans notre écosystème',
    color: '#004AAD',
  },
  {
    icon: Leaf,
    title: 'Énergie Verte & Infrastructures Durables',
    description:
      'Promouvoir des pratiques éco-responsables et soutenir les entrepreneurs qui innovent pour un avenir durable.',
    stats: '100% hébergement vert',
    color: '#FFD700',
  },
  {
    icon: Sparkles,
    title: 'Impact Social & Communautaire',
    description:
      'Reverser une partie de nos revenus à des projets sociaux locaux pour un développement équitable et inclusif.',
    stats: '5% du CA reversé',
    color: '#004AAD',
  },
];

export function RSESection() {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F7F7F7 0%, #FFFFFF 100%)',
      }}
    >
      {/* Organic African pattern background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23004AAD' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#FFD700]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#004AAD]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-[#004AAD]/10 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#004AAD]" style={{ fontSize: '14px', fontWeight: 600 }}>
              NOS ENGAGEMENTS RSE
            </span>
          </motion.div>

          <motion.h2
            className="text-[#004AAD] mb-6"
            style={{
              fontSize: '40px',
              fontWeight: 800,
              lineHeight: '120%',
            }}
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Un impact durable, au-delà du numérique
          </motion.h2>

          <motion.p
            className="text-[#333]/80 max-w-2xl mx-auto"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Notre mission va au-delà de la technologie : nous créons un écosystème
            responsable, inclusif et durable pour les générations futures.
          </motion.p>
        </motion.div>

        {/* Commitments Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <motion.div
                key={commitment.title}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 3,
                  rotateX: 3,
                  z: 30,
                }}
                className="relative bg-white rounded-2xl p-8 shadow-lg group"
                style={{
                  transformStyle: 'preserve-3d',
                  opacity: 0,
                  y: 80,
                  rotateX: -20,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: `${commitment.color}30` }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon with animated background */}
                <motion.div
                  className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{ backgroundColor: `${commitment.color}20` }}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8" style={{ color: commitment.color }} />
                  
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2"
                    style={{ borderColor: commitment.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="text-[#004AAD] mb-3"
                    style={{ fontSize: '22px', fontWeight: 700 }}
                  >
                    {commitment.title}
                  </h3>

                  <p
                    className="text-[#333]/80 mb-4"
                    style={{ fontSize: '16px', lineHeight: '1.6' }}
                  >
                    {commitment.description}
                  </p>

                  {/* Stats badge */}
                  <motion.div
                    className="inline-block px-4 py-2 rounded-full"
                    style={{ backgroundColor: `${commitment.color}20` }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span
                      style={{
                        color: commitment.color,
                        fontSize: '14px',
                        fontWeight: 700,
                      }}
                    >
                      ✓ {commitment.stats}
                    </span>
                  </motion.div>
                </div>

                {/* Corner decoration */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: commitment.color }}
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[#FFD700]/20 to-[#004AAD]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/30"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 20px 60px rgba(255, 215, 0, 0.3)',
            }}
          >
            <p
              className="text-[#004AAD] mb-2"
              style={{ fontSize: '24px', fontWeight: 700 }}
            >
              Ensemble, construisons un avenir durable 🌍
            </p>
            <p
              className="text-[#333]/80"
              style={{ fontSize: '16px', lineHeight: '1.6' }}
            >
              Nos actions d'aujourd'hui façonnent l'Afrique de demain
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles with organic movement */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            backgroundColor: i % 2 === 0 ? '#FFD700' : '#004AAD',
            opacity: 0.3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
