import { cn } from '@/utils/cn.utils';
import type { SocialItem } from '@/types/header.types';

interface SocialButtonProps {
  item: SocialItem;
}

const SocialButton = ({ item }: SocialButtonProps) => {
  const Icon = item.icon;

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center",
        "text-gray-100 hover:text-white hover:bg-[#1f1e1e]",
        "transition-all duration-300 group relative"
      )}
      aria-label={`Visitar mi perfil de ${item.label}`}
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
    </a>
  );
};

export default SocialButton;
