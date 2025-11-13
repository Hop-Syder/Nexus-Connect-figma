import { Monitor, BarChart3, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const services = [
  {
    icon: Monitor,
    title: 'Création de site web IA-driven',
    description: 'Des sites web professionnels créés avec intelligence artificielle, adaptés aux besoins des PME africaines.',
    color: '#FFD700'
  },
  {
    icon: BarChart3,
    title: 'Tableau de bord pour PME africaines',
    description: 'Outils de gestion et d\'analyse pour piloter votre entreprise avec précision et efficacité.',
    color: '#FFD700'
  },
  {
    icon: Globe,
    title: 'Marketplace de projets & collaborations',
    description: 'Une plateforme pour connecter entrepreneurs, investisseurs et partenaires à travers l\'Afrique de l\'Ouest.',
    color: '#FFD700'
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-[#F7F7F7] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-[#004AAD] mx-auto" 
            style={{
              fontSize: '36px',
              fontWeight: 700,
              lineHeight: '130%',
              maxWidth: '800px'
            }}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 8px rgba(0, 74, 173, 0.3)"
            }}
          >
            Des solutions concrètes pour les entrepreneurs africains
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  scale: 1.05
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <Card 
                  className="bg-white p-8 rounded-3xl border-0 h-full relative overflow-hidden"
                  style={{
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 74, 173, 0.1) 100%)'
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${service.color}20` }}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        boxShadow: '0 10px 30px rgba(255, 215, 0, 0.4)'
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Icon className="h-8 w-8 text-[#004AAD]" />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-[#004AAD] mb-4" style={{
                      fontSize: '18px',
                      fontWeight: 600
                    }}>
                      {service.title}
                    </h3>
                    <p className="text-[#666] mb-6" style={{
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      {service.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button 
                        variant="link" 
                        className="text-[#004AAD] p-0 h-auto hover:underline"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        En savoir + →
                      </Button>
                    </motion.div>
                  </div>

                  {/* 3D corner accent */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-20 h-20 bg-[#FFD700]/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ 
                      filter: 'blur(20px)',
                      transformStyle: 'preserve-3d'
                    }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
