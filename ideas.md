# iprint impressão 3D - Design System

## Brand Reference
A identidade visual fornecida define uma marca sofisticada e profissional:
- **Logo**: Tipografia moderna com um sorriso estilizado (smile icon) em dourado
- **Tagline**: "ideias ganham forma" — comunicando transformação de conceitos em realidade
- **Paleta**: Azul escuro (#0D1B3D), Dourado (#D4AF37), Cinza escuro (#4D4D4B), Branco (#F2F2F2)
- **Tipografia**: Poppins (display), sans-serif clean (body)
- **Valores**: Inovação, Precisão, Qualidade, Confiança, Acessibilidade

---

## Design Philosophy: **Precision & Elegance**

### Core Principles
1. **Minimalist Sophistication** — Espaço branco generoso, tipografia clara, sem ruído visual
2. **Geometric Clarity** — Formas geométricas limpas (camadas 3D, cubos, linhas) refletem o processo de impressão
3. **Luxury Restraint** — Dourado como acento estratégico, nunca excessivo; confiança através da subtileza
4. **Motion Purpose** — Animações suaves que revelam camadas (como impressão 3D em progresso)

### Color Philosophy
- **Azul Escuro (#0D1B3D)**: Confiança, tecnologia, profissionalismo — cor dominante
- **Dourado (#D4AF37)**: Excelência, inovação — acentos estratégicos (smile, CTAs, destaques)
- **Cinza (#4D4D4B)**: Neutralidade, sofisticação — texto secundário, divisores
- **Branco (#F2F2F2)**: Espaço, clareza — fundo e respiro visual
- **Gradientes**: Azul → Dourado para seções de transição (representando transformação)

### Layout Paradigm
- **Asymmetric Hero**: Logo + tagline à esquerda, conceitos visuais à direita
- **Stacked Sections**: Alternância entre fundo branco e azul escuro para ritmo visual
- **Grid Geométrico**: 3-coluna para serviços, 2-coluna para valores (não centrado)
- **Diagonal Dividers**: Transições entre seções usando SVG waves/diagonals (não retos)

### Signature Elements
1. **Smile Icon**: O ícone de sorriso dourado aparece em CTAs, badges, e como micro-elemento em seções
2. **3D Layers**: Ilustrações de camadas empilhadas (representando impressão 3D) como decoração
3. **Geometric Accents**: Cubos, linhas diagonais, e formas abstratas em cantos/bordas

### Interaction Philosophy
- **Hover Effects**: Botões crescem levemente + dourado aparece como underline
- **Scroll Reveals**: Elementos entram suavemente da esquerda/direita conforme scroll
- **Micro-interactions**: Ícones giram, badges pulsam sutilmente, transições são fluidas (200-300ms)
- **Feedback Imediato**: Cliques em CTAs mostram feedback visual (scale + glow)

### Animation Guidelines
- **Entrance**: Elementos entram com `opacity: 0 → 1` + `translateX/Y` (200-250ms, ease-out)
- **Hover**: Scale 1.05 + shadow aprofunda (150ms)
- **Scroll Trigger**: Stagger 30-50ms entre itens (lista de serviços, valores)
- **Loader/Progress**: Rotação suave do smile icon ou barra de progresso com gradiente azul→dourado
- **Respects `prefers-reduced-motion`**: Transições ainda ocorrem mas sem delay/stagger

### Typography System
- **Display Font**: Poppins Bold (700) para títulos H1/H2 — impactante, geométrico
- **Body Font**: Poppins Regular (400) / Medium (500) para corpo e CTAs
- **Hierarchy**:
  - H1: 48px / 56px (mobile/desktop), Poppins 700, azul escuro
  - H2: 32px / 40px, Poppins 700, azul escuro com dourado em palavras-chave
  - Body: 16px, Poppins 400, cinza escuro
  - CTA: 14px, Poppins 600, branco sobre dourado

### Brand Essence
**Positioning**: Empresa de impressão 3D que transforma ideias em produtos reais com tecnologia, precisão e confiança.

**Personality**: Inovadora, confiável, sofisticada, acessível (não arrogante).

**Voice**: 
- Headlines: "Suas ideias ganham forma" (aspiracional, não técnico)
- CTAs: "Começar agora" / "Solicitar orçamento" (direto, convidativo)
- Microcopy: "Qualidade garantida em cada camada" (técnico mas elegante)

### Wordmark & Logo
- **Logo**: Tipografia "iprint" em Poppins Bold com smile icon em dourado integrado
- **Favicon**: Smile icon em dourado sobre azul escuro (32x32px)
- **Versões**: Principal (azul + dourado), Negativa (branco sobre azul), Monocromática (cinza)

### Signature Brand Color
**Dourado (#D4AF37)** — Cor que é imediatamente reconhecível como iprint, usada em:
- Smile icon (logo, CTAs, badges)
- Underlines em títulos
- Botões primários
- Accents em cards
- Gradientes de transição

---

## Site Structure

### Pages
1. **Home** (Hero + Conceito + Serviços + Portfólio + Valores + CTA + Footer)
2. **Serviços** (Detalhes de cada tipo de impressão)
3. **Portfólio** (Galeria de projetos)
4. **Contato** (Formulário + Mapa)

### Navigation
- **Header Sticky**: Logo à esquerda, nav items (Serviços, Portfólio, Contato) à direita, CTA "Solicitar Orçamento" em dourado
- **Mobile**: Hamburger menu com slide-in drawer (azul escuro)
- **Footer**: Links, social, copyright

---

## Implementation Checklist
- [ ] Gerar logo/favicon em dourado com smile icon
- [ ] Gerar 3-5 imagens de alta qualidade (hero, serviços, portfólio)
- [ ] Configurar Tailwind com cores iprint (azul, dourado, cinza, branco)
- [ ] Implementar header sticky com nav responsivo
- [ ] Criar seções com dividers diagonais/waves
- [ ] Adicionar animações de scroll reveal
- [ ] Implementar formulário de contato
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Otimizar performance (lazy loading de imagens)
