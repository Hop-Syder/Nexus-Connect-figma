import { motion } from 'motion/react';
import { Lightbulb, Users, Zap, Shield, Leaf, Target } from 'lucide-react';

interface Value {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgGradient: string;
}

const VALUES: Value[] = [
  {
    id: 1,
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Nous repoussons les limites de la technologie pour créer des solutions révolutionnaires adaptées au contexte africain.",
    color: "#FFD700",
    bgGradient: "from-yellow-50 to-orange-50"
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8" />,
    title: "Collaboration",
    description: "La force réside dans l'union. Nous croyons en la synergie entre talents, artisans et startups pour un impact collectif.",
    color: "#004AAD",
    bgGradient: "from-blue-50 to-indigo-50"
  },
  {
    id: 3,
    icon: <Zap className="w-8 h-8" />,
    title: "Dynamisme",
    description: "Agiles et réactifs, nous nous adaptons rapidement aux changements du marché et aux besoins de nos communautés.",
    color: "#FF6B6B",
    bgGradient: "from-red-50 to-pink-50"
  },
  {
    id: 4,
    icon: <Shield className="w-8 h-8" />,
    title: "Intégrité",
    description: "Transparence et honnêteté sont au cœur de nos relations. Nous construisons la confiance sur des fondations solides.",
    color: "#00A86B",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    id: 5,
    icon: <Leaf className="w-8 h-8" />,
    title: "Durabilité",
    description: "Nous nous engageons à créer un écosystème entrepreneurial respectueux de l'environnement et socialement responsable.",
    color: "#17B890",
    bgGradient: "from-teal-50 to-cyan-50"
  },
  {
    id: 6,
    icon: <Target className="w-8 h-8" />,
    title: "Excellence",
    description: "Chaque projet, chaque interaction est guidée par notre quête incessante de qualité et de perfection.",
    color: "#9B59B6",
    bgGradient: "from-purple-50 to-violet-50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 74, 173, 0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.6,
    },
  },
};

export function ValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
              Nos Valeurs Fondamentales
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#004AAD] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ce qui nous définit
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Six piliers qui guident chaque décision, chaque action, et chaque interaction au sein de notre communauté.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {VALUES.map((value) => (
            <motion.div
              key={value.id}
              variants={cardVariants}
              whileHover="hover"
              className={`group bg-gradient-to-br ${value.bgGradient} rounded-2xl p-8 border border-gray-100 cursor-pointer relative overflow-hidden`}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: value.color,
                  borderRadius: "50%",
                  filter: "blur(40px)",
                }}
              />

              {/* Number badge */}
              <div
                className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: value.color }}
              >
                {String(value.id).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="mb-4 inline-flex p-3 rounded-xl transition-colors duration-300"
                  style={{
                    backgroundColor: `${value.color}20`,
                    color: value.color,
                  }}
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  {value.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-[#004AAD] mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              {/* Bottom border accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${value.color}, transparent)`,
                }}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Ces valeurs nous unissent dans notre mission de transformer l'écosystème entrepreneurial africain.
          </p>
          <motion.div
            className="inline-flex gap-2 text-[#004AAD] font-semibold cursor-pointer group"
            whileHover={{ gap: "12px" }}
          >
            <span>En savoir plus sur notre mission</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}