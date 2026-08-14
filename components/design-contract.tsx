const CONTRACT = `
THESIS: não é um site genérico de floricultura — é a réplica fiel do preview que a própria Flora Garden já aprovou no Lovable, com dados reais de Pato Branco no lugar dos placeholders.
OWN-WORLD: fundo creme quase-branco, verde-sálvia como cor de marca (CTAs, ícones, texto de apoio), um acento dourado nas estrelas/detalhes; display Cormorant Garamond (itálico nas palavras-chave), corpo Jost em versalete espaçado na navegação.
STORY: quem chega pelo Instagram reconhece a loja em segundos (fotos reais, endereço real, WhatsApp real) e decide entre pedir pelo WhatsApp ou visitar a Av. Tupi.
FIRST VIEWPORT: hero cheio com foto real da estufa da loja sob véu creme, logo circular centralizado, headline serifada com "as palavras" em itálico, dois CTAs em pílula (WhatsApp sólido, Visitar loja contornado), folhas SVG flutuando nas laterais.
FORM: direção fixada pelo usuário (brief-pinned) — réplica do Lovable preview qQqxM3ozGjB4mRIvezrnChEgZkPz5KjH, sem sorteio de concept-seed.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`;

export function DesignContract() {
  return (
    <div
      aria-hidden="true"
      suppressHydrationWarning
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: `<!--${CONTRACT}-->` }}
    />
  );
}
