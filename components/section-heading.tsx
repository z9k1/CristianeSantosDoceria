type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">{eyebrow}</p> : null}
      <h2 className="mt-2 font-serifBrand text-3xl text-cocoa-800 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-cocoa-700 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}
