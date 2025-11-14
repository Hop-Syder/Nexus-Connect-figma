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
    color: '#FF8A5B',
  },
  {
    icon: TrendingUp,
    title: 'Impact Social',
    description: 'Chaque action vise à créer un changement positif et durable dans nos communautés.',
    color: '#22C55E',
  },
  {
    icon: Sparkles,
    title: 'Croissance Partagée',
    description: 'Votre succès est notre succès. Nous grandissons ensemble, main dans la main.',
    color: '#A855F7',
  },
];

const TITLE_FONT = '"Space Grotesk", "Inter", sans-serif';
const BODY_FONT = '"Plus Jakarta Sans", "Inter", sans-serif';

export function ValuesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#030b1f] py-24 text-white md:py-36"
      style={{ fontFamily: BODY_FONT }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#132d63_0%,#030b1f_55%)] opacity-90" />
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] opacity-5" />
      <motion.div
        className="absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full bg-[#ffd700]/25 blur-[130px]"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="mb-5 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfe6fb]"
            style={{ fontFamily: TITLE_FONT }}
          >
            ADN NEXUS
          </div>
          <h2
            className="text-center text-3xl font-semibold leading-tight text-white md:text-4xl"
            style={{ fontFamily: TITLE_FONT }}
          >
            Des fondamentaux qui unissent vision et action
          </h2>
          <p className="mt-6 max-w-3xl text-base text-[#e6ecff] md:text-lg lg:text-xl">
            Chaque valeur est un engagement concret envers les talents, les institutions et les communautés que nous accompagnons.
          </p>
        </motion.div>

        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 lg:mt-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="group relative min-w-[260px] flex-1 snap-start rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ translateY: -12 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70" style={{ fontFamily: TITLE_FONT }}>
                    #{index + 1}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold text-white/90"
                    style={{ backgroundColor: `${value.color}33`, fontFamily: TITLE_FONT }}
                  >
                    {value.title}
                  </span>
                </div>

                <div className="mt-7 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{ background: `linear-gradient(135deg, ${value.color}, ${value.color}aa)` }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: TITLE_FONT }}
                  >
                    {value.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#f4f6ff]">
                  {value.description}
                </p>

                <div className="mt-6 h-[3px] rounded-full" style={{ backgroundColor: value.color, opacity: 0.8 }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
