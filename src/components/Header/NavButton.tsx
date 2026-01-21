import { cn } from '@/utils/cn.utils';
import type { MenuItem } from '@/types/header.types';

interface NavButtonProps {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
}

const NavButton = ({ item, isActive, onClick }: NavButtonProps) => {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center",
        "transition-all duration-300 group relative",
        isActive 
          ? "bg-white text-black" 
          : "text-gray-100 hover:text-white hover:bg-[#1f1e1e]"
      )}
      aria-label={`Ir a ${item.label}`}
      aria-current={isActive ? 'page' : undefined}
      role="menuitem"
      title={item.label}
    >
      <Icon size={20} aria-hidden="true" />
      
      <span 
        className="absolute left-full ml-4 px-3 py-1.5 bg-white text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
        aria-hidden="true"
      >
        {item.label}
      </span>
    </button>
  );
};

export default NavButton;
