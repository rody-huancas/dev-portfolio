"use client"

import { useEffect, useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import NavButton from './NavButton';
import SocialButton from './SocialButton';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';
import { menuItems, socialItems } from '@/config/header.config';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero-section');
  const { scrollToSection } = useScrollNavigation({ setActiveSection, menuItems });

  useEffect(() => {
    window.dispatchEvent(new Event('scroll'));
  }, []);

  return (
    <header className="fixed z-50 
      bottom-6 left-1/2 -translate-x-1/2 
      lg:bottom-auto lg:left-10 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0">
      
      <nav className="flex flex-row lg:flex-col gap-4 items-center justify-center">
        
        <div className="bg-header/80 backdrop-blur-md border border-white/5 rounded-full p-2 flex flex-row lg:flex-col gap-2 shadow-2xl">
          <LayoutGroup>
            {menuItems.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
              />
            ))}
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
