

## Ajustes na aba "Guia Local"

Dois ajustes na tela de redirecionamento ao parceiro:

### 1. Correção do nome
Trocar "Guia **de** Rancho Queimado" por "**Guia Rancho Queimado**" no título do hero e em qualquer outro lugar do app onde apareça. Atualizar também o campo `nome` em `parceiroGuia` (em `src/data/chalet.ts`).

### 2. Adicionar destaque do "Pacote Guia RQ"

Ótima ideia colocar o pacote nessa aba — ele complementa perfeitamente a apresentação do parceiro e dá um motivo concreto para o hóspede tocar no botão. Proposta de layout:

Logo abaixo do botão "Abrir Guia Completo" (e antes da nota de redirecionamento), adicionar um **card de oferta em destaque** com:

- Selo no topo: "🎒 Oferta exclusiva"
- Título: **Pacote Guia RQ**
- Subtítulo: "Viva o melhor de Rancho Queimado em um único pacote"
- Bloco de preço com destaque visual:
  - Valor riscado: ~~R$ 230~~
  - Valor grande dourado: **R$ 77**
  - Etiqueta: "em experiências"
- Botão secundário: **"Quero o pacote"** → abre o mesmo site do parceiro em nova aba (`https://guiaranchoqueimado.com.br/index.html`), já que a compra acontece lá

Visual: card com fundo `gradient-forest` (verde escuro), borda dourada (`accent`), preço em destaque com a cor cobre do app, mantendo coerência com o restante do design.

### Mudanças técnicas

**`src/data/chalet.ts`**
- Renomear `nome` de `parceiroGuia` para "Guia Rancho Queimado".
- Adicionar objeto `pacoteGuiaRQ`:
  ```ts
  pacoteGuiaRQ = {
    nome: "Pacote Guia RQ",
    descricao: "Viva o melhor de Rancho Queimado em um único pacote",
    precoOriginal: "R$ 230",
    precoPromocional: "R$ 77",
    url: "https://guiaranchoqueimado.com.br/index.html"
  }
  ```

**`src/components/views/ExperiencesView.tsx`**
- Corrigir título do hero para "Guia Rancho Queimado".
- Adicionar nova seção "card de pacote" entre o botão CTA e a nota de redirecionamento.
- Importar ícone `Backpack` (ou `Tag` / `Gift`) do lucide-react para o selo.

### Resultado para o hóspede

1. Abre a aba "Guia Local"
2. Vê hero "Guia Rancho Queimado" + grid de categorias
3. Vê o botão principal para abrir o guia completo
4. Logo abaixo, **encontra a oferta do Pacote RQ destacada** (R$ 230 → R$ 77) com botão direto
5. Toca → abre o site parceiro em nova aba

