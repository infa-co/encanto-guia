import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import heroImg from "@/assets/chalet-hero.jpg";
import { chalet, orientacoes, comodidades, regras } from "@/data/chalet";
import SectionTitle from "@/components/SectionTitle";
import { Wifi, Copy, Check, MapPin as MapPinIcon, Phone, Instagram, Shield, Ambulance, Flame, Droplets, Waves, Tv, BedDouble, Trees, Coffee, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { parceiros, emergencia } from "@/data/chalet";

const iconMap: Record<string, typeof Flame> = {
  Flame, Droplets, Waves, Tv, BedDouble, Trees, Wifi, Coffee, Shield, Ambulance,
};

interface Props { onGoToExperiences: () => void; }

const HomeView = ({ onGoToExperiences }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyWifi = async () => {
    await navigator.clipboard.writeText(chalet.wifi.password);
    setCopied(true);
    toast.success("Senha copiada!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 animate-fade-up">
      {/* HERO IMERSIVO — fundo verde escuro full-bleed */}
      <section className="relative -mx-4 -mt-4 gradient-forest text-primary-foreground overflow-hidden">
        {/* textura sutil de pontos dourados */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--accent) / 0.6) 1px, transparent 1px), radial-gradient(hsl(var(--accent-soft) / 0.4) 1px, transparent 1px)",
            backgroundSize: "42px 42px, 28px 28px",
            backgroundPosition: "0 0, 14px 14px",
          }}
        />
        {/* glow dourado no topo */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-14 pb-12 min-h-[88vh]">
          {/* MONOGRAMA */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/50 bg-primary/30 backdrop-blur-sm shadow-copper">
            <span className="font-display text-3xl text-accent leading-none">ER</span>
          </div>

          {/* NOME */}
          <h1 className="mt-5 font-display text-[2.4rem] leading-[1.05] tracking-wide">
            ENCANTOS<br />DO RANCHO
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-accent-soft">
            Chalé de luxo · {chalet.location}
          </p>

          {/* DIVISOR DECORATIVO */}
          <div className="mt-10 flex items-center gap-3 w-full max-w-[220px]">
            <span className="h-px flex-1 bg-accent/40" />
            <span className="text-accent text-lg leading-none">⌂</span>
            <span className="h-px flex-1 bg-accent/40" />
          </div>

          {/* WELCOME */}
          <h2 className="mt-8 font-display text-2xl leading-snug text-balance">
            Bem-vindo ao <em className="not-italic text-accent">Encantos do Rancho</em>
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-primary-foreground/80 max-w-[34ch]">
            Este é o seu guia completo da hospedagem. Aqui você encontra instruções, experiências e tudo para aproveitar ao máximo sua estadia.
          </p>

          {/* BOTÃO PÍLULA com ornamentos */}
          <button
            onClick={onGoToExperiences}
            className="mt-9 group inline-flex items-center gap-3 rounded-full border border-accent/60 bg-primary/40 backdrop-blur-sm px-7 h-14 text-primary-foreground hover:bg-accent hover:border-accent transition-all active:scale-[0.98] shadow-copper"
          >
            <Sparkles className="h-4 w-4 text-accent group-hover:text-accent-foreground" strokeWidth={1.5} />
            <span className="font-display text-lg tracking-wide">Ver experiências</span>
            <Sparkles className="h-4 w-4 text-accent group-hover:text-accent-foreground" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* ORIENTAÇÕES */}
      <section>
        <SectionTitle eyebrow="Como usar" title="Orientações de uso" />
        <div className="grid gap-3">
          {orientacoes.map((o) => {
            const Icon = iconMap[o.icon] || Flame;
            return (
              <article key={o.title} className="rounded-2xl bg-card border border-border/50 p-4 shadow-soft">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-forest text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-primary leading-tight">{o.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{o.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* WI-FI */}
      <section>
        <SectionTitle eyebrow="Conectividade" title="Wi-Fi" />
        <div className="rounded-2xl gradient-forest text-primary-foreground p-5 shadow-elegant">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-80">
            <Wifi className="h-4 w-4" /> Rede
          </div>
          <p className="mt-1 font-display text-2xl">{chalet.wifi.ssid}</p>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-primary-foreground/10 backdrop-blur px-4 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Senha</p>
              <p className="font-mono text-base mt-0.5">{chalet.wifi.password}</p>
            </div>
            <button
              onClick={copyWifi}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3.5 py-2 text-xs font-semibold shadow-copper active:scale-95 transition"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section>
        <SectionTitle eyebrow="Como chegar" title="Localização" />
        <div className="rounded-2xl bg-card border border-border/50 p-5 shadow-soft">
          <p className="text-sm text-foreground/80 leading-relaxed">
            O chalé fica a 15 minutos do centro de Rancho Queimado, em estrada parcialmente asfaltada. Recomendamos chegar antes do entardecer no primeiro dia.
          </p>
          <a
            href={chalet.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground h-12 px-5 font-semibold shadow-card active:scale-[0.99] transition"
          >
            <MapPinIcon className="h-4 w-4" /> Abrir no Google Maps
          </a>
        </div>
      </section>

      {/* COMODIDADES */}
      <section>
        <SectionTitle eyebrow="O que você encontra" title="Comodidades" />
        <div className="grid grid-cols-2 gap-3">
          {comodidades.map((c) => {
            const Icon = iconMap[c.icon] || Flame;
            return (
              <div key={c.label} className="rounded-2xl bg-card border border-border/50 p-4 shadow-soft flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="text-sm font-medium leading-snug text-primary">{c.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REGRAS */}
      <section>
        <SectionTitle eyebrow="Importante" title="Regras da casa" />
        <div className="space-y-2">
          {regras.map((r) => (
            <div key={r} className="rounded-xl border border-destructive/25 bg-destructive-soft px-4 py-3 text-sm text-destructive font-medium">
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* PARCEIROS */}
      <section>
        <SectionTitle eyebrow="Delivery & parceiros" title="Onde pedir" />
        <div className="space-y-2.5">
          {parceiros.map((p) => (
            <article key={p.name} className="flex items-center gap-3 rounded-2xl bg-card border border-border/50 p-3 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-copper text-accent-foreground font-display text-xl">
                {p.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-primary truncate">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.tag} · {p.phone}</p>
              </div>
              <a
                href={`https://wa.me/${p.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-whatsapp text-whatsapp-foreground shadow-card active:scale-95"
                aria-label={`WhatsApp ${p.name}`}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EMERGÊNCIA */}
      <section>
        <SectionTitle eyebrow="Em caso de necessidade" title="Emergência" />
        <div className="grid grid-cols-3 gap-3">
          {emergencia.map((e) => {
            const Icon = iconMap[e.icon] || Shield;
            return (
              <a key={e.label} href={`tel:${e.number}`} className="rounded-2xl bg-card border border-border/50 p-4 shadow-soft flex flex-col items-center text-center gap-2 active:scale-95 transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive-soft text-destructive">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-semibold text-primary leading-tight">{e.label}</p>
                <p className="font-display text-xl text-accent leading-none">{e.number}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* SOCIAL */}
      <section>
        <div className="rounded-2xl gradient-forest text-primary-foreground p-6 text-center shadow-elegant">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">Compartilhe a experiência</p>
          <h3 className="mt-1 font-display text-2xl">Siga a gente</h3>
          <p className="mt-1 text-sm opacity-85">Marque @encantosdorancho nos seus stories.</p>
          <a
            href={chalet.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground h-11 px-5 font-semibold shadow-copper active:scale-95 transition"
          >
            <Instagram className="h-4 w-4" /> Abrir Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
