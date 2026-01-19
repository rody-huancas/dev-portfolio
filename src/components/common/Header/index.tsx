"use client"

import { useState } from 'react';
import { cn } from '@/utils/cn.utils';
import { FiEdit } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { IoGitNetworkOutline } from 'react-icons/io5';
import { TbBriefcase2, TbGridDots } from 'react-icons/tb';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', icon: TbGridDots, label: 'Home' },
    { id: 'experience', icon: IoGitNetworkOutline, label: 'Experiencia' },
    { id: 'projects', icon: TbBriefcase2, label: 'Proyectos' },
    { id: 'about', icon: FiEdit, label: 'Sobre Mí' },
    { id: 'contact', icon: MdOutlineMarkEmailUnread, label: 'Contacto' },
  ];

  const socialItems = [
    { id: 'github', icon: FaGithub, label: 'GitHub', link: '#' },
    { id: 'linkendin', icon: FaLinkedinIn, label: 'Llinkendin', link: '#' },
  ];

  return (
    <header className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <nav className="flex flex-col gap-4">
        <div className="bg-[#343639] rounded-full p-2 flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  "transition-all duration-300 group relative",
                  activeSection === item.id 
                    ? "bg-white text-black" 
                    : "text-gray-100 hover:text-white hover:bg-[#1f1e1e]"
                )}
                aria-label={item.label}
              >
                <Icon size={20} />
                
                <span className="absolute left-full ml-4 px-3 py-1.5 bg-white text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="bg-[#343639] rounded-full p-2 flex flex-col gap-1">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  "text-gray-100 hover:text-white hover:bg-[#1f1e1e]",
                  "transition-all duration-300 group relative"
                )}
                aria-label={item.label}
              >
                <Icon size={20} />
                
                <span className="absolute left-full ml-4 px-3 py-1.5 bg-white text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;