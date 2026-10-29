"use client";

import TechCell from "./TechCell";
import LineGrid from "../LineGrid";
import type { ITech } from "@/types/stack.types";

interface Props {
  ariaLabel   : string;
  technologies: ITech[];
}

const TechGrid = ({ ariaLabel, technologies }: Props) => {
  return (
    <LineGrid ariaLabel={ariaLabel} className="grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {technologies.map((tech, index) => (
        <TechCell key={tech.name} tech={tech} index={index} />
      ))}
    </LineGrid>
  );
};

export default TechGrid;
