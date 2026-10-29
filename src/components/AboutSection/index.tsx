"use client";

import { motion } from "framer-motion";
import Title from "../Title";
import TechStack from "../TechStack";
import AboutQuote from "./AboutQuote";
import AboutReveal from "./AboutReveal";
import HighlightedText from "./HighlightedText";
import { useI18n } from "@/i18n/I18nProvider";

const AboutSection = () => {
  const { dictionary } = useI18n();
  const { about } = dictionary;

  return (
    <section id="about" className="pt-24">
      <Title
        label={about.sectionLabel}
        title={about.sectionTitle}
        subtitle={about.sectionSubtitle}
      />

      <motion.div
        className="space-y-6 text-lg leading-relaxed text-background/60 dark:text-foreground md:text-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutReveal index={0}>
          <p>
            <HighlightedText text={about.paragraphs.first} />
          </p>
        </AboutReveal>

        <AboutReveal index={1}>
          <p>
            <HighlightedText text={about.paragraphs.second} />
          </p>
        </AboutReveal>

        <AboutReveal index={2} className="pt-4">
          <AboutQuote text={about.quote} />
        </AboutReveal>
      </motion.div>

      <TechStack />
    </section>
  );
};

export default AboutSection;
