import { Header } from './pages/shared/Header';
import { Footer } from './pages/shared/Footer';
import { MobileFixedCTA } from './pages/shared/MobileFixedCTA';
import { HomePage } from './pages/home/HomePage';
import { ServicesPage } from './pages/services/ServicesPage';
import { AnnuairePage } from './pages/annuaire/AnnuairePage';
import { MarketplacePage } from './pages/marketplace/MarketplacePage';
import { PageTransition } from './components/PageTransition';
import { StructuredData } from './components/StructuredData';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'annuaire' | 'marketplace'>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simple hash-based routing with transition
  useEffect(() => {
    const handleHashChange = () => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        const hash = window.location.hash.slice(1);
        if (hash === 'services') {
          setCurrentPage('services');
        } else if (hash === 'annuaire') {
          setCurrentPage('annuaire');
        } else if (hash === 'marketplace') {
          setCurrentPage('marketplace');
        } else {
          setCurrentPage('home');
        }
        
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen relative overflow-hidden">
        {/* Global Structured Data */}
        <StructuredData type="organization" />
        <StructuredData type="website" />
        
        {/* Page Transition Loader */}
        <PageTransition isTransitioning={isTransitioning} />
        
        {/* Global parallax cursor effect */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, rgba(255, 215, 0, 0.03) 0%, transparent 50%)`
          }}
        />

        {/* Ambient floating orbs */}
        <motion.div
          className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none z-0"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-[#004AAD]/5 rounded-full blur-3xl pointer-events-none z-0"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10">
          <Header />
          
          {/* Page Router */}
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'services' && <ServicesPage />}
          {currentPage === 'annuaire' && <AnnuairePage />}
          {currentPage === 'marketplace' && <MarketplacePage />}
          
          <Footer />
          
          {/* Mobile Fixed CTA */}
          <MobileFixedCTA />
        </div>

        {/* Smooth scroll indicator */}
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#004AAD] rounded-full flex justify-center pt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </HelmetProvider>
  );
}