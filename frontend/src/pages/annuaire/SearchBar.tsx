import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { Input } from '../../components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004AAD]/50" />
        <Input
          type="text"
          placeholder="Rechercher par nom, profession, localisation..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 pr-4 py-6 text-base border-2 border-gray-200 focus:border-[#FFD700] rounded-2xl shadow-lg focus:shadow-xl transition-all"
          style={{ fontSize: '16px' }}
        />
      </div>

      {/* Decorative glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1), transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
}
