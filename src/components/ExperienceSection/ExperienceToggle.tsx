import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/utils/cn.utils";

interface Props {
  isOpen  : boolean;
  controls: string;
  label   : string;
  onToggle: () => void;
}

const ExperienceToggle = ({ isOpen, controls, label, onToggle }: Props) => {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onToggle}
      className="group inline-flex cursor-pointer items-center gap-3 text-sm font-medium text-background/72 transition-colors hover:text-background dark:text-foreground/72 dark:hover:text-foreground"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/14 transition-transform duration-200 group-hover:-translate-y-0.5 dark:border-foreground/14">
        <FiChevronDown
          aria-hidden="true"
          className={cn("shrink-0 text-[0.9rem] transition-transform duration-300", isOpen && "rotate-180")}
        />
      </span>

      <span className="border-b border-transparent pb-1 transition-colors group-hover:border-current">
        {label}
      </span>
    </button>
  );
};

export default ExperienceToggle;
