import { motion } from 'motion/react';
import { Lightbulb, Users, Heart, TrendingUp, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous cultivons la créativité et l’audace pour repousser les limites du possible en Afrique.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'L’union fait la force. Ensemble, nous construisons un écosystème solidaire et prospère.',
  },
  {
    icon: Heart,
    title: 'Authenticité',
    description: 'Nous célébrons l’identité africaine et valorisons chaque talent dans sa singularité.',
  },
  {
    icon: TrendingUp,
    title: 'Impact Social',
    description: 'Chaque action vise à créer un changement positif et durable dans nos communautés.',
  },
  {
    icon: Sparkles,
    title: 'Croissance Partagée',
    description: 'Votre succès est notre succès. Nous grandissons ensemble, main dans la main.',
  },
];

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] py-20 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-10 h-72 w-72 rounded-full bg-[#004aad]/10 blur-[120px]"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#ffd700]/15 blur-[120px]"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-block rounded-full bg-[#ffd700]/20 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-[#004aad]">
            ADN NEXUS
          </div>
          <h2 className="text-3xl font-semibold text-[#03133c] md:text-4xl">
            Nos valeurs, un socle partagé
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
            Chaque valeur est un engagement concret envers les talents, les institutions et les communautés de notre écosystème.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="group flex flex-col rounded-3xl border border-white bg-white p-6 shadow-[0_15px_35px_rgba(4,26,70,0.08)] transition hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(4,26,70,0.12)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4f6fc] text-[#004aad]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#03133c]">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-[#ffd700]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
