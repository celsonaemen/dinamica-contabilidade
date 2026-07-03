# Design System - Dinâmica Contabilidade

## Posicionamento Visual

A Dinâmica Contabilidade deve parecer profissional, organizada, moderna e consultiva.

O visual precisa transmitir segurança e clareza, sem perder proximidade humana.

## Paleta Principal

### Primary

`#0B1E7A`

Usar em:

- CTAs principais.
- Destaques de navegação.
- Ícones importantes.
- Estados ativos.
- Momentos fortes de marca.

### Secondary

`#B89B5E`

Usar em:

- Acentos premium.
- Pequenos destaques.
- Detalhes de ícones.
- Divisores discretos.
- Marcadores de confiança.

Evitar usar dourado em textos longos sobre fundo branco, pois o contraste pode ficar fraco.

### Neutros

- `#FFFFFF` - fundo principal.
- `#F8FAFC` - fundo suave de seção.
- `#E5E7EB` - bordas.
- `#CBD5E1` - divisores e bordas secundárias.
- `#64748B` - texto secundário.
- `#111827` - texto principal.

## Tipografia

Fontes recomendadas:

- Headings: Poppins.
- Body: Inter.

Headings:

- Claros, compactos e confiáveis.
- Usar hierarquia forte sem exagerar no tamanho em cards e painéis.

Body:

- Parágrafos curtos.
- Linguagem orientada a benefício.
- Pouco jargão.

## Layout

Container:

- Largura máxima: `1280px`.
- Padding horizontal: `24px` mobile, `32px` tablet, `40px` desktop.

Espaçamento de seções:

- Desktop: `80px`.
- Mobile: `48px`.

Grids:

- 1 coluna no mobile.
- 2 colunas no tablet quando fizer sentido.
- 3 colunas no desktop para serviços e diferenciais.

## Botões

### Botão Primário

- Background: `#0B1E7A`.
- Texto: `#FFFFFF`.
- Border radius: `12px`.
- Ícone: Lucide quando ajudar o reconhecimento da ação.
- Hover: primary levemente mais escuro e elevação sutil.

Textos:

- Falar com um Especialista.
- Solicitar Proposta.

### Botão Secundário

- Background: `#FFFFFF`.
- Border: `#0B1E7A`.
- Texto: `#0B1E7A`.
- Border radius: `12px`.
- Hover: leve tint azul.

## Cards

Usar cards para:

- Serviços.
- Diferenciais.
- Depoimentos.
- FAQ.
- Formulários.

Estilo:

- Background: `#FFFFFF`.
- Radius: `16px`.
- Border: `1px solid #E5E7EB`.
- Shadow suave.
- Hover com pequeno `translateY`, sem animação agressiva.

Não colocar cards dentro de cards.

## Ícones

Usar Lucide React.

Direção:

- Traço consistente.
- Tamanho padronizado.
- Primary ou secondary.
- Rótulo textual quando o significado não for óbvio.

## Movimento

Usar Framer Motion com moderação.

Tempo:

- Duração: `0.2s` a `0.4s`.
- Easing suave.

Bons usos:

- Entrada sutil de seções.
- Hover de cards.
- FAQ expand/collapse.

Evitar:

- Parallax excessivo.
- Loops chamativos.
- Hero pesado.
- Animações que prejudiquem performance.

## Imagens

Usar primeiro os assets reais da marca.

Logo atual:

`public/logo.png`

Se forem usadas fotos no futuro, priorizar imagens que mostrem:

- Contexto real de escritório ou atendimento.
- Empresários e rotina de negócio.
- Contabilidade e consultoria de forma natural.

Evitar fotos corporativas genéricas, escuras, muito posadas ou abstratas demais.

## Experiência

O visitante deve entender rapidamente:

- O que a Dinâmica faz.
- Para quem é o serviço.
- Por que confiar.
- Como entrar em contato.

Priorizar:

- CTAs claros.
- Seções escaneáveis.
- Linguagem simples.
- Boa ergonomia mobile.
- Acesso rápido ao WhatsApp.

Evitar:

- Poluição visual.
- Muitas cores.
- Blocos longos de texto.
- Linguagem agressiva de venda.
- Elementos decorativos competindo com a mensagem.
