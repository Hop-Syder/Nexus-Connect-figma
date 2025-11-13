import { motion, useInView } from 'motion/react';
import { Button } from '../../components/ui/button';
import { Check, Star } from 'lucide-react';
import { useRef } from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '0',
    period: 'Gratuit',
    description: 'Parfait pour démarrer votre présence digitale',
    features: [
      'Profil professionnel basique',
      'Inscription dans l\'annuaire',
      'Géolocalisation',
      'Contact direct par email',
      'Support communautaire',
    ],
    cta: 'Créer mon profil',
    featured: false,
    color: 'gray',
  },
  {
    name: 'Croissance',
    price: '25 000',
    period: 'FCFA/mois',
    description: 'Idéal pour les entrepreneurs en développement',
    features: [
      'Tout du pack Starter',
      'Profil vérifié avec badge',
      'Galerie photos illimitée',
      'Fiches produits/services',
      'Statistiques de visibilité',
      'Support prioritaire',
      'Tableau de bord avancé',
    ],
    cta: 'Choisir Croissance',
    featured: true,
    color: 'blue',
  },
  {
    name: 'Entreprise',
    price: 'Sur devis',
    period: 'Personnalisé',
    description: 'Solutions sur-mesure pour grandes structures',
    features: [
      'Tout du pack Croissance',
      'Multi-utilisateurs',
      'API et intégrations',
      'Formation équipe',
      'Accompagnement dédié',
      'Reporting avancé',
      'SLA garanti',
    ],
    cta: 'Nous contacter',
    featured: false,
    color: 'gold',
  },
];

export function ServicePricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #004AAD 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 rounded-full border border-[#FFD700]/30"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-[#FFD700]" />
            <span className="text-[#004AAD] text-sm" style={{ fontWeight: 700 }}>
              Tarifs transparents
            </span>
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
            Choisissez le pack adapté à vos ambitions
          </motion.h2>

          <motion.p
            className="text-[#333]/80 text-base md:text-lg max-w-2xl mx-auto"
            style={{ lineHeight: '1.7' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Démarrez gratuitement et évoluez à votre rythme. Aucun engagement, résiliable à tout moment.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`
                relative rounded-3xl border-2 bg-white p-6 md:p-8 
                transition-all duration-500 shadow-lg
                ${plan.featured 
                  ? 'border-[#FFD700] md:scale-105 md:shadow-2xl z-10' 
                  : 'border-gray-200 hover:border-[#004AAD]/30'
                }
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: plan.featured ? 1 : 1.03,
                boxShadow: '0 30px 60px rgba(0, 74, 173, 0.2)',
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#004AAD] fill-[#004AAD]" />
                    <span className="text-[#004AAD] text-xs" style={{ fontWeight: 800 }}>
                      RECOMMANDÉ
                    </span>
                  </div>
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Plan name */}
                <div>
                  <h3 
                    className="text-[#004AAD] mb-2"
                    style={{
                      fontSize: 'clamp(22px, 3vw, 28px)',
                      fontWeight: 800,
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-[#333]/70 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="py-4 border-y border-gray-200">
                  <div className="flex items-baseline gap-2">
                    <span 
                      className="text-[#004AAD]"
                      style={{
                        fontSize: plan.price === 'Sur devis' ? '24px' : '40px',
                        fontWeight: 800,
                      }}
                    >
                      {plan.price === 'Sur devis' ? plan.price : `${plan.price}`}
                    </span>
                    {plan.price !== 'Sur devis' && plan.price !== '0' && (
                      <span className="text-[#333]/60 text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-[#333]/60 text-xs mt-1">
                    {plan.price === '0' ? 'Pour toujours' : plan.period}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#333]/80"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-[#4ADE80] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className={`
                      w-full rounded-xl py-6
                      ${plan.featured
                        ? 'bg-[#FFD700] text-[#004AAD] hover:bg-[#FFD700]/90 shadow-lg'
                        : 'bg-[#004AAD] text-white hover:bg-[#004AAD]/90'
                      }
                    `}
                    style={{ fontWeight: 700 }}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </div>

              {/* Decorative gradient */}
              {plan.featured && (
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD700]/10 to-transparent pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-[#333]/60 text-sm">
            🎁 <strong>Offre de lancement :</strong> Les 100 premiers inscrits au pack Croissance bénéficient de 3 mois offerts !
          </p>
          <motion.p
            className="text-[#004AAD] text-sm"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
          >
            <a href="#contact" className="underline underline-offset-4 hover:text-[#FFD700] transition-colors">
              Besoin d'une solution personnalisée ? Contactez-nous →
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
