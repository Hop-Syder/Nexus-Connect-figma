# 🧭 Navigation - Nexus Connect

## 🚀 Pages Disponibles

### ✅ Page d'Accueil (HomePage)
**URL** : `/` ou `#accueil`

**Sections** :
1. Hero - "Et si l'Afrique de l'Ouest..."
2. Vision & Mission - Offrir à chaque talent une vitrine
3. Valeurs - 4 valeurs fondamentales
4. Histoire - Roi Guézo et la jarre trouée
5. À propos - Carte Afrique de l'Ouest
6. Services - Aperçu 3 services
7. Équipe - Fondateurs
8. RSE - Engagements ODD
9. Témoignages - 3 clients
10. CTA Final - Rejoignez le mouvement

**État** : ✅ Production-ready

---

### ✅ Page Services (ServicesPage)
**URL** : `#services`

**Sections** :
1. **ServiceHero** - Hero immersif
2. **ServiceCards** - 4 services (Annuaire, Profils, Pilotage, IA)
3. **ServiceCTA** - Premier appel à l'action
4. **ServicePricing** - 3 packs (Starter, Croissance, Entreprise)
5. **ServiceWhyUs** - 4 raisons de choisir Nexus
6. **ServiceTestimonials** - 3 témoignages clients
7. **ServiceFinalCTA** - CTA final puissant

**État** : ✅ Production-ready (nouveau !)

---

### 🚧 Pages Futures

**À Propos** - `#apropos`  
**Annuaire** - `#annuaire`  
**Marketplace** - `#marketplace`  
**Blog** - `#blog`  
**Contact** - `#contact`

---

## 🔗 Comment Naviguer

### Depuis le Header
Le Header contient tous les liens de navigation :

```tsx
const menuItems = [
  { name: 'Accueil', href: '#accueil', emoji: '🏠' },
  { name: 'Services', href: '#services', emoji: '⚡' }, // ← Lien vers page Services
  { name: 'À propos', href: '#apropos', emoji: '💡' },
  { name: 'Annuaire', href: '#annuaire', emoji: '📂' },
  { name: 'Marketplace', href: '#marketplace', emoji: '🛍️' },
  { name: 'Blog', href: '#blog', emoji: '📰' },
];
```

### Navigation Programmatique

#### Changer de page en JavaScript
```tsx
window.location.hash = 'services'; // Aller sur page Services
window.location.hash = 'accueil';  // Retour Accueil
```

#### Dans un composant React
```tsx
<a href="#services">Voir nos services</a>
```

#### Bouton avec navigation
```tsx
<Button onClick={() => window.location.hash = 'services'}>
  Explorer les services
</Button>
```

---

## ⚙️ Système de Routing

### Hash-based Routing (Simple)
Le projet utilise actuellement un système simple basé sur le hash :

```tsx
// App.tsx
const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash.slice(1);
    if (hash === 'services') {
      setCurrentPage('services');
    } else {
      setCurrentPage('home');
    }
  };

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange(); // Initial check
  
  return () => window.removeEventListener('hashchange', handleHashChange);
}, []);

// Rendu conditionnel
{currentPage === 'home' && <HomePage />}
{currentPage === 'services' && <ServicesPage />}
```

### Avantages
- ✅ Simple à implémenter
- ✅ Fonctionne sans configuration serveur
- ✅ Navigation avant/arrière du navigateur
- ✅ Bookmarkable URLs

### Limitations
- ⚠️ URLs avec `#` (pas SEO-friendly)
- ⚠️ Pas de nested routes nativement
- ⚠️ Pas de protection de routes

---

## 🔄 Migration vers React Router (Future)

Pour un routing plus avancé :

```bash
npm install react-router-dom
```

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* ... */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
```

**Avantages** :
- ✅ URLs propres (`/services` au lieu de `#services`)
- ✅ Nested routes
- ✅ Route params (`/services/:id`)
- ✅ Protected routes
- ✅ Lazy loading facile

---

## 📱 Navigation Mobile

### Menu Hamburger
Le Header possède un menu mobile responsive :

```tsx
// S'ouvre avec animation slide-in depuis la droite
<motion.div
  className="fixed inset-0 bg-white z-50"
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
>
  {/* Menu items */}
</motion.div>
```

### Bouton CTA Fixe Mobile
Un bouton "✨ Créer mon profil" apparaît en bas sur mobile :

```tsx
// MobileFixedCTA.tsx
<motion.div
  className="md:hidden fixed bottom-4 left-4 right-4 z-40"
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
>
  <Button>✨ Créer mon profil</Button>
</motion.div>
```

