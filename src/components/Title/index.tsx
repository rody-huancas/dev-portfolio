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

  const headingId = id || (title ? title.toLowerCase().replace(/\s+/g, "-") : undefined);

  const fullTitle = subtitle ? `${title} ${subtitle}` : title;

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
            className: "text-4xl md:text-5xl font-extrabold text-background dark:text-foreground tracking-tight",
            title    : fullTitle,
          },
          <>
            {title}{" "}
            {subtitle && (
              <span 
                className="relative inline-block text-status"
                aria-label={subtitle}
              >
                {subtitle}
                <svg
                  className="absolute left-[-2.5%] -bottom-2 w-[105%] h-6 pointer-events-none overflow-visible rotate-180"
                  viewBox="0 0 210 25"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <defs>
                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                      <stop offset="80%" stopColor="currentColor" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="brush-texture">
                      <feTurbulence type="fractalNoise" baseFrequency="0.59 0.1" numOctaves="2" seed="3" />
                      <feDisplacementMap in="SourceGraphic" scale="4" />
                    </filter>
                  </defs>

                  <path
                    d="M5 2 Q 105 22 205 2"
                    stroke="url(#underline-gradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#brush-texture)"
                  />
                </svg>
              </span>
            )}
          </>
        )}
    </header>
  );
};

export default Title;
