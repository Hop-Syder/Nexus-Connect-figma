import { motion } from 'motion/react';
import { Lightbulb, Users, Heart, TrendingUp, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous cultivons la créativité et l’audace pour repousser les limites du possible en Afrique.',
    accent: '#FFD700',
    tag: 'Créer demain',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'L’union fait la force. Ensemble, nous construisons un écosystème solidaire et prospère.',
    accent: '#004AAD',
    tag: 'Construire ensemble',
  },
  {
    icon: Heart,
    title: 'Authenticité',
    description: 'Nous célébrons l’identité africaine et valorisons chaque talent dans sa singularité.',
    accent: '#FF8A5B',
    tag: 'Être soi',
  },
  {
    icon: TrendingUp,
    title: 'Impact Social',
    description: 'Chaque action vise à créer un changement positif et durable dans nos communautés.',
    accent: '#22C55E',
    tag: 'Transformer',
  },
  {
    icon: Sparkles,
    title: 'Croissance Partagée',
    description: 'Votre succès est notre succès. Nous grandissons ensemble, main dans la main.',
    accent: '#A855F7',
    tag: 'Progresser',
  },
];

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#030b1f] py-24 md:py-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#12326d_0%,#030b1f_55%)] opacity-90" />
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] opacity-5" />
      <motion.div
        className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-[#ffd700]/20 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5def2]">
            ADN NEXUS
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            Des fondamentaux qui unissent vision et action
          </h2>
          <p className="mt-6 max-w-3xl text-base text-[#e3ecff] md:text-lg lg:text-xl">
            Chaque valeur est un engagement concret envers les talents, les institutions et les communautés que nous accompagnons.
          </p>
        </motion.div>

        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white/20 lg:mt-20 lg:flex-nowrap">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="group relative flex min-w-[260px] flex-1 snap-start flex-col rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-3 hover:border-white/30"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    #{index + 1}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold text-white/90"
                    style={{ backgroundColor: `${value.accent}33` }}
                  >
                    {value.tag}
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{ background: `linear-gradient(135deg, ${value.accent}, ${value.accent}99)` }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-[#f0f4ff]">{value.description}</p>
                <div className="mt-6 h-[3px] rounded-full opacity-60" style={{ backgroundColor: value.accent }} />

                <motion.div
                  className="pointer-events-none absolute -inset-px rounded-[inherit] border border-white/10 opacity-0 transition group-hover:opacity-100"
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(0,0,0,0)',
                      `0 15px 60px ${value.accent}33`,
                      '0 0 0 rgba(0,0,0,0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
