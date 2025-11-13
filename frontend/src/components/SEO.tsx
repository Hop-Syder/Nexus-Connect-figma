import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title = 'Nexus Connect - Connectons les Entrepreneurs d\'Afrique de l\'Ouest',
  description = 'La première vitrine numérique qui connecte les talents, artisans et startups d\'Afrique de l\'Ouest. Rejoignez notre communauté de 500+ entrepreneurs à travers 8 pays.',
  keywords = 'entrepreneurs afrique, réseau professionnel afrique ouest, startup afrique, business afrique, nexus connect, networking afrique, annuaire entrepreneurs',
  image = 'https://nexusconnect.africa/og-image.jpg',
  url = 'https://nexusconnect.africa',
  type = 'website',
  author = 'Nexus Connect',
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const siteUrl = 'https://nexusconnect.africa';
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Nexus Connect" />
      <meta property="og:locale" content="fr_FR" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@NexusConnect" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="West Africa" />
      <meta name="geo.placename" content="West Africa" />
      
      {/* Mobile */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Nexus Connect" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#004AAD" />
      <meta name="msapplication-TileColor" content="#004AAD" />
    </Helmet>
  );
}
