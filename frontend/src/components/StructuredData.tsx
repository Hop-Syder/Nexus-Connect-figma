import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'breadcrumb' | 'person' | 'article';
  data?: Record<string, any>;
}

export function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Nexus Connect',
          description: 'La première vitrine numérique qui connecte les entrepreneurs d\'Afrique de l\'Ouest',
          url: 'https://nexusconnect.africa',
          logo: 'https://nexusconnect.africa/logo.png',
          foundingDate: '2024',
          founder: {
            '@type': 'Person',
            name: 'Nexus Connect Team'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'contact@nexusconnect.africa',
            availableLanguage: ['French', 'English']
          },
          sameAs: [
            'https://www.linkedin.com/company/nexusconnect',
            'https://twitter.com/NexusConnect',
            'https://www.facebook.com/NexusConnect'
          ],
          areaServed: {
            '@type': 'Place',
            name: 'West Africa',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '12.0',
              longitude: '-1.0'
            }
          },
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: 10
          },
          ...data
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Nexus Connect',
          url: 'https://nexusconnect.africa',
          description: 'Connectons les Entrepreneurs d\'Afrique de l\'Ouest',
          inLanguage: 'fr-FR',
          publisher: {
            '@type': 'Organization',
            name: 'Nexus Connect',
            logo: {
              '@type': 'ImageObject',
              url: 'https://nexusconnect.africa/logo.png'
            }
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://nexusconnect.africa/#annuaire?search={search_term_string}',
            'query-input': 'required name=search_term_string'
          },
          ...data
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data?.items || []
        };

      case 'person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          ...data
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'Nexus Connect',
            logo: {
              '@type': 'ImageObject',
              url: 'https://nexusconnect.africa/logo.png'
            }
          },
          ...data
        };

      default:
        return data;
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
