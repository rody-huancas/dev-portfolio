"use client";

import Title from "../Title";
import TechGroup from "./TechGroup";
import { useI18n } from "@/i18n/I18nProvider";
import { stackData } from "@/data/stack.data";

const TechStack = () => {
  const { dictionary } = useI18n();
  const { stack } = dictionary.about;

  return (
    <div className="pt-24">
      <Title
        label={stack.label}
        title={stack.title}
        subtitle={stack.subtitle}
        level="h3"
        id="stack"
        className="mb-8"
      />

      <p className="text-lg text-background/60 dark:text-foreground/65">
        {stack.description}
      </p>

      <div className="mt-9 space-y-7.5">
        {stackData.map((group) => (
          <TechGroup
            key={group.id}
            label={stack.groups[group.id]}
            technologies={group.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
