# JK Pinturas — Landing (variant 01 “Studio”)

Mockup hi-fi entregue como HTML estático. Use como **referência visual e estrutural** para a implementação.

## Conteúdo do pacote

```
handoff/
├── index.html        ← landing completa (era variant-1-studio.html)
├── shared.css        ← reset/variáveis/tipografia/utilitários compartilhados
└── assets/
    ├── jk-logo.png
    ├── renova-word.png        (lettering “Renová” — fundo transparente)
    └── tus-colores-brush.png  (lettering pintado “tus colores” — fundo transparente)
```

Abrir `index.html` direto no browser funciona — não há build step.

## Stack atual (mockup)

- HTML semântico em arquivo único.
- CSS em `<style>` inline + `shared.css`.
- JS em `<script>` inline (sem dependências).
- Fonts via Google Fonts CDN: **Bricolage Grotesque**, **Fraunces**, **Inter**, **Instrument Serif**, **Caveat Brush**, **Space Grotesk**, **JetBrains Mono**.
- i18n PT/ES feito por atributos `data-i18n` + dicionário inline.

## Estrutura da página

1. **Variant bar** (topo preto) — só para preview, **remover em produção**.
2. **Header editorial** — logo, nav, toggle PT/ES, CTA pill.
3. **Hero** — lettering “Renová tus colores” + leque de 10 cartelas de cor com parallax sutil no mouse.
4. **Color marquee + ticker** — faixas animadas de cor.
5. **Stats** — 4 indicadores (preenchidos por JS a partir do dicionário i18n).
6. **Linhas** — grid de produtos (preenchido por JS).
7. **Sobre/Empresa**.
8. **Vídeo** — placeholder 16:9, trocar pelo embed real.
9. **Marcas** — grid placeholder.
10. **Localização + Contato** — endereço, mapa placeholder, formulário.
11. **Footer**.
12. **FAB WhatsApp** flutuante.

## i18n

- Idioma default: **PT**.
- Texto: `data-i18n="chave"` no elemento + entrada em `dict.pt` e `dict.es` no `<script>` final.
- Atributos: `data-i18n-alt`, `data-i18n-placeholder` etc. (mesmo padrão).
- Toggle no header alterna a chave; a fn `applyLang(lang)` reescreve todo o DOM marcado.

## Pontos para o dev tratar antes de produção

- [ ] **Remover** a `<div class="variant-bar">` (topo preto).
- [ ] Substituir o sistema i18n inline pelo padrão do projeto (i18next, vue-i18n, gettext, etc.).
- [ ] Quebrar em componentes reutilizáveis (header, hero, footer, line-card, FAB…).
- [ ] Mover CSS para arquivos separados / pipeline (PostCSS / Sass / Tailwind — o que estiver no projeto).
- [ ] Otimizar imagens: servir **WebP/AVIF** + `srcset` + `loading="lazy"` em tudo abaixo do fold.
- [ ] Auto-hospedar fonts ou usar `font-display: swap` + `<link rel="preload">` nas críticas (Inter, Fraunces, Bricolage).
- [ ] Acessibilidade: revisar contraste (creme + navy ok; verificar cartelas escuras), foco visível em links/botões, `aria-label` no FAB e no toggle de idioma, ordem de leitura do hero (lettering vem antes do parágrafo — ok no DOM atual).
- [ ] SEO: `<title>`, `<meta name="description">`, Open Graph, favicon, schema.org `LocalBusiness` para o bloco de localização.
- [ ] Substituir links `wa.me/` pelo número real, embeds de mapa e vídeo, e fotos de marcas.
- [ ] Form de contato: ligar ao backend / serviço de e-mail; adicionar honeypot/captcha.
- [ ] Performance: o leque de cartelas usa `box-shadow` + `mix-blend-mode` + textura SVG inline — performante em desktop, mas teste em mobile mid-tier.

## Variantes irmãs (não inclusas neste pacote)

Existem mais duas variações de hero exploradas no mockup original (`variant-2-editorial.html`, `variant-3-industrial.html`). Esta entrega usa o **Studio** como base com o **hero do Editorial** já integrado.

## Contato design

Qualquer dúvida sobre intenção visual, espaçamento, hover states ou copy — é só chamar.
