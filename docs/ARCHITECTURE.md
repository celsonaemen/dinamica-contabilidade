# Arquitetura - Dinâmica Contabilidade

## Direção Técnica

O projeto deve ser implementado como um site Next.js 15 com App Router, TypeScript, TailwindCSS e componentes reutilizáveis.

A arquitetura deve separar rotas, seções, componentes de layout, lógica de captura de leads e dados de conteúdo sem criar complexidade desnecessária para a primeira versão.

## Estrutura Recomendada

```text
src/
  app/
    layout.tsx
    page.tsx
    servicos/
      page.tsx
    sobre/
      page.tsx
    contato/
      page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Stats.tsx
      Services.tsx
      Benefits.tsx
      Process.tsx
      Testimonials.tsx
      FAQ.tsx
      FinalCTA.tsx
    ui/
      Button.tsx
      Card.tsx
  features/
    lead-capture/
      ContactForm.tsx
      whatsapp.ts
  hooks/
  lib/
    constants.ts
    metadata.ts
    utils.ts
  types/
    content.ts
  styles/
    globals.css
public/
  logo.png
docs/
  PRD.md
  ARCHITECTURE.md
  DESIGN_SYSTEM.md
.ai/
  skills/
    dinamica-contabilidade/
      SKILL.md
```

## Rotas

Rotas iniciais:

- `/` - Home.
- `/servicos` - Página de serviços.
- `/sobre` - Página institucional.
- `/contato` - Página de contato.

Usar `src/app` para rotas, layouts, metadata e composição de páginas.

Preferir Server Components por padrão. Usar Client Components apenas para formulário, menu mobile, FAQ interativo ou animações que dependam do navegador.

## Camada de Componentes

`src/components/layout`:

- Header.
- Footer.
- Elementos compartilhados de navegação.

`src/components/sections`:

- Hero.
- Stats.
- Services.
- Benefits.
- Process.
- Testimonials.
- FAQ.
- FinalCTA.

`src/components/ui`:

- Button.
- Card.
- Input.
- Textarea.
- Badge.
- Outros componentes base, preferencialmente alinhados ao padrão Shadcn/UI.

Não colocar cards dentro de cards. Usar cards para itens repetidos, depoimentos, serviços, FAQ e superfícies de formulário.

## Features

`src/features/lead-capture` deve concentrar a lógica de captura de leads.

Responsabilidades:

- Componente de formulário.
- Helper de link do WhatsApp.
- Mensagem padrão codificada.
- Futuro ponto de integração com analytics ou backend.

O helper de WhatsApp deve centralizar:

- Número de telefone.
- Mensagem padrão.
- Encoding da URL.
- Rótulos de CTA se tracking for adicionado.

## Dados e Conteúdo

Usar arrays tipados para conteúdos repetidos:

- Serviços.
- Benefícios.
- Passos do processo.
- FAQ.
- Depoimentos.
- Estatísticas.

Conteúdo pequeno pode ficar próximo do componente. Conteúdo compartilhado deve ir para `src/lib/constants.ts` ou futura pasta `src/content`.

## Convenções TypeScript

- Componentes: PascalCase.
- Funções e variáveis: camelCase.
- Rotas: kebab-case quando houver mais de uma palavra.
- Types e interfaces: PascalCase.
- Evitar `any`.
- Tipar estruturas exportadas.

## Estilos

Usar TailwindCSS com tokens derivados de `docs/DESIGN_SYSTEM.md`.

Definir dimensões estáveis para:

- Botões.
- Cards.
- Ícones.
- Grids.
- Imagens.
- Blocos de estatística.

Não escalar fonte diretamente com largura de viewport. Usar breakpoints responsivos e tamanhos definidos.

## Performance

- Usar `next/image` quando aplicável.
- Definir dimensões de imagens para evitar layout shift.
- Evitar animações pesadas acima da dobra.
- Usar Framer Motion apenas quando houver ganho real de clareza ou refinamento.
- Evitar scripts terceiros desnecessários.

## SEO

Implementar:

- Metadata API.
- Open Graph.
- URLs canônicas.
- Sitemap.
- Robots.txt.
- Schema.org para negócio local ou serviço contábil quando houver dados suficientes.

Cada página deve ter um único H1 e hierarquia clara de headings.

## Acessibilidade

- HTML semântico.
- Navegação por teclado.
- Estados de foco visíveis.
- Alt text descritivo.
- Contraste adequado.
- Não depender apenas de cor para transmitir informação.
