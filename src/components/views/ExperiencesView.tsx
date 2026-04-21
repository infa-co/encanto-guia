import { useState } from "react";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { experiences, type Experience, chalet } from "@/data/chalet";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";

const ExperiencesView = () => {
  const [selected, setSelected] = useState<Experience | null>(null);

  if (selected) {
    return (
      <div className="-mx-4 -mt-4 animate-fade-up">
        <div className="relative h-[55vh] min-h-[380px] overflow-hidden hero-overlay">
          <img src={selected.image} alt={selected.name} className="absolute inset-0 h-full w-full object-cover" />
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 left-5 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-background/90 backdrop-blur shadow-card text-primary"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="absolute bottom-0 inset-x-0 z-10 p-5 text-primary-foreground">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">Experiência</p>
            <h1 className="mt-1 font-display text-3xl leading-tight text-balance">{selected.name}</h1>
          </div>
        </div>

        <div className="px-4 pt-6 space-y-5">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">A partir de</span>
            <span className="font-display text-3xl text-accent">{selected.price}</span>
          </div>

          <p className="text-[15px] leading-relaxed text-foreground/85">{selected.description}</p>

          <div className="flex items-start gap-3 rounded-xl bg-secondary/60 border border-border/60 p-4">
            <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-primary"><span className="font-semibold">Solicite com 1 dia de antecedência.</span> Confirme com o anfitrião pelo WhatsApp.</p>
          </div>

          <WhatsAppButton
            size="lg"
            className="w-full"
            message={`Olá! Gostaria de solicitar a experiência: ${selected.name} (${selected.price}).`}
            phone={chalet.whatsapp}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 animate-fade-up">
      <header className="pt-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5 text-accent" /> Curadoria do chalé
        </div>
        <h1 className="mt-3 font-display text-3xl text-primary leading-tight">Experiências exclusivas</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Toques especiais para tornar sua estadia memorável.</p>
      </header>

      <div className="grid gap-4">
        {experiences.map((exp) => (
          <article key={exp.id} className="group rounded-2xl bg-card overflow-hidden shadow-card border border-border/50">
            <div className="relative h-48 overflow-hidden">
              <img src={exp.image} alt={exp.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-3 right-3 rounded-full bg-background/95 backdrop-blur px-3 py-1.5 text-sm font-display text-accent shadow-card">
                {exp.price}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-display text-xl text-primary leading-tight">{exp.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{exp.short}</p>
              <button
                onClick={() => setSelected(exp)}
                className="mt-4 w-full inline-flex items-center justify-center rounded-full border border-primary/15 bg-secondary/60 hover:bg-secondary text-primary h-11 px-5 text-sm font-semibold transition active:scale-[0.99]"
              >
                Ver detalhes
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesView;
