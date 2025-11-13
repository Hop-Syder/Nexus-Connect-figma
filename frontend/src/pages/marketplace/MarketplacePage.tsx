import { motion } from 'motion/react';
import { ShoppingBag, TrendingUp, Shield, Zap } from 'lucide-react';
import { SEO } from '../../components/SEO';

export function MarketplacePage() {
  return (
    <>
      <SEO 
        title="Marketplace - Nexus Connect | Commerce et Opportunités B2B en Afrique"
        description="La future marketplace africaine : achetez et vendez des produits authentiques, connectez-vous aux opportunités B2B internationales. Transactions sécurisées et livraison optimisée."
        keywords="marketplace afrique, commerce afrique, b2b afrique, vente produits africains, opportunités commerciales afrique, e-commerce afrique ouest"
        url="/#marketplace"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white via-[#F7F7F7] to-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #004AAD 0, #004AAD 2px, transparent 2px, transparent 10px), repeating-linear-gradient(-45deg, #FFD700 0, #FFD700 2px, transparent 2px, transparent 10px)',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-6 px-6 py-3 bg-[#FFD700]/20 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-[#004AAD]" style={{ fontSize: '13px', fontWeight: 700 }}>
                    🛍️ BIENTÔT DISPONIBLE
                  </span>
                </motion.div>

                <h1 className="text-[#004AAD] mb-6" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.2 }}>
                  Marketplace Nexus Connect
                </h1>
                
                <p className="text-[#666] mb-8 max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                  La future place de marché qui connectera les entreprises africaines aux opportunités 
                  commerciales internationales. Achetez, vendez et développez votre activité en toute confiance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShoppingBag,
                  title: 'Catalogue Produits',
                  description: 'Des milliers de produits africains authentiques',
                  color: '#FFD700'
                },
                {
                  icon: TrendingUp,
                  title: 'Opportunités B2B',
                  description: 'Connectez-vous avec des acheteurs internationaux',
                  color: '#004AAD'
                },
                {
                  icon: Shield,
                  title: 'Transactions Sécurisées',
                  description: 'Paiements protégés et garantis',
                  color: '#FFD700'
                },
                {
                  icon: Zap,
                  title: 'Livraison Rapide',
                  description: 'Logistique optimisée à travers l\'Afrique',
                  color: '#004AAD'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-[#004AAD] mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>
                      {feature.title}
                    </h3>
                    <p className="text-[#666]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-[#004AAD] to-[#0066CC] rounded-3xl p-12 md:p-16 text-center">
                {/* Animated Pattern Overlay */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #FFD700 2px, transparent 2px)',
                    backgroundSize: '30px 30px'
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '30px 30px'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="text-8xl mb-6"
                  >
                    🚀
                  </motion.div>
                  
                  <h2 className="text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800 }}>
                    En Construction
                  </h2>
                  
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    Notre équipe travaille activement sur cette fonctionnalité révolutionnaire. 
                    Inscrivez-vous pour être notifié du lancement !
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#FFD700] text-[#004AAD] rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    style={{ fontSize: '14px', fontWeight: 700 }}
                  >
                    M'avertir du Lancement
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-[#F7F7F7]">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[#004AAD] mb-4" style={{ fontSize: '24px', fontWeight: 700 }}>
                  Restez Informé
                </h3>
                <p className="text-[#666] mb-6" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  Recevez les dernières actualités sur le développement du Marketplace
                </p>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                    style={{ fontSize: '13px' }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-[#004AAD] text-white rounded-lg hover:bg-[#003380] transition-colors"
                    style={{ fontSize: '13px', fontWeight: 600 }}
                  >
                    S'inscrire
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}