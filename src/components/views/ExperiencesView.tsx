import { ExternalLink, Sparkles, MapPin, Utensils, Mountain, Coffee, Backpack } from "lucide-react";
import { parceiroGuia, pacoteGuiaRQ } from "@/data/chalet";

const highlights = [
  { icon: Utensils, label: "Restaurantes" },
  { icon: Mountain, label: "Passeios" },
  { icon: Coffee, label: "Cafés" },
  { icon: MapPin, label: "Pontos turísticos" },
];

const ExperiencesView = () => {
  const open = () => window.open(parceiroGuia.url, "_blank", "noopener,noreferrer");
  const openPacote = () => window.open(pacoteGuiaRQ.url, "_blank", "noopener,noreferrer");

  return (
    <div className="-mx-4 -mt-4 animate-fade-up">
      {/* Hero */}
      <div className="relative h-[42vh] min-h-[320px] overflow-hidden gradient-forest hero-overlay">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.6),transparent_60%)]" />
        <div className="relative z-10 h-full flex flex-col justify-end p-6 text-primary-foreground">
          <div className="inline-flex self-start items-center gap-2 rounded-full bg-background/15 backdrop-blur-md border border-primary-foreground/20 px-3 py-1 text-[11px] font-semibold tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-accent-soft" /> Parceiro oficial
          </div>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-balance">Guia Rancho Queimado</h1>
          <p className="mt-2 text-sm text-primary-foreground/85 max-w-sm">
            O melhor da região, selecionado para você aproveitar cada momento da estadia.
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="px-4 pt-6 space-y-6">
        <p className="text-[15px] leading-relaxed text-foreground/85">
          Restaurantes, passeios, cervejarias, cafés e o melhor da serra catarinense —
          tudo reunido num guia completo feito pelo nosso parceiro.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl bg-card border border-border/60 p-3.5 shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-primary leading-tight">{label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={open}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-copper text-accent-foreground h-14 px-6 text-base font-semibold shadow-copper transition active:scale-[0.99]"
        >
          Abrir Guia Completo
          <ExternalLink className="h-5 w-5" />
        </button>

        {/* Card Pacote Guia RQ */}
        <div className="relative overflow-hidden rounded-3xl gradient-forest border border-accent/40 p-5 shadow-soft">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.7),transparent_60%)] pointer-events-none" />
          <div className="relative z-10 text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 px-3 py-1 text-[11px] font-semibold tracking-wide text-accent-soft">
              <Backpack className="h-3.5 w-3.5" /> Oferta exclusiva
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight">{pacoteGuiaRQ.nome}</h3>
            <p className="mt-1 text-sm text-primary-foreground/85">{pacoteGuiaRQ.descricao}</p>

            <div className="mt-4 flex items-end gap-3">
              <span className="text-sm text-primary-foreground/60 line-through">{pacoteGuiaRQ.precoOriginal}</span>
              <span className="font-display text-4xl text-accent-soft leading-none">{pacoteGuiaRQ.precoPromocional}</span>
              <span className="pb-1 text-[11px] uppercase tracking-wider text-primary-foreground/70">em experiências</span>
            </div>

            <button
              onClick={openPacote}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground h-12 px-5 text-sm font-semibold transition active:scale-[0.99]"
            >
              Quero o pacote
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Você será direcionado ao site <span className="font-medium text-foreground/80">{parceiroGuia.domain}</span>
        </p>
      </div>
    </div>
  );
};

export default ExperiencesView;
