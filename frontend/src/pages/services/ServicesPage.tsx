import { ServiceHero } from './ServiceHero';
import { ServiceCards } from './ServiceCards';
import { ServiceWhyUs } from './ServiceWhyUs';
import { ServicePricing } from './ServicePricing';
import { ServiceTestimonials } from './ServiceTestimonials';
import { ServiceCTA } from './ServiceCTA';
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
        <ServiceHero />

        {/* Services Grid - 4 services principaux */}
        <ServiceCards />

        {/* Process Section - Étapes du processus */}
        <ServiceWhyUs />

        {/* Pricing Section - 3 packs tarifaires */}
        <ServicePricing />

        {/* FAQ Section - Questions fréquentes */}
        <ServiceTestimonials />

        {/* CTA Final - Appel à l'action puissant */}
        <ServiceCTA />
      </div>
    </>
  );
}