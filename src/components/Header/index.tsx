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
    <header className="fixed left-10 top-1/2 -translate-y-1/2 z-50">
      <nav className="flex flex-col gap-4">
        <div className="bg-[#343639]/80 backdrop-blur-md border border-white/5 rounded-full p-2 flex flex-col gap-2 shadow-2xl">
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

        <div className="bg-[#343639]/80 backdrop-blur-md border border-white/5 rounded-full p-2 flex flex-col gap-2">
          {socialItems.map((item) => (
            <SocialButton key={item.id} item={item} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
