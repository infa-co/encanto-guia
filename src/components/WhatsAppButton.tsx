import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { chalet } from "@/data/chalet";

interface Props {
  message?: string;
  phone?: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const WhatsAppButton = ({ message = "Olá! Estou no chalé e gostaria de fazer uma solicitação.", phone = chalet.whatsapp, label = "Solicitar via WhatsApp", className, size = "md" }: Props) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-[15px]",
    lg: "h-14 px-6 text-base",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold shadow-card hover:brightness-110 active:scale-[0.98] transition-all",
        sizes[size],
        className
      )}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} />
      {label}
    </a>
  );
};

export default WhatsAppButton;
