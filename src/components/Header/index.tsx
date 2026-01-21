"use client"

import { useState } from 'react';
import NavButton from './NavButton';
import SocialButton from './SocialButton';
import { menuItems, socialItems } from '@/config/header.config';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero-section');
  const { scrollToSection } = useScrollNavigation({ setActiveSection, menuItems });

  return (
    <header 
      className="fixed left-10 top-1/2 -translate-y-1/2 z-50"
      role="navigation"
      aria-label="Navegación principal"
    >
      <nav className="flex flex-col gap-4">
        <div 
          className="bg-[#343639] rounded-full p-2 flex flex-col gap-1"
          role="menu"
          aria-label="Menú de secciones"
        >
          {menuItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
            />
          ))}
        </div>

        <div 
          className="bg-[#343639] rounded-full p-2 flex flex-col gap-1"
          role="menu"
          aria-label="Redes sociales"
        >
          {socialItems.map((item) => (
            <SocialButton key={item.id} item={item} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
