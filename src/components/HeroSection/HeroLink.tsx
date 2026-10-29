import type { IconType } from "react-icons";

interface Props {
  href      : string;
  icon      : IconType;
  label     : string;
  ariaLabel : string;
  title     : string;
  isExternal: boolean;
}

const HeroLink = ({ href, icon: Icon, label, ariaLabel, title, isExternal }: Props) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      title={title}
      className="group inline-flex items-center gap-3 text-sm font-medium text-background/72 transition-colors hover:text-background dark:text-foreground/72 dark:hover:text-foreground"
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/14 transition-transform duration-200 group-hover:-translate-y-0.5 dark:border-foreground/14">
        <Icon aria-hidden="true" className="shrink-0 text-[0.9rem]" />
      </span>
      
      <span className="border-b border-transparent pb-1 transition-colors group-hover:border-current">
        {label}
      </span>
    </a>
  );
};

export default HeroLink;
