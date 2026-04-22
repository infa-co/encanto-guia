import { Home, ClipboardCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type Tab = "inicio" | "checkout" | "experiencias";

const items: { id: Tab; label: string; icon: typeof Home }[] = [
  { id: "inicio", label: "Início", icon: Home },
  { id: "experiencias", label: "Guia Local", icon: Sparkles },
  { id: "checkout", label: "Checkout", icon: ClipboardCheck },
];

interface Props {
  active: Tab;
  onChange: (t: Tab) => void;
}

const BottomNav = ({ active, onChange }: Props) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto max-w-md px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <ul className="grid grid-cols-3 gap-1">
          {items.map(({ id, label, icon: Icon }) => {
            const isActive = id === active;
            return (
              <li key={id}>
                <button
                  onClick={() => onChange(id)}
                  className={cn(
                    "group w-full flex flex-col items-center gap-1 rounded-xl py-2.5 transition-all",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={cn(
                    "flex h-10 w-12 items-center justify-center rounded-full transition-all",
                    isActive ? "bg-primary text-primary-foreground shadow-card" : "bg-transparent"
                  )}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className={cn("text-[11px] tracking-wide", isActive && "font-semibold")}>{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default BottomNav;
