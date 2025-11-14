import { motion } from 'motion/react';
import { Lightbulb, Users, Heart, TrendingUp, Sparkles } from 'lucide-react';
import { useMotionValue, useTransform } from 'framer-motion';

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
    <section className="relative py-20 bg-[#F7F7F7] overflow-hidden">

      {/* Decorative lights */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-10 left-20 w-72 h-72 bg-[#004AAD] opacity-20 blur-[100px]" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#FFD700] opacity-20 blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-2 bg-[#FFD700]/20 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#004AAD] text-sm font-semibold">
              NOS VALEURS
            </span>
          </motion.div>

          <h2 className="text-[#004AAD] text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Les piliers de notre engagement
          </h2>

          <p className="text-[#333]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Nos valeurs guident chacune de nos actions et reflètent notre vision
            d'une Afrique unie, innovante et prospère.
          </p>
        </motion.div>

        {/* HORIZONTAL SCROLLABLE ROW */}
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                className="relative min-w-[320px] max-w-[340px] bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl snap-center"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, y: 80, rotateX: -25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  rotateX: 10,
                  rotateY: 10,
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                {/* Glow light */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-20 blur-2xl"
                  style={{ backgroundColor: value.color }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* ICON */}
                <div
                  className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: value.color }} />
                </div>

                {/* TITLE */}
                <h3
                  className="text-[#004AAD] font-bold mb-4"
                  style={{ fontSize: '22px' }}
                >
                  {value.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#333]/80 leading-relaxed text-[16px]">
                  {value.description}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="absolute left-0 right-0 bottom-0 h-1 rounded-b-2xl"
                  style={{ backgroundColor: value.color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
