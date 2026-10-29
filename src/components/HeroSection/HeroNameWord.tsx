"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn.utils";
import { outfit } from "@/config/fonts.config";
import { heroTimeline } from "@/config/hero.config";
import { useHeroTransition } from "@/hooks/useHeroTransition";

interface Props {
  word      : string;
  delay     : number;
  className?: string;
}

const FONT_SIZE       = 250;
const VIEWBOX_HEIGHT  = FONT_SIZE * 0.82;
const BASELINE        = FONT_SIZE * 0.8;
const STROKE_WIDTH_PX = 2;
const DASH_LENGTH     = 4000;

const estimateWidth = (word: string) => Math.ceil(word.length * FONT_SIZE * 0.65);

const HeroNameWord = ({ word, delay, className }: Props) => {
  const svgRef     = useRef<SVGSVGElement>(null);
  const textRef    = useRef<SVGTextElement>(null);
  const transition = useHeroTransition();

  const [width, setWidth]             = useState(() => estimateWidth(word));
  const [strokeWidth, setStrokeWidth] = useState(STROKE_WIDTH_PX);

  useEffect(() => {
    const svg  = svgRef.current;
    const text = textRef.current;

    if (!svg || !text) return;

    let isActive = true;

    const measureText = () => {
      if (!isActive) return;
      setWidth(Math.ceil(text.getBBox().width));
    };

    const measureScale = () => {
      const scale = svg.getBoundingClientRect().height / VIEWBOX_HEIGHT;
      if (scale > 0) setStrokeWidth(STROKE_WIDTH_PX / scale);
    };

    measureText();
    measureScale();
    document.fonts.ready.then(measureText);

    const observer = new ResizeObserver(measureScale);
    observer.observe(svg);

    return () => {
      isActive = false;
      observer.disconnect();
    };
  }, [word]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${VIEWBOX_HEIGHT}`}
      className={cn("block h-[0.82em] w-auto max-w-none overflow-visible", className)}
      aria-hidden="true"
      focusable="false"
    >
      <text
        ref={textRef}
        x={0}
        y={BASELINE}
        fontSize={FONT_SIZE}
        fontWeight={800}
        letterSpacing={FONT_SIZE * -0.044}
        fill="transparent"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeDasharray={`${DASH_LENGTH} ${DASH_LENGTH}`}
        style={{ fontFamily: outfit.style.fontFamily }}
      >
        {word.split("").map((letter, index) => (
          <motion.tspan
            key={`${letter}-${index}`}
            initial={{ strokeDashoffset: DASH_LENGTH }}
            animate={{ strokeDashoffset: 0 }}
            transition={transition({
              delay   : delay + index * heroTimeline.letterStagger,
              duration: heroTimeline.letterDuration,
              ease    : [0.65, 0, 0.35, 1],
            })}
          >
            {letter}
          </motion.tspan>
        ))}
      </text>
    </svg>
  );
};

export default HeroNameWord;
