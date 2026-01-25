import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import type { MenuItem } from "@/types/header.types";

interface Props {
  setActiveSection: (section: string) => void;
  menuItems       : MenuItem[];
}

export const useScrollNavigation = ({ setActiveSection, menuItems }: Props) => {
  const pathname = usePathname();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition  = elementPosition + window.scrollY;

        window.scrollTo({
          top     : offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(sectionId);
      }
    },
    [setActiveSection],
  );

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let   currentSection = menuItems[0].id;

      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition <  offsetTop + offsetHeight
          ) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems, setActiveSection, pathname]);

  return { scrollToSection };
};