---

## 🎯 Points d'Entrée de Navigation

### Depuis HomePage
Plusieurs liens pointent vers la page Services :

1. **Section Services Overview**
   ```tsx
   <a href="#services">Découvrir tous les services →</a>
   ```

2. **CTA Section**
   ```tsx
   <Button onClick={() => window.location.hash = 'services'}>
     Explorer nos services
   </Button>
   ```

### Depuis ServicesPage
Retour à l'accueil :

```tsx
// Logo Header
<a href="#accueil">Nexus Connect</a>

// Bouton Footer
<Button onClick={() => window.location.hash = 'accueil'}>
  Retour à l'accueil
</Button>
```

---

## 🔍 Deep Linking

### Liens directs vers sections
Utilisez les ancres pour lier directement à une section :

```tsx
// Vers section Vision sur HomePage
<a href="#accueil#vision">Notre vision</a>

// Vers Pricing sur ServicesPage  
<a href="#services#pricing">Voir les tarifs</a>
```

**Note** : Nécessite d'ajouter des `id` aux sections :
```tsx
<section id="pricing">
  {/* ServicePricing */}
</section>
```

---

## 🧪 Test de Navigation

### Checklist
- [ ] Clic sur "Services" dans Header → Affiche ServicesPage
- [ ] Clic sur "Accueil" dans Header → Affiche HomePage
- [ ] Bouton "Retour" navigateur → Fonctionne
- [ ] Bouton "Suivant" navigateur → Fonctionne
- [ ] URL `/#services` en direct → Charge ServicesPage
- [ ] URL `/` ou `/#accueil` → Charge HomePage
- [ ] Menu mobile → Ferme après clic sur lien
- [ ] Scroll smooth vers sections
- [ ] Logo → Retour accueil

---

## 📊 Structure App.tsx

```tsx
App.tsx
├── Global Effects (parallax, orbs)
├── Header (navigation principale)
├── Page Router
│   ├── HomePage (si hash = '' ou 'accueil')
│   └── ServicesPage (si hash = 'services')
├── Footer (liens secondaires)
└── MobileFixedCTA (mobile only)
```

---

## 💡 Bonnes Pratiques

### 1. Toujours préfixer les liens internes avec `#`
```tsx
// ✅ Bon
<a href="#services">Services</a>

// ❌ Mauvais (lien externe)
<a href="services">Services</a>
```

### 2. Utiliser window.location.hash pour navigation JS
```tsx
// ✅ Bon
window.location.hash = 'services';

// ❌ Éviter (reload complet)
window.location.href = '/#services';
```

### 3. Scroll to top lors du changement de page
```tsx
useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage]);
```

### 4. Fermer menu mobile après navigation
```tsx
<a 
  href="#services" 
  onClick={() => setMobileMenuOpen(false)}
>
  Services
</a>
```

---

## 🎨 Transitions entre Pages

Actuellement, les pages utilisent Motion pour les transitions :

```tsx
<motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Contenu de la page */}
</motion.main>
```

### Amélioration possible : Transition de sortie
```tsx
<AnimatePresence mode="wait">
  {currentPage === 'home' && (
    <motion.div
      key="home"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <HomePage />
    </motion.div>
  )}
  {currentPage === 'services' && (
    <motion.div
      key="services"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <ServicesPage />
    </motion.div>
  )}
</AnimatePresence>
```

---

## 🚀 Guide Rapide

### Pour ajouter une nouvelle page :

1. **Créer le dossier**
   ```
   /pages/nouvelle-page/
   ```

2. **Créer les composants**
   ```tsx
   NouvellePage.tsx
   NouvelleSection1.tsx
   NouvelleSection2.tsx
   index.ts
   ```

3. **Importer dans App.tsx**
   ```tsx
   import { NouvellePage } from './pages/nouvelle-page';
   
   const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'nouvelle'>('home');
   
   {currentPage === 'nouvelle' && <NouvellePage />}
   ```

4. **Ajouter au Header**
   ```tsx
   { name: 'Nouvelle', href: '#nouvelle', emoji: '🎉' }
   ```

5. **Mettre à jour le routing**
   ```tsx
   if (hash === 'nouvelle') {
     setCurrentPage('nouvelle');
   }
   ```

---

## 📚 Ressources

- [Motion Documentation](https://motion.dev/docs/react-quick-start)
- [React Router Documentation](https://reactrouter.com/)
- [Hash Navigation Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash)

---

**Navigation prête ! 🧭 La page Services est accessible via le menu.** ✨
