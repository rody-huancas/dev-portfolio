import HighlightedText from "./HighlightedText";
import type { IHighlightedText } from "@/types/about.types";

interface Props {
  text: IHighlightedText;
}

const AboutQuote = ({ text }: Props) => {
  return (
    <blockquote className="border-l-3 border-status pl-5 text-2xl leading-snug font-semibold text-background dark:text-foreground md:pl-6 md:text-[1.75rem]">
      <HighlightedText text={text} />
    </blockquote>
  );
};

export default AboutQuote;
