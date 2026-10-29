import HeroNameWord from "./HeroNameWord";
import HeroBrushTag from "./HeroBrushTag";
import { heroTimeline } from "@/config/hero.config";

interface Props {
  firstName: string;
  lastName : string;
  role     : string;
}

const HeroName = ({ firstName, lastName, role }: Props) => {
  return (
    <h1 className="relative -ml-[0.04em] text-(length:--hero-name-size) font-normal leading-none">
      <span className="sr-only">{`${firstName} ${lastName}`}</span>

      <span className="relative block">
        <HeroNameWord
          word={firstName}
          delay={heroTimeline.nameFirstDelay}
          className="text-background dark:text-[#f5f5f5]"
        />

        <HeroBrushTag
          label={role}
          className="my-4 text-[max(1em,125px)] md:absolute md:top-[0.08em] md:left-[2.16em] md:m-0 md:text-[1em]"
        />
      </span>

      <HeroNameWord
        word={lastName}
        delay={heroTimeline.nameLastDelay}
        className="text-status"
      />
    </h1>
  );
};

export default HeroName;
