import { IconType } from "react-icons";

interface Props {
  href      : string;
  ariaLabel?: string;
  title    ?: string;
  icon      : IconType;
  label     : string;
}

const LinkButton = (props: Props) => {
  const { href, ariaLabel, title, icon: Icon, label } = props;

  return (
    <a
      href={href}
      className="flex items-center gap-2 px-6 py-3 bg-button hover:bg-button-hover dark:bg-white/10 dark:hover:bg-white/20 text-white dark:text-foreground rounded-full transition-colors duration-300 border border-transparent dark:border-foreground/10"
      aria-label={ariaLabel}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} aria-hidden="true" />
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default LinkButton;
