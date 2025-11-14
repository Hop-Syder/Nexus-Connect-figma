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
import { useEffect, useState } from 'react';
import { unsplash_tool } from '../../utils/unsplash';

export function HomePage() {
  const [images, setImages] = useState({
    hero: '',
    vision: '',
    map: '',
    testimonials: ['', '', ''],
  });

  useEffect(() => {
    // Load images
    const loadImages = async () => {
      // Ces images seront chargées via Unsplash ou depuis vos assets
      setImages({
        hero: 'image/acceuil-nexusconnect-1.jpg',
        vision: 'https://images.unsplash.com/photo-1557804506-6a69a67965ba0?w=800',
        map: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1000',
        testimonials: [
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
        ],
      });
    };
    loadImages();
  }, []);

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
        <HeroSection heroImage={images.hero} />
        <VisionMissionSection image={images.vision} />
        <ValuesSection />
        <StorySection />
        <AboutSection mapImage={images.map} />
        <ServicesSection />
        <TeamSection />
        <RSESection />
        <TestimonialsSection testimonialImages={images.testimonials} />
        <CTASection />
      </motion.main>
    </>
  );
}
