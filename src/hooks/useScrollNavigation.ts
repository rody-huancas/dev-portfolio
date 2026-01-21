import { useEffect, useCallback } from 'react';
import type { MenuItem } from '@/types/header.types';

interface Props {
  setActiveSection: (id: string) => void;
  menuItems: MenuItem[];
}

export const useScrollNavigation = ({ setActiveSection, menuItems }: Props) => {
  
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      window.history.pushState(null, '', `#${sectionId}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  }, [setActiveSection]);
  

  useEffect(() => {
    const handleScroll = () => {
      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (!element) continue;

        const { top, bottom } = element.getBoundingClientRect();
        const isVisible = top <= 100 && bottom >= 100;

        if (isVisible) {
          setActiveSection(item.id);
          window.history.replaceState(null, '', `#${item.id}`);
          break;
        }
      }
    };

    const navigateToInitialHash = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash) {
        setTimeout(() => scrollToSection(hash), 100);
      }
    };

    navigateToInitialHash();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems, setActiveSection, scrollToSection]);

  return { scrollToSection };
};
