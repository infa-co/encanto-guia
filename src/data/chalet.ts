// Conteúdo editável do app — facilita replicação para outros chalés.
import cafe from "@/assets/exp-cafe.jpg";
import cafefit from "@/assets/exp-cafefit.jpg";
import piquenique from "@/assets/exp-piquenique.jpg";
import fondue from "@/assets/exp-fondue.jpg";
import tabua from "@/assets/exp-tabua.jpg";

export const chalet = {
  name: "O Chalé Encantado",
  shortName: "Chalé Encantado",
  location: "Queimada Grande · Rancho Queimado · SC",
  // Use o número do anfitrião com DDI/DDD (apenas dígitos)
  whatsapp: "5548991107533",
  instagram: "https://www.instagram.com/ochaleranchoqueimado",
  mapsUrl: "https://maps.app.goo.gl/xEzkDjpFid6Y5Gbp8",
  // Compatibilidade — primeiro chalé como padrão
  wifi: { ssid: "chale 01 encantado", password: "encantado" },
};

export const parceiroGuia = {
  nome: "Guia Rancho Queimado",
  url: "https://guiaranchoqueimado.com.br/index.html",
  domain: "guiaranchoqueimado.com.br",
};

export const pacoteGuiaRQ = {
  nome: "Pacote Guia RQ",
  descricao: "Viva o melhor de Rancho Queimado em um único pacote",
  precoOriginal: "R$ 230",
  precoPromocional: "R$ 77",
  url: "https://guiaranchoqueimado.com.br/pages/resumo.html?pacote=rancho-completo",
};

export const chalesUnidades = [
  { nome: "Chalé Pomar", ssid: "chale 01 encantado", senha: "encantado" },
  { nome: "Chalé Bosque", ssid: "chale 02 ap360", senha: "88026612" },
];

export type Experience = {
  id: string;
  name: string;
  price: string;
  short: string;
  description: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    id: "cafe-especial",
    name: "Café Especial",
    price: "R$ 89",
    short: "Café da manhã artesanal servido no chalé",
    description:
      "Pães frescos, frutas da estação, frios selecionados, geleias artesanais e café especial coado na hora. Servido na varanda ou na sala, conforme sua preferência.",
    image: cafe,
  },
  {
    id: "cafe-fit",
    name: "Café Fit",
    price: "R$ 79",
    short: "Opção leve e nutritiva",
    description:
      "Bowl de iogurte com granola caseira, frutas frescas, ovos, pasta de amendoim, suco verde e café. Para começar o dia em equilíbrio.",
    image: cafefit,
  },
  {
    id: "piquenique",
    name: "Piquenique Romântico",
    price: "R$ 220",
    short: "Cesta completa para dois ao ar livre",
    description:
      "Cesta com queijos, frios, pães, frutas, espumante, taças e manta xadrez. Montamos no melhor mirante da propriedade ao pôr do sol.",
    image: piquenique,
  },
  {
    id: "fondue",
    name: "Fondue a Dois",
    price: "R$ 180",
    short: "Clássico fondue de queijo na lareira",
    description:
      "Fondue de queijo gruyère e emmental, pães, batatas e legumes. Acompanha taças e ambiente preparado próximo à lareira.",
    image: fondue,
  },
  {
    id: "tabua-frios",
    name: "Tábua de Frios",
    price: "R$ 145",
    short: "Seleção premium para harmonizar com vinho",
    description:
      "Queijos curados, charcutaria artesanal, castanhas, mel, geleias e torradinhas. Perfeita para o final de tarde com vinho.",
    image: tabua,
  },
];

export const orientacoes = [
  {
    icon: "Flame",
    title: "Lareira",
    text: "As instruções de uso da lareira estão disponíveis via QR Code dentro do chalé. Em caso de dúvida, chame pelo WhatsApp.",
  },
  {
    icon: "Waves",
    title: "Hidromassagem",
    text: "As instruções de uso da hidromassagem estão disponíveis via QR Code dentro do chalé. Encha completamente antes de ligar os jatos.",
  },
  {
    icon: "Droplets",
    title: "Água Quente",
    text: "Pode levar cerca de 40 segundos para a água começar a aquecer. Mantenha a chama do aquecedor ligada durante a estadia.",
  },
  { icon: "Tv", title: "TV / Controles", text: "Os controles da TV estão no móvel em frente à TV." },
];

export const comodidades = [
  { icon: "Waves", label: "Hidromassagem" },
  { icon: "Flame", label: "Lareira" },
  { icon: "Wind", label: "Ar-condicionado" },
  { icon: "Coffee", label: "Cozinha equipada" },
  { icon: "Trees", label: "Deck / área externa" },
  { icon: "Mountain", label: "Vista para natureza" },
  { icon: "Beef", label: "Churrasqueira" },
];

export const regras = [
  "Check-in a partir das 14h",
  "Check-out até as 11h",
  "Não é permitido fumar dentro do chalé",
  "Respeitar o silêncio após as 22h",
  "Não colocar objetos sobre o calefator/lareira",
  "Eventos e festas não são permitidos",
];

export const checklist = [
  "Desligar a lareira",
  "Desligar a hidromassagem e os jatos",
  "Desligar o ar-condicionado",
  "Apagar todas as luzes",
  "Retirar o lixo",
  "Conferir pertences pessoais",
];

export const parceiros = [
  
  { name: "Pizzaria Forno e Serra", phone: "(48) 999128424", whatsapp: "5548999128424", tag: "Pizza · Delivery" },
  );

export const emergencia = [
  { icon: "Shield", label: "Polícia Militar", number: "190" },
  { icon: "Ambulance", label: "SAMU", number: "192" },
  { icon: "Flame", label: "Bombeiros", number: "193" },
];
