import { useState } from "react";
import { toast } from "sonner";
import {
  Wifi, Copy, Check, MapPin, Phone, Instagram, Shield, Ambulance, Flame,
  Droplets, Waves, Tv, BedDouble, Trees, Coffee, MessageCircle, Sparkles,
  ArrowRight, Clock, Home as HomeIcon, AlertTriangle, Ban, Send, Truck, ChevronDown,
  Wind, Mountain, Beef,
} from "lucide-react";
import heroImg from "@/assets/chalet-hero.jpg";
import logoImg from "@/assets/chalet-logo.jpg";
import { chalet, chalesUnidades, orientacoes, comodidades, regras, parceiros, emergencia } from "@/data/chalet";

const iconMap: Record<string, typeof Flame> = {
  Flame, Droplets, Waves, Tv, BedDouble, Trees, Wifi, Coffee, Shield, Ambulance,
  Wind, Mountain, Beef,
};

interface Props { onGoToExperiences: () => void; }

const HomeView = ({ onGoToExperiences }: Props) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [openOrient, setOpenOrient] = useState<string | null>(orientacoes[0]?.title ?? null);

  const copyText = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
    toast.success("Copiado!");
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* HERO */}
      <section className="relative -mx-4 -mt-4 gradient-forest text-primary-foreground overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--accent) / 0.6) 1px, transparent 1px), radial-gradient(hsl(var(--accent-soft) / 0.4) 1px, transparent 1px)",
            backgroundSize: "42px 42px, 28px 28px",
            backgroundPosition: "0 0, 14px 14px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-14 pb-10">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/40 bg-primary-foreground backdrop-blur-sm shadow-copper overflow-hidden">
            <img src={logoImg} alt="Logo O Chalé Encantado" className="h-full w-full object-contain p-1" />
          </div>

          <h1 className="mt-5 font-display text-[2.4rem] leading-[1.05] tracking-wide">
            O CHALÉ<br />ENCANTADO
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-accent-soft">
            {chalet.location}
          </p>

          <div className="mt-8 flex items-center gap-3 w-full max-w-[220px]">
            <span className="h-px flex-1 bg-accent/40" />
            <span className="text-accent text-lg leading-none">⌂</span>
            <span className="h-px flex-1 bg-accent/40" />
          </div>

          <h2 className="mt-6 font-display text-2xl leading-snug text-balance">
            Bem-vindo ao <em className="not-italic text-accent">Chalé Encantado</em>
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-primary-foreground/80 max-w-[34ch]">
            Seu guia completo de hospedagem. Toque no chalé abaixo para explorar tudo.
          </p>
        </div>

        {/* CHALET CARD interativo */}
        <div className="relative z-10 px-4 pb-8">
          <button
            onClick={onGoToExperiences}
            className="group block w-full overflow-hidden rounded-3xl border border-accent/40 bg-primary/40 backdrop-blur-sm shadow-elegant active:scale-[0.99] transition-all"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={heroImg} alt="O Chalé Encantado" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-3 right-3 rounded-full bg-primary/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest border border-accent/40">
                Rancho Queimado · SC
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            </div>
            <div className="px-5 pt-3 pb-5 text-center">
              <h3 className="font-display text-2xl text-primary-foreground">O Chalé Encantado</h3>
              <p className="mt-1 text-xs text-primary-foreground/75 flex items-center justify-center gap-1.5">
                <MapPin className="h-3 w-3 text-accent" /> Queimada Grande · Rancho Queimado
              </p>
              <p className="mt-3 text-[13px] text-accent inline-flex items-center gap-1.5 font-medium">
                Toque para explorar <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </div>
          </button>
        </div>
      </section>

      {/* WI-FI — card escuro */}
      <section className="rounded-3xl gradient-forest text-primary-foreground p-5 shadow-elegant border border-accent/20">
        <div className="flex items-center gap-2 text-sm font-display">
          <Wifi className="h-4 w-4 text-accent" /> Wi-Fi
        </div>
        <div className="mt-4 space-y-2.5">
          <button
            onClick={() => copyText(chalet.wifi.ssid, "ssid")}
            className="w-full flex items-center justify-between rounded-2xl bg-primary-foreground/5 border border-accent/20 px-4 py-3 active:scale-[0.99] transition"
          >
            <span className="text-xs uppercase tracking-widest opacity-70">Rede</span>
            <span className="flex items-center gap-2">
              <span className="font-mono text-sm">{chalet.wifi.ssid}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
                {copiedSsid ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </span>
            </span>
          </button>
          <button
            onClick={() => copyText(chalet.wifi.password, "pwd")}
            className="w-full flex items-center justify-between rounded-2xl bg-primary-foreground/5 border border-accent/20 px-4 py-3 active:scale-[0.99] transition"
          >
            <span className="text-xs uppercase tracking-widest opacity-70">Senha</span>
            <span className="flex items-center gap-2">
              <span className="font-mono text-sm">{chalet.wifi.password}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
                {copiedPwd ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* LOCALIZAÇÃO — card escuro */}
      <section className="rounded-3xl gradient-forest text-primary-foreground p-5 shadow-elegant border border-accent/20">
        <div className="flex items-center gap-2 text-sm font-display">
          <MapPin className="h-4 w-4 text-accent" /> Localização
        </div>
        <h3 className="mt-3 font-display text-xl">Rancho Queimado, SC</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-primary-foreground/80">
          O chalé fica a 15 minutos do centro de Rancho Queimado, em estrada parcialmente asfaltada. Recomendamos chegar antes do entardecer no primeiro dia. Salve a rota offline.
        </p>
        <a
          href={chalet.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full border border-accent/50 bg-primary-foreground/5 h-12 px-5 text-sm font-semibold active:scale-[0.99] transition"
        >
          <Send className="h-4 w-4 text-accent" /> Abrir no Google Maps
        </a>
      </section>

      {/* COMODIDADES — card escuro com grid */}
      <section className="rounded-3xl gradient-forest text-primary-foreground p-5 shadow-elegant border border-accent/20">
        <div className="flex items-center gap-2 text-sm font-display">
          <HomeIcon className="h-4 w-4 text-accent" /> Comodidades
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {comodidades.map((c) => {
            const Icon = iconMap[c.icon] || Flame;
            return (
              <div key={c.label} className="rounded-2xl bg-primary-foreground/5 border border-accent/20 p-4 flex flex-col items-center text-center gap-2 min-h-[110px] justify-center">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <p className="text-xs font-medium leading-snug">{c.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ORIENTAÇÕES — card único agrupado */}
      <section className="rounded-3xl gradient-forest text-primary-foreground p-5 shadow-elegant border border-accent/20">
        <div className="flex items-center gap-2 text-sm font-display">
          <Sparkles className="h-4 w-4 text-accent" /> Orientações de Uso
        </div>
        <div className="mt-4 divide-y divide-accent/15">
          {orientacoes.map((o) => {
            const Icon = iconMap[o.icon] || Flame;
            const isOpen = openOrient === o.title;
            return (
              <div key={o.title} className="py-1">
                <button
                  onClick={() => setOpenOrient(isOpen ? null : o.title)}
                  className="w-full flex items-center justify-between gap-3 py-3 text-left active:opacity-80 transition"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2 text-accent">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                    <span className="font-display text-base text-primary-foreground">{o.title}</span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-3" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13px] leading-relaxed text-primary-foreground/80 pl-6">{o.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* REGRAS — cards vermelhos */}
      <section>
        <div className="flex items-center gap-2 text-sm font-display text-primary mb-3 px-1">
          <Ban className="h-4 w-4 text-destructive" /> Regras da Casa
        </div>
        <div className="space-y-2.5">
          {regras.map((r, i) => (
            <div key={r} className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-destructive">{r}</p>
                  <p className="mt-1 text-xs text-destructive/80 leading-relaxed">
                    {i === 0 && "Por favor, respeite o horário para que possamos preparar o chalé para os próximos hóspedes."}
                    {i === 1 && "Por segurança, nunca coloque roupas ou objetos sobre o calefator a pellet."}
                    {i === 2 && "O cheiro permanece e prejudica a experiência dos próximos hóspedes."}
                    {i === 3 && "Mantenha a tranquilidade do ambiente e respeite a vizinhança."}
                    {i === 4 && "Entre em contato com antecedência para verificarmos a possibilidade."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERY / PARCEIROS — card escuro */}
      <section className="rounded-3xl gradient-forest text-primary-foreground p-5 shadow-elegant border border-accent/20">
        <div className="flex items-center gap-2 text-sm font-display">
          <Truck className="h-4 w-4 text-accent" /> Delivery
        </div>
        <div className="mt-4 space-y-2.5">
          {parceiros.map((p) => (
            <article key={p.name} className="flex items-center gap-3 rounded-2xl bg-primary-foreground/5 border border-accent/25 p-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-copper text-accent-foreground font-display text-lg">
                {p.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-primary-foreground truncate">{p.name}</h3>
                <p className="text-xs text-primary-foreground/70">{p.phone}</p>
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
        <div className="flex items-center gap-2 text-sm font-display text-primary mb-3 px-1">
          <Shield className="h-4 w-4 text-destructive" /> Emergência
        </div>
        <div className="grid grid-cols-3 gap-3">
          {emergencia.map((e) => {
            const Icon = iconMap[e.icon] || Shield;
            return (
              <a key={e.label} href={`tel:${e.number}`} className="rounded-2xl bg-card border border-border/50 p-4 shadow-soft flex flex-col items-center text-center gap-2 active:scale-95 transition">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
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
        <div className="rounded-3xl gradient-forest text-primary-foreground p-6 text-center shadow-elegant border border-accent/20">
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
