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
        "w-12 h-12 rounded-full flex items-center justify-center relative group transition-all duration-300",
        "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
      )}
      aria-label={`Visitar mi perfil de ${item.label}`}
    >
      <Icon size={20} aria-hidden="true" />
      
      <span 
        className="absolute left-full ml-4 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-xl"
        aria-hidden="true"
      >
        {item.label}
      </span>
    </a>
  );
};

export default SocialButton;
