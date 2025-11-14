import { HeroSection } from './HeroSection';
import { VisionMissionSection } from './VisionMissionSection';
import { ValuesSection } from './ValuesSection';
import { StorySection } from './StorySection';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { TeamSection } from './TeamSection';
import { RSESection } from './RSESection';
import { TestimonialsSection } from './TestimonialsSection';
import { CTASection } from './CTASection';
import { SEO } from '../../components/SEO';
import { motion } from 'motion/react';

// Images optimisées sans paramètres CORS problématiques
const STATIC_IMAGES = {
  hero: '/image/acceuil-nexusconnect-1.jpg',
  vision: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  map: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  testimonials: [
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  ],
};

export function HomePage() {
  return (
    <>
      <SEO
        title="Nexus Connect - Connectons les Entrepreneurs d'Afrique de l'Ouest"
        description="La première vitrine numérique qui connecte les talents, artisans et startups d'Afrique de l'Ouest. Rejoignez 500+ entrepreneurs à travers 8 pays. Innovation, collaboration, croissance."
        keywords="entrepreneurs afrique ouest, réseau professionnel afrique, startup afrique, business afrique, nexus connect, networking, innovation afrique, communauté entrepreneurs"
        url="/"
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection heroImage={STATIC_IMAGES.hero} />
        <VisionMissionSection image={STATIC_IMAGES.vision} />
        <ValuesSection />
        <StorySection />
        <AboutSection mapImage={STATIC_IMAGES.map} />
        <ServicesSection />
        <TeamSection />
        <RSESection />
        <TestimonialsSection testimonialImages={STATIC_IMAGES.testimonials} />
        <CTASection />
      </motion.main>
    </>
  );
}