import { useState } from "react";
import { ClipboardCheck, MessageCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { checklist, chalet } from "@/data/chalet";
import SectionTitle from "@/components/SectionTitle";

const CheckoutView = () => {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const total = checklist.length;
  const completed = Object.values(done).filter(Boolean).length;
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="space-y-6 animate-fade-up">
      <header className="pt-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-primary">
          <ClipboardCheck className="h-3.5 w-3.5 text-accent" /> Antes de partir
        </div>
        <h1 className="mt-3 font-display text-3xl text-primary leading-tight">Checklist de check-out</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Confira cada item para uma despedida tranquila. Check-out até as 11h.</p>
      </header>

      {/* Progresso */}
      <div className="rounded-2xl gradient-forest text-primary-foreground p-5 shadow-elegant">
        <div className="flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.2em] opacity-80">Progresso</p>
          <p className="font-display text-3xl">{completed}<span className="text-base opacity-70">/{total}</span></p>
        </div>
        <div className="mt-3 h-2 rounded-full bg-primary-foreground/15 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Lista */}
      <ul className="space-y-2.5">
        {checklist.map((item, i) => {
          const checked = !!done[i];
          return (
            <li key={i}>
              <label className={`flex items-start gap-3 rounded-2xl border p-4 cursor-pointer transition-all ${checked ? "bg-secondary/80 border-accent/40" : "bg-card border-border/50 shadow-soft"}`}>
                <Checkbox
                  checked={checked}
                  onCheckedChange={(v) => setDone((d) => ({ ...d, [i]: !!v }))}
                  className="mt-0.5 h-5 w-5 rounded-md border-primary/40 data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-accent-foreground"
                />
                <span className={`text-[15px] leading-snug ${checked ? "line-through text-muted-foreground" : "text-primary font-medium"}`}>
                  {item}
                </span>
              </label>
            </li>
          );

  );
};

export default CheckoutView;
