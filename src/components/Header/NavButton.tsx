"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn.utils';
import type { MenuItem } from '@/types/header.types';

interface NavButtonProps {
  item    : MenuItem;
  isActive: boolean;
  onClick : () => void;
}

const NavButton = ({ item, isActive, onClick }: NavButtonProps) => {
  const pathname = usePathname();
  const Icon = item.icon;
  
  const isInternalScroll = item.path.startsWith('/#') && pathname === '/';
  const isHomeScroll     = item.path                              === '/' && pathname === '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInternalScroll || isHomeScroll) {
      e.preventDefault();
      if (isHomeScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onClick();
      }
    }
  };

  return (
    <Link
      href={item.path}
      onClick={handleClick}
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center relative group transition-colors duration-500 outline-none",
        isActive ? "text-black" : "text-gray-400 hover:text-white hover:bg-[#1f1e1e]"
      )}
      aria-label={`Ir a ${item.label}`}
      aria-current={isActive ? "page" : undefined}
    >
      {isActive && (
        <motion.div
          layoutId="activeBackground"
          className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <motion.div
        animate={{ scale: isActive ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative z-10"
      >
        <Icon size={20} />
      </motion.div>

      <span className="absolute bottom-[calc(100%+1rem)] left-1/2 -translate-x-1/2 md:bottom-auto md:left-full md:ml-4 md:translate-x-0 px-3 py-1 bg-[#1f1e1e] border border-white/10 text-white text-xs font-medium rounded-md opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 whitespace-nowrap">
        {item.label}
      </span>
    </Link>
  );
};

export default NavButton;
