import type { IHighlightedText } from "@/types/about.types";

interface Props {
  text: IHighlightedText;
}

const HighlightedText = ({ text }: Props) => {
  return (
    <>
      {text.before}
      <span className="text-status">{text.highlight}</span>
      {text.after}
    </>
  );
};

export default HighlightedText;
