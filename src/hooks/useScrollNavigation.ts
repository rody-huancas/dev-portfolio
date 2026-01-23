import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import type { MenuItem } from '@/types/header.types';

interface UseScrollNavigationProps {
  setActiveSection: (section: string) => void;
  menuItems: MenuItem[];
}

export const useScrollNavigation = ({ setActiveSection, menuItems }: UseScrollNavigationProps) => {
  const pathname = usePathname();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.history.pushState(null, '', `/#${sectionId}`);
      setActiveSection(sectionId);
    }
  }, [setActiveSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return;

      const scrollPosition = window.scrollY + 200;

      let currentSection = menuItems[0].id;

      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
      
      const currentHash = window.location.hash.slice(1);
      if (currentHash !== currentSection) {
        window.history.replaceState(null, '', `/#${currentSection}`);
      }
    };

    const hash = window.location.hash.slice(1);
    if (hash && menuItems.find(item => item.id === hash)) {
      setTimeout(() => scrollToSection(hash), 100);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems, setActiveSection, scrollToSection, pathname]);

  return { scrollToSection };
};
