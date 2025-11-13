import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { Label } from '../../components/ui/label';
import { FilterState, Country, ProfileStatus, SubscriptionTier } from './types';
import { AVAILABLE_PROFESSIONS } from './mockData';

interface FiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export function Filters({ filters, onChange }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    countries: true,
    statuses: true,
    tags: false,
    tiers: false,
  });

  const countries: Country[] = ['Bénin', 'Nigeria', 'Sénégal', 'Côte d\'Ivoire', 'Ghana', 'Togo', 'Mali', 'Burkina Faso'];
  
  const statuses: { value: ProfileStatus; label: string }[] = [
    { value: 'entreprise', label: 'Entreprise' },
    { value: 'pme', label: 'PME' },
    { value: 'mpe', label: 'MPE' },
    { value: 'agence-cabinet', label: 'Agence/Cabinet' },
    { value: 'ong', label: 'ONG' },
    { value: 'freelancer', label: 'Freelancer' },
    { value: 'artisan', label: 'Artisan' },
    { value: 'etudiant', label: 'Étudiant' },
    { value: 'benevole', label: 'Bénévole' },
  ];

  const tiers: { value: SubscriptionTier; label: string }[] = [
    { value: 'free', label: 'Gratuit' },
    { value: 'freemium', label: 'Freemium' },
    { value: 'premium', label: 'Premium' },
  ];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleCountry = (country: Country) => {
    const newCountries = filters.countries.includes(country)
      ? filters.countries.filter(c => c !== country)
      : [...filters.countries, country];
    onChange({ ...filters, countries: newCountries });
  };

  const toggleStatus = (status: ProfileStatus) => {
    const newStatuses = filters.statuses.includes(status)
      ? filters.statuses.filter(s => s !== status)
      : [...filters.statuses, status];
    onChange({ ...filters, statuses: newStatuses });
  };

  const toggleTag = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    onChange({ ...filters, tags: newTags });
  };

  const toggleTier = (tier: SubscriptionTier) => {
    const newTiers = filters.tiers.includes(tier)
      ? filters.tiers.filter(t => t !== tier)
      : [...filters.tiers, tier];
    onChange({ ...filters, tiers: newTiers });
  };

  const clearFilters = () => {
    onChange({
      search: filters.search,
      countries: [],
      statuses: [],
      tags: [],
      newMembers: false,
      tiers: [],
    });
  };

  const activeFiltersCount = 
    filters.countries.length + 
    filters.statuses.length + 
    filters.tags.length + 
    filters.tiers.length +
    (filters.newMembers ? 1 : 0);

  return (
    <>
      {/* Mobile Filter Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:hidden"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white rounded-xl shadow-lg"
          style={{ fontWeight: 600 }}
        >
          <Filter className="w-5 h-5 mr-2" />
          Filtres {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
      </motion.div>

      {/* Desktop Filters Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden lg:block"
      >
        <FilterPanel
          filters={filters}
          onChange={onChange}
          expandedSections={expandedSections}
          toggleSection={toggleSection}
          countries={countries}
          statuses={statuses}
          tiers={tiers}
          toggleCountry={toggleCountry}
          toggleStatus={toggleStatus}
          toggleTag={toggleTag}
          toggleTier={toggleTier}
          clearFilters={clearFilters}
          activeFiltersCount={activeFiltersCount}
        />
      </motion.div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 overflow-y-auto lg:hidden shadow-2xl"
            >
              <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-[#004AAD]" style={{ fontSize: '20px', fontWeight: 700 }}>
                  Filtres
                </h3>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-6">
                <FilterPanel
                  filters={filters}
                  onChange={onChange}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  countries={countries}
                  statuses={statuses}
                  tiers={tiers}
                  toggleCountry={toggleCountry}
                  toggleStatus={toggleStatus}
                  toggleTag={toggleTag}
                  toggleTier={toggleTier}
                  clearFilters={clearFilters}
                  activeFiltersCount={activeFiltersCount}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

interface FilterPanelProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  expandedSections: Record<string, boolean>;
  toggleSection: (section: keyof typeof expandedSections) => void;
  countries: Country[];
  statuses: { value: ProfileStatus; label: string }[];
  tiers: { value: SubscriptionTier; label: string }[];
  toggleCountry: (country: Country) => void;
  toggleStatus: (status: ProfileStatus) => void;
  toggleTag: (tag: string) => void;
  toggleTier: (tier: SubscriptionTier) => void;
  clearFilters: () => void;
  activeFiltersCount: number;
}

function FilterPanel({
  filters,
  onChange,
  expandedSections,
  toggleSection,
  countries,
  statuses,
  tiers,
  toggleCountry,
  toggleStatus,
  toggleTag,
  toggleTier,
  clearFilters,
  activeFiltersCount,
}: FilterPanelProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <h3 className="text-[#004AAD] flex items-center gap-2" style={{ fontSize: '18px', fontWeight: 700 }}>
          <Filter className="w-5 h-5" />
          Filtres
        </h3>
        {activeFiltersCount > 0 && (
          <Button
            onClick={clearFilters}
            variant="ghost"
            size="sm"
            className="text-[#FFD700] hover:text-[#004AAD]"
            style={{ fontWeight: 600 }}
          >
            Réinitialiser
          </Button>
        )}
      </div>

      {/* Active Filters Count */}
      {activeFiltersCount > 0 && (
        <Badge className="bg-[#FFD700] text-[#004AAD] border-none">
          {activeFiltersCount} filtre{activeFiltersCount > 1 ? 's' : ''} actif{activeFiltersCount > 1 ? 's' : ''}
        </Badge>
      )}

      {/* New Members Toggle */}
      <div className="flex items-center gap-3 p-3 bg-[#F7F7F7] rounded-xl">
        <Checkbox
          id="newMembers"
          checked={filters.newMembers}
          onCheckedChange={(checked) => onChange({ ...filters, newMembers: !!checked })}
        />
        <Label htmlFor="newMembers" className="text-[#333] cursor-pointer" style={{ fontSize: '14px', fontWeight: 600 }}>
          Nouveaux inscrits uniquement
        </Label>
      </div>

      {/* Countries Filter */}
      <FilterSection
        title="Pays"
        expanded={expandedSections.countries}
        onToggle={() => toggleSection('countries')}
        count={filters.countries.length}
      >
        <div className="space-y-2">
          {countries.map((country) => (
            <div key={country} className="flex items-center gap-3 p-2 hover:bg-[#F7F7F7] rounded-lg transition-colors">
              <Checkbox
                id={`country-${country}`}
                checked={filters.countries.includes(country)}
                onCheckedChange={() => toggleCountry(country)}
              />
              <Label htmlFor={`country-${country}`} className="text-[#333] cursor-pointer flex-1" style={{ fontSize: '14px' }}>
                {country}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Status Filter */}
      <FilterSection
        title="Statut"
        expanded={expandedSections.statuses}
        onToggle={() => toggleSection('statuses')}
        count={filters.statuses.length}
      >
        <div className="space-y-2">
          {statuses.map((status) => (
            <div key={status.value} className="flex items-center gap-3 p-2 hover:bg-[#F7F7F7] rounded-lg transition-colors">
              <Checkbox
                id={`status-${status.value}`}
                checked={filters.statuses.includes(status.value)}
                onCheckedChange={() => toggleStatus(status.value)}
              />
              <Label htmlFor={`status-${status.value}`} className="text-[#333] cursor-pointer flex-1" style={{ fontSize: '14px' }}>
                {status.label}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Tier Filter */}
      <FilterSection
        title="Type d'abonnement"
        expanded={expandedSections.tiers}
        onToggle={() => toggleSection('tiers')}
        count={filters.tiers.length}
      >
        <div className="space-y-2">
          {tiers.map((tier) => (
            <div key={tier.value} className="flex items-center gap-3 p-2 hover:bg-[#F7F7F7] rounded-lg transition-colors">
              <Checkbox
                id={`tier-${tier.value}`}
                checked={filters.tiers.includes(tier.value)}
                onCheckedChange={() => toggleTier(tier.value)}
              />
              <Label htmlFor={`tier-${tier.value}`} className="text-[#333] cursor-pointer flex-1" style={{ fontSize: '14px' }}>
                {tier.label}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Professions Filter */}
      <FilterSection
        title="Professions"
        expanded={expandedSections.tags}
        onToggle={() => toggleSection('tags')}
        count={filters.tags.length}
      >
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {AVAILABLE_PROFESSIONS.map((profession) => (
            <div key={profession} className="flex items-center gap-3 p-2 hover:bg-[#F7F7F7] rounded-lg transition-colors">
              <Checkbox
                id={`profession-${profession}`}
                checked={filters.tags.includes(profession)}
                onCheckedChange={() => toggleTag(profession)}
              />
              <Label htmlFor={`profession-${profession}`} className="text-[#333] cursor-pointer flex-1" style={{ fontSize: '14px' }}>
                {profession}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}

interface FilterSectionProps {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  count?: number;
  children: React.ReactNode;
}

function FilterSection({ title, expanded, onToggle, count, children }: FilterSectionProps) {
  return (
    <div className="border-t border-gray-100 pt-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between mb-3 group"
      >
        <span className="text-[#004AAD] group-hover:text-[#FFD700] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
          {title}
          {count !== undefined && count > 0 && (
            <span className="ml-2 text-[#FFD700]">({count})</span>
          )}
        </span>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-[#004AAD]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
