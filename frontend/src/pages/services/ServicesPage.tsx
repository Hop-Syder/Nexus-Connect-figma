import { ServicesHero } from './ServicesHero';
import { ServicesGrid } from './ServicesGrid';
import { ProcessSection } from './ProcessSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { ServicesCTA } from './ServicesCTA';
import { SEO } from '../../components/SEO';

export function ServicesPage() {
  return (
    <>
      <SEO 
        title="Nos Services - Nexus Connect | Développez Votre Business en Afrique"
        description="Connexion réseau, accompagnement business et formation pour entrepreneurs africains. Développez votre activité avec Nexus Connect : mentorat, networking, ressources exclusives."
        keywords="services entrepreneurs afrique, accompagnement business, formation professionnelle, networking afrique, mentorat startup, développement business afrique"
        url="/#services"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <ServicesHero />

        {/* Services Grid - 4 services principaux */}
        <ServicesGrid />

        {/* Process Section - Étapes du processus */}
        <ProcessSection />

        {/* Pricing Section - 3 packs tarifaires */}
        <PricingSection />

        {/* FAQ Section - Questions fréquentes */}
        <FAQSection />

        {/* CTA Final - Appel à l'action puissant */}
        <ServicesCTA />
      </div>
    </>
  );
}