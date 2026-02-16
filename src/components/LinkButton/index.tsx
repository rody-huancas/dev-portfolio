import { cn } from "@/utils/cn.utils";
import { IconType } from "react-icons";

interface Props {
  href       : string;
  ariaLabel ?: string;
  title     ?: string;
  icon       : IconType;
  label      : string;
  isExternal?: boolean;
  variant   ?: "default" | "outline" | "ghost";
  size      ?: "sm" | "md" | "lg";
}

const LinkButton = (props: Props) => {
  const { href, ariaLabel, title, icon: Icon, label, isExternal = true, variant = "default", size = "md" } = props;

  const isEmail = href.startsWith("mailto:");

  const variants = {
    default: "bg-button hover:bg-button-hover dark:bg-white/10 dark:hover:bg-white/20 text-white dark:text-foreground border border-transparent dark:border-foreground/10",
    outline: "bg-transparent hover:bg-background/5 dark:hover:bg-white/5 text-background dark:text-foreground border border-background/20 dark:border-foreground/20 hover:border-background/40 dark:hover:border-foreground/40",
    ghost  : "bg-transparent hover:bg-background/5 dark:hover:bg-white/5 text-background/80 dark:text-foreground/80 hover:text-background dark:hover:text-foreground border border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        "transition-all duration-300 ease-out",
        "hover:scale-105 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button dark:focus-visible:ring-foreground/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background",
        variants[variant],
        sizes[size]
      )}
      aria-label={ariaLabel || `${label} - ${isEmail ? "Enviar email" : "Abrir enlace"}`}
      title={title || label}
      {...(isExternal && !isEmail && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Icon
        size={iconSizes[size]}
        aria-hidden="true"
        className="shrink-0"
      />
      <span>{label}</span>
    </a>
  );
};

export default LinkButton;
