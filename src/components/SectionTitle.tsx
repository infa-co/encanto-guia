interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}
const SectionTitle = ({ eyebrow, title, description }: Props) => (
  <header className="mb-4">
    {eyebrow && (
      <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-1.5">{eyebrow}</p>
    )}
    <h2 className="font-display text-2xl text-primary leading-tight">{title}</h2>
    {description && <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>}
  </header>
);
export default SectionTitle;
