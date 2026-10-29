"use client";

import { motion } from "framer-motion";
import HeroLink from "./HeroLink";
import { heroLinks, heroTimeline } from "@/config/hero.config";
import { useHeroTransition } from "@/hooks/useHeroTransition";
import type { HeroLinkId, IHeroLinkCopy } from "@/types/hero.types";

interface Props {
  ariaLabel: string;
  copy     : Record<HeroLinkId, IHeroLinkCopy>;
}

const HeroLinks = ({ ariaLabel, copy }: Props) => {
  const transition = useHeroTransition();

  return (
    <nav
      className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:items-center md:gap-x-7 md:gap-y-4"
      aria-label={ariaLabel}
    >
      {heroLinks.map((link, index) => {
        const linkCopy = copy[link.id];
        const href     = link.href ?? linkCopy.url;

        if (!href) return null;

        return (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition({
              delay   : heroTimeline.linksDelay + index * heroTimeline.linksStagger,
              duration: heroTimeline.revealDuration,
              ease    : "easeOut",
            })}
          >
            <HeroLink
              href={href}
              icon={link.icon}
              label={linkCopy.label}
              ariaLabel={linkCopy.ariaLabel}
              title={linkCopy.title}
              isExternal={link.isExternal}
            />
          </motion.div>
        );
      })}
    </nav>
  );
};

export default HeroLinks;
