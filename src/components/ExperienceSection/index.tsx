import Title from "../Title";
import CardExperience from "./CardExperience";
import experienceData from "@/data/experience-data.json";
import type { IExperience } from "@/types/experience.types";

const ExperienceSection = () => {

  const experiences = experienceData.experience as IExperience[];
  
  return (
    <div className="w-full mt-20">
      <div className="mb-16">
        <Title label="Experiencia" title="Mi ruta" subtitle="profesional" />

        <p className="text-text-muted text-lg max-w-xl">
          Trayectoria profesional enfocada en crear soluciones digitales
          eficientes y escalables.
        </p>
      </div>

      <div className="relative">
        {experiences.map((experience) => (
          <CardExperience key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
