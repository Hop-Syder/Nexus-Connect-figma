import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function MobileFixedCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [100, 200], [0, 1]);
  const y = useTransform(scrollY, [100, 200], [100, 0]);

  return (
    <motion.div
      className="fixed bottom-6 left-4 right-4 z-40 md:hidden"
      style={{ opacity, y }}
    >
      <motion.a
        href="#accueil"
        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFD700]/90 text-[#004AAD] rounded-2xl shadow-2xl backdrop-blur-sm"
        style={{ fontWeight: 700, fontSize: '16px' }}
        whileHover={{ scale: 1.02, y: -3 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          boxShadow: [
            '0 10px 30px rgba(255, 215, 0, 0.4)',
            '0 10px 40px rgba(255, 215, 0, 0.6)',
            '0 10px 30px rgba(255, 215, 0, 0.4)',
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
        <span>Créer mon profil gratuitement</span>
      </motion.a>
    </motion.div>
  );
}
