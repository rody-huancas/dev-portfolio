import { createElement } from "react";
import { cn } from "@/utils/cn.utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  label    ?: string;
  title    ?: string;
  subtitle ?: string;
  level    ?: HeadingLevel;
  id       ?: string;
  className?: string;
}

const Title = (props: Props) => {
  const { label, title, subtitle, level = "h2", id, className = "" } = props;

  if (!title && !label) return null;

  const headingId =
    id || (title ? title.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <header className={cn("mb-10", className)}>
      {label && (
        <div
          className="flex items-center gap-2 mb-4"
          role="doc-subtitle"
          aria-label="Etiqueta de sección"
        >
          <span className="w-8 h-0.5 bg-status" aria-hidden="true"></span>
          <span className="text-status font-mono text-sm tracking-widest uppercase">
            {label}
          </span>
        </div>
      )}

      {title &&
        createElement(
          level,
          {
            id       : headingId,
            className: "text-4xl md:text-5xl font-extrabold text-white tracking-tight",
          },
          <>
            {title}
            {subtitle && (
              <span className="text-status underline decoration-button underline-offset-8">
                {" "}
                {subtitle}
              </span>
            )}
          </>,
        )}
    </header>
  );
};

export default Title;
