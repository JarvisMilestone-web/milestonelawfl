export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-4xl md:text-5xl mb-4 ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? "text-white/70" : "text-ink/60"}`}>{subtitle}</p>
      )}
    </div>
  );
}
