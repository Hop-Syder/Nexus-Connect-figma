import { motion } from 'motion/react';
import { Lightbulb, Users, Heart, TrendingUp, Sparkles } from 'lucide-react';
import { staggerContainer, card3DVariants } from '../utils/animations';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous cultivons la créativité et l\'audace pour repousser les limites du possible en Afrique.',
    color: '#FFD700',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'L\'union fait la force. Ensemble, nous construisons un écosystème solidaire et prospère.',
    color: '#004AAD',
  },
  {
    icon: Heart,
    title: 'Authenticité',
    description: 'Nous célébrons l\'identité africaine et valorisons chaque talent dans sa singularité.',
    color: '#FFD700',
  },
  {
    icon: TrendingUp,
    title: 'Impact Social',
    description: 'Chaque action vise à créer un changement positif et durable dans nos communautés.',
    color: '#004AAD',
  },
  {
    icon: Sparkles,
    title: 'Croissance Partagée',
    description: 'Votre succès est notre succès. Nous grandissons ensemble, main dans la main.',
    color: '#FFD700',
  },
];

export function ValuesSection() {
  return (
    <section className="relative py-20 md:py-32 bg-[#F7F7F7] overflow-hidden">
      {/* Animated background patterns */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="absolute top-20 left-1/4 w-48 h-48 border-4 border-[#004AAD]"
          animate={{
            rotate: [0, 45, 90, 135, 180],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-40 h-40 border-4 border-[#FFD700] rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

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
            className="inline-block mb-4 px-4 py-2 bg-[#FFD700]/20 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#004AAD]" style={{ fontSize: '14px', fontWeight: 600 }}>
              NOS VALEURS
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
            Les piliers de notre engagement
          </motion.h2>

          <motion.p
            className="text-[#333]/80 max-w-2xl mx-auto"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Nos valeurs guident chacune de nos actions et reflètent notre vision
            d'une Afrique unie, innovante et prospère.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={card3DVariants}
                initial="rest"
                whileHover="hover"
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-8 shadow-lg"
                style={{
                  transformStyle: 'preserve-3d',
                  opacity: 0,
                  y: 100,
                  rotateX: -30,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                }}
              >
                {/* Decorative corner blur */}
                <motion.div
                  className="absolute -top-2 -right-2 w-20 h-20 rounded-full blur-2xl opacity-30"
                  style={{ backgroundColor: value.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                  style={{
                    backgroundColor: `${value.color}20`,
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: value.color }}
                  />
                </motion.div>

                {/* Content */}
                <h3
                  className="text-[#004AAD] mb-3"
                  style={{ fontSize: '22px', fontWeight: 700 }}
                >
                  {value.title}
                </h3>

                <p
                  className="text-[#333]/80"
                  style={{ fontSize: '16px', lineHeight: '1.6' }}
                >
                  {value.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{ backgroundColor: value.color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
