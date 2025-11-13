import { motion, useInView } from 'motion/react';
import { Badge } from '../../components/ui/badge';
import { CircleCheck } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    badge: 'Annuaire',
    badgeColor: 'bleu-marine',
    title: 'Annuaire professionnel intelligent',
    description: 'Référencez les entrepreneurs, artisans et startups béninois avec une recherche multicritères optimisée pour les langues locales et les réalités territoriales.',
    features: [
      'Recherche par ville, secteur et compétences',
      'Cartographie interactive',
      'Mode hors-ligne pour les agents de terrain',
    ],
    gradient: 'from-[#004AAD]/15',
  },
  {
    badge: 'Profil',
    badgeColor: 'vert-emeraude',
    title: 'Profils personnalisables',
    description: 'Chaque acteur raconte son histoire avec des fiches produits, des photos, des tarifs et des liens de contact centralisés.',
    features: [
      'Templates métiers adaptés',
      'Validation Nexus Partners',
      'Support multilingue',
    ],
    gradient: 'from-[#4ADE80]/15',
  },
  {
    badge: 'Pilotage',
    badgeColor: 'jaune-soleil',
    title: 'Pilotage administratif',
    description: 'Le tableau de bord Nexus permet de valider les inscriptions, suivre les engagements et animer la communauté locale.',
    features: [
      'Workflow de validation',
      'Alertes de conformité',
      'Exports pour partenaires publics',
    ],
    gradient: 'from-[#FFD700]/20',
  },
  {
    badge: 'IA',
    badgeColor: 'pourpre-royal',
    title: 'IA copilote (bientôt)',
    description: 'Des agents IA pour suggérer des mises en relation, générer des descriptions professionnelles et analyser les tendances régionales.',
    features: [
      'Recommandations intelligentes',
      'Analyse des secteurs porteurs',
      'Rédaction assistée',
    ],
    gradient: 'from-[#9333EA]/15',
  },
];

const getBadgeClasses = (color: string) => {
  const classes: Record<string, string> = {
    'bleu-marine': 'bg-[#004AAD]/10 text-[#004AAD] border-[#004AAD]/30',
    'vert-emeraude': 'bg-[#4ADE80]/10 text-[#4ADE80] border-[#4ADE80]/30',
    'jaune-soleil': 'bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30',
    'pourpre-royal': 'bg-[#9333EA]/10 text-[#9333EA] border-[#9333EA]/30',
  };
  return classes[color] || classes['bleu-marine'];
};

export function ServiceCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-[#F7F7F7] relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 right-20 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
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
          className="mb-12 md:mb-16 flex flex-col gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 w-fit bg-[#004AAD] text-white px-4 py-1 text-sm"
            style={{ fontWeight: 700 }}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            Suite Nexus Connect
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
            Des services conçus pour le terrain ouest-africain
          </motion.h2>

          <motion.p
            className="max-w-3xl text-base md:text-lg text-[#333]/70"
            style={{ lineHeight: '1.7' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Une plateforme modulaire qui répond aux besoins des entrepreneurs, des réseaux d'accompagnement 
            et des institutions publiques. Chaque service est pensé pour les réalités du Bénin et de l'Afrique de l'Ouest.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 3,
                rotateX: 3,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Gradient overlay on hover */}
              <div 
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} via-white/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                {/* Badge */}
                <Badge
                  className={`mb-4 inline-flex items-center gap-2 border shadow hover:bg-primary/80 ${getBadgeClasses(service.badgeColor)}`}
                >
                  {service.badge}
                </Badge>

                {/* Title */}
                <h3 
                  className="text-[#004AAD] mb-4"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    fontWeight: 800,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#333]/70 mb-6 text-sm leading-relaxed"
                  style={{ lineHeight: '1.6' }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 text-sm text-[#333]/80">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 + idx * 0.05 }}
                    >
                      <CircleCheck className="mt-0.5 h-4 w-4 text-[#4ADE80] flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-bl-full`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
