

## Redirecionamento para o Guia Rancho Queimado

Atualmente a aba "Experiências" abre uma tela interna (`ExperiencesView`) com cards de experiências do chalé (Café Especial, Fondue, etc.). Você quer substituir isso por um redirecionamento ao site parceiro `https://guiaranchoqueimado.com.br/index.html`.

### Recomendação: abrir em nova aba (com tela de transição elegante)

Como é um site externo (parceiro), o ideal é **abrir em nova aba do navegador** preservando o app do hóspede aberto em segundo plano. Assim o hóspede não "perde" o guia do chalé e volta facilmente.

Para manter a experiência premium (e não ser só um link cru), proponho transformar a aba "Experiências" numa **tela de apresentação do parceiro**, com:

- Hero com imagem/gradiente da serra
- Selo "Parceiro oficial"
- Título: "Guia de Rancho Queimado"
- Texto curto: "Restaurantes, passeios, cervejarias, cafés e o melhor da região — selecionado pelo nosso parceiro."
- Botão grande dourado: **"Abrir Guia Completo"** → abre `https://guiaranchoqueimado.com.br/index.html` em nova aba (`target="_blank"`, `rel="noopener noreferrer"`)
- Pequeno aviso: "Você será direcionado ao site guiaranchoqueimado.com.br"

### Alternativas consideradas (e por que não)

1. **Redirecionar direto ao tocar na aba** — confuso, o usuário toca em "Experiências" no menu e some do app. Ruim.
2. **Abrir dentro de um iframe** — muitos sites bloqueiam iframe (X-Frame-Options) e quebra a experiência mobile.
3. **Manter as experiências antigas + adicionar link** — você disse que quer substituir, então removemos.

### Mudanças técnicas

**`src/data/chalet.ts`**
- Adicionar `parceiroGuia = { url: "https://guiaranchoqueimado.com.br/index.html", nome: "Guia Rancho Queimado" }` para fácil edição futura.
- Manter `experiences` no arquivo (caso queira reativar depois) ou remover — sugiro **manter comentado** para reuso.

**`src/components/views/ExperiencesView.tsx`**
- Reescrever completamente: remover lista de cards e estado de seleção.
- Nova tela única com hero (gradient-forest + imagem), título, descrição, botão CTA dourado e nota de redirecionamento.
- Usar ícones `ExternalLink` e `Sparkles` do lucide-react.
- Manter o padrão visual já usado no app (gradient-forest, accent dourado, animações `animate-fade-up`).

**`src/components/BottomNav.tsx`** (verificar)
- O label da aba pode continuar "Experiências" ou mudar para **"Guia Local"** / **"Descobrir"** para refletir melhor o conteúdo. Recomendo "Guia Local".

### Resultado para o hóspede

1. Toca em "Guia Local" no menu inferior
2. Vê uma tela bonita apresentando o parceiro
3. Toca em "Abrir Guia Completo" → nova aba abre com o site do parceiro
4. Fecha a aba e volta ao app do chalé sem perder contexto

