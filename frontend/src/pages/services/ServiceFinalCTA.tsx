import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import { Sparkles, Phone, CheckCircle2, Users, TrendingUp } from 'lucide-react';

export function ServiceFinalCTA() {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-[#004AAD]/10 via-[#FFD700]/5 to-[#004AAD]/10 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #004AAD 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-[#FFD700]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-[#004AAD]/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-32 right-32 w-24 h-24 border-4 border-[#FFD700]/30 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-20 h-20 border-4 border-[#004AAD]/20"
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700]/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="rounded-[2rem] md:rounded-[3rem] bg-white/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            boxShadow: '0 40px 80px rgba(0, 74, 173, 0.3)',
          }}
        >
          <div className="text-center space-y-6 md:space-y-8">
            {/* Animated badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#004AAD]/20 rounded-full border border-[#FFD700]/30"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(255, 215, 0, 0.4)',
                  '0 0 0 10px rgba(255, 215, 0, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#004AAD] text-sm md:text-base" style={{ fontWeight: 700 }}>
                Offre de Lancement
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h2
              className="text-[#004AAD]"
              style={{
                fontSize: 'clamp(32px, 6vw, 56px)',
                fontWeight: 800,
                lineHeight: '110%',
              }}
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Prêt à propulser votre entreprise ?
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[#333]/80 text-base md:text-xl max-w-3xl mx-auto"
              style={{ lineHeight: '1.7' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Rejoignez les <strong className="text-[#004AAD]">500+ entrepreneurs</strong> qui ont déjà fait 
              le choix de la <strong className="text-[#FFD700]">visibilité digitale</strong>. 
              Créez votre profil en <strong>5 minutes</strong>, aucune carte bancaire requise.
            </motion.p>

            {/* Stats badges in grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Users, value: '500+', label: 'Clients satisfaits' },
                { icon: CheckCircle2, value: '95%', label: 'Taux de satisfaction' },
                { icon: TrendingUp, value: '8 pays', label: 'En Afrique de l\'Ouest' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-[#F7F7F7] to-white border border-gray-200"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-5 h-5 text-[#004AAD]" />
                  </motion.div>
                  <div 
                    className="text-[#004AAD]"
                    style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 800 }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#333]/70 text-xs md:text-sm text-center" style={{ fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#004AAD] hover:from-[#FFA500] hover:to-[#FFD700] rounded-xl shadow-2xl px-8 py-6 md:px-10 md:py-7 group"
                  style={{ fontWeight: 800 }}
                >
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Créer mon profil gratuitement
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD]/5 rounded-xl px-8 py-6 md:px-10 md:py-7"
                  style={{ fontWeight: 700 }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Parler à un conseiller
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust message */}
            <motion.p
              className="text-[#333]/60 text-sm md:text-base pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              🎁 <strong>Bonus :</strong> Les 100 premiers inscrits reçoivent 3 mois gratuits au pack Croissance !
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
        style={{
          background: 'linear-gradient(to top, #004AAD 0%, transparent 100%)',
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
