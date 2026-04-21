// Conteúdo editável do app — facilita replicação para outros chalés.
import cafe from "@/assets/exp-cafe.jpg";
import cafefit from "@/assets/exp-cafefit.jpg";
import piquenique from "@/assets/exp-piquenique.jpg";
import fondue from "@/assets/exp-fondue.jpg";
import tabua from "@/assets/exp-tabua.jpg";

export const chalet = {
  name: "Chalé Encantos do Rancho",
  shortName: "Encantos do Rancho",
  location: "Rancho Queimado · SC",
  // Use o número do anfitrião com DDI/DDD (apenas dígitos)
  whatsapp: "5548999999999",
  instagram: "https://instagram.com/",
  mapsUrl: "https://maps.google.com/?q=Rancho+Queimado+SC",
  wifi: { ssid: "EncantosDoRancho", password: "natureza2024" },
};

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
    description: "Pães frescos, frutas da estação, frios selecionados, geleias artesanais e café especial coado na hora. Servido na varanda ou na sala, conforme sua preferência.",
    image: cafe,
  },
  {
    id: "cafe-fit",
    name: "Café Fit",
    price: "R$ 79",
    short: "Opção leve e nutritiva",
    description: "Bowl de iogurte com granola caseira, frutas frescas, ovos, pasta de amendoim, suco verde e café. Para começar o dia em equilíbrio.",
    image: cafefit,
  },
  {
    id: "piquenique",
    name: "Piquenique Romântico",
    price: "R$ 220",
    short: "Cesta completa para dois ao ar livre",
    description: "Cesta com queijos, frios, pães, frutas, espumante, taças e manta xadrez. Montamos no melhor mirante da propriedade ao pôr do sol.",
    image: piquenique,
  },
  {
    id: "fondue",
    name: "Fondue a Dois",
    price: "R$ 180",
    short: "Clássico fondue de queijo na lareira",
    description: "Fondue de queijo gruyère e emmental, pães, batatas e legumes. Acompanha taças e ambiente preparado próximo à lareira.",
    image: fondue,
  },
  {
    id: "tabua-frios",
    name: "Tábua de Frios",
    price: "R$ 145",
    short: "Seleção premium para harmonizar com vinho",
    description: "Queijos curados, charcutaria artesanal, castanhas, mel, geleias e torradinhas. Perfeita para o final de tarde com vinho.",
    image: tabua,
  },
];

export const orientacoes = [
  { icon: "Flame", title: "Calefator a Pellet", text: "Mantenha a porta fechada durante o uso. Ele opera no automático — não é necessário acrescentar pellets manualmente. Em caso de dúvida, chame pelo WhatsApp." },
  { icon: "Droplets", title: "Água Quente", text: "Aquecimento a gás. Espere de 30 a 60 segundos para a água esquentar. Mantenha a chama do aquecedor ligada durante a estadia." },
  { icon: "Waves", title: "Hidromassagem", text: "Encha completamente antes de ligar os jatos. Tempo recomendado de uso: 20 a 30 minutos. Não utilize sabão ou óleos dentro da banheira." },
  { icon: "Tv", title: "Controles", text: "Controles da TV, Smart, ar e calefator estão na gaveta do criado-mudo do quarto principal." },
];

export const comodidades = [
  { icon: "Flame", label: "Deck com lareira" },
  { icon: "BedDouble", label: "Cama king confortável" },
  { icon: "Waves", label: "Hidromassagem" },
  { icon: "Trees", label: "Vista para natureza" },
  { icon: "Wifi", label: "Wi-Fi de alta velocidade" },
  { icon: "Coffee", label: "Cozinha equipada" },
];

export const regras = [
  "Check-out até as 11h",
  "Não colocar objetos sobre o calefator",
  "Não é permitido fumar dentro do chalé",
  "Eventos e festas não são permitidos",
  "Animais somente com autorização prévia",
];

export const checklist = [
  "Verificar se o calefator está desligado",
  "Desligar a hidromassagem e os jatos",
  "Apagar todas as luzes e velas",
  "Conferir itens pessoais e documentos",
  "Trancar portas e janelas",
  "Deixar a chave sobre a mesa da sala",
];

export const parceiros = [
  { name: "Restaurante Serra Mar", phone: "(48) 3275-0000", whatsapp: "5548999000001", tag: "Comida regional" },
  { name: "Pizzaria do Rancho", phone: "(48) 3275-0001", whatsapp: "5548999000002", tag: "Pizza · Delivery" },
  { name: "Mercado Central", phone: "(48) 3275-0002", whatsapp: "5548999000003", tag: "Mercado · Bebidas" },
];

export const emergencia = [
  { icon: "Shield", label: "Polícia Militar", number: "190" },
  { icon: "Ambulance", label: "SAMU", number: "192" },
  { icon: "Flame", label: "Bombeiros", number: "193" },
];
