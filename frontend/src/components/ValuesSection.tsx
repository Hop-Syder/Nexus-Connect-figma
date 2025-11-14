import { motion } from 'motion/react';
import { Lightbulb, Users, Heart, TrendingUp, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous cultivons la créativité et l’audace pour repousser les limites du possible en Afrique.',
    color: '#FFD700',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'L’union fait la force. Ensemble, nous construisons un écosystème solidaire et prospère.',
    color: '#004AAD',
  },
  {
    icon: Heart,
    title: 'Authenticité',
    description: 'Nous célébrons l’identité africaine et valorisons chaque talent dans sa singularité.',
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
    <section className="relative overflow-hidden bg-[#F7F7F7] py-20 md:py-32">
      <motion.div className="absolute inset-0 opacity-5" style={{ perspective: '1000px' }}>
        <motion.div
          className="absolute top-16 left-1/5 w-48 h-48 border-4 border-[#004AAD]"
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-24 right-1/5 w-40 h-40 border-4 border-[#FFD700] rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-block rounded-full bg-[#FFD700]/20 px-4 py-2 text-sm font-semibold text-[#004AAD]">
            Nos valeurs
          </div>
          <h2 className="text-3xl font-bold text-[#03133c] md:text-4xl">
            Les piliers de notre engagement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Nos valeurs guident chacune de nos actions et reflètent notre vision d’une Afrique unie, innovante et prospère.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="flex min-w-[240px] max-w-xs flex-1 flex-col rounded-[24px] bg-white p-6 shadow-lg transition hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${value.color}1A` }}
                >
                  <Icon className="h-6 w-6" style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#03133c]">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
                <span className="mt-4 h-1 w-12 rounded-full" style={{ backgroundColor: value.color }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
