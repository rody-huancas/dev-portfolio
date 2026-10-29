interface Props {
  label: string;
}

const HeroBadge = ({ label }: Props) => {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-status/20 bg-status/8 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-status">
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status" />
      </span>
      <span>{label}</span>
    </div>
  );
};

export default HeroBadge;
