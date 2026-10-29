import TechGrid from "./TechGrid";
import type { ITech } from "@/types/stack.types";

interface Props {
  label       : string;
  technologies: ITech[];
}

const TechGroup = ({ label, technologies }: Props) => {
  return (
    <div>
      <div className="mb-3.5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-background/60 dark:text-foreground/65">
        <span
          className="h-px w-7 bg-background/25 dark:bg-foreground/25"
          aria-hidden="true"
        />
        <h4>{label}</h4>
      </div>

      <TechGrid ariaLabel={label} technologies={technologies} />
    </div>
  );
};

export default TechGroup;
