"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LayoutGroup } from 'framer-motion';
import NavButton from './NavButton';
import SocialButton from './SocialButton';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';
import { menuItems, socialItems } from '@/config/header.config';

const Header = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollToSection } = useScrollNavigation({ setActiveSection, menuItems });

  const isHomePage = pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      window.dispatchEvent(new Event('scroll'));
    }
  }, [isHomePage]);

  return (
    <header className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 lg:bottom-auto lg:left-10 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0">
      <nav className="flex flex-row lg:flex-col gap-4 items-center justify-center" role="navigation" aria-label="Navegación principal">
        
        <div className="bg-header/80 backdrop-blur-md border border-white/5 rounded-full p-2 flex flex-row lg:flex-col gap-2 shadow-2xl">
          <LayoutGroup>
            {menuItems.map((item) => {
              const isActive = isHomePage ? activeSection === item.id : pathname === item.path;

              return (
                <NavButton
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  onClick={() => scrollToSection(item.id)}
                />
              );
            })}
          </LayoutGroup>
        </div>

        <div className="hidden sm:flex bg-header/80 backdrop-blur-md border border-white/5 rounded-full p-2 flex-row lg:flex-col gap-2">
          {socialItems.map((item) => (
            <SocialButton key={item.id} item={item} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
