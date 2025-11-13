import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import { Rocket, MessageSquare } from 'lucide-react';

export function ServiceCTA() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#004AAD]/5 via-white to-[#FFD700]/5 relative overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border-4 border-[#FFD700]/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 border-4 border-[#004AAD]/10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full border border-[#FFD700]/30"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#004AAD] text-sm" style={{ fontWeight: 700 }}>
              🚀 Démarrez dès aujourd'hui
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-[#004AAD]"
            style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 800,
              lineHeight: '120%',
            }}
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Prêt à donner de la visibilité à votre activité ?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-[#333]/80 text-base md:text-lg max-w-2xl mx-auto"
            style={{ lineHeight: '1.7' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Créez votre profil gratuitement en quelques minutes et rejoignez les centaines 
            d'entrepreneurs déjà présents sur Nexus Connect.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#FFD700] text-[#004AAD] hover:bg-[#FFD700]/90 rounded-xl shadow-lg px-8 py-6"
                style={{ fontWeight: 700 }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Créer mon profil gratuit
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                variant="outline" 
                className="w-full sm:w-auto border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD]/5 rounded-xl px-8 py-6"
                style={{ fontWeight: 600 }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Parler à un conseiller
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="pt-8 flex flex-wrap justify-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: '✅', text: 'Inscription gratuite' },
              { icon: '🚀', text: 'En ligne en 5 minutes' },
              { icon: '🌍', text: 'Présent dans 8 pays' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm text-[#333]/70"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span style={{ fontWeight: 600 }}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
