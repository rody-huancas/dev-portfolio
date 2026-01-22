import { motion } from 'framer-motion';
import { cn } from '@/utils/cn.utils';
import type { MenuItem } from '@/types/header.types';

interface NavButtonProps {
  item    : MenuItem;
  isActive: boolean;
  onClick : () => void;
}

const NavButton = ({ item, isActive, onClick }: NavButtonProps) => {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center relative group transition-colors duration-500",
        isActive ? "text-black" : "text-gray-400 hover:text-white"
      )}
      aria-label={`Ir a ${item.label}`}
      role="menuitem"
    >
      {isActive && (
        <motion.div
          layoutId="activeBackground"
          className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      )}

      <motion.div
        animate={{ scale: isActive ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative z-10"
      >
        <Icon size={20} />
      </motion.div>

      <span className="absolute left-full ml-4 px-3 py-1 bg-[#1f1e1e] border border-white/10 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 whitespace-nowrap pointer-events-none">
        {item.label}
      </span>
    </button>
  );
};

export default NavButton;
