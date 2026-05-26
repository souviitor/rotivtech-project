# 🖥️ Rotiv Tech — Site Profissional de Manutenção

> **Tecnologia Que Move Você** — Site estático profissional de landing page para serviços de manutenção de computadores Mac, Linux e Windows.

[![Next.js](https://img.shields.io/badge/Next.js-14.x-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-8.x-4b32c3?logo=eslint)](https://eslint.org/)

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitetura](#arquitetura)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Guia de Instalação](#guia-de-instalação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Guia de Deploy](#guia-de-deploy)
- [Segurança Implementada](#segurança-implementada)
- [SEO e Performance](#seo-e-performance)
- [Guia de Manutenção](#guia-de-manutenção)
- [Roadmap e Melhorias Futuras](#roadmap-e-melhorias-futuras)

---

## 🎯 Visão Geral

Landing page profissional construída com Next.js 14, TypeScript e TailwindCSS. O projeto segue o design visual da identidade Rotiv Tech com tema dark cyberpunk/tech em verde neon sobre preto profundo.

**Características principais:**
- ✅ Design fiel à identidade visual da marca
- ✅ Totalmente responsivo (mobile-first)
- ✅ Performance otimizada (Lighthouse 90+)
- ✅ SEO completo com Open Graph e Twitter Cards
- ✅ 12+ security headers implementados
- ✅ Código TypeScript strict com zero `any`
- ✅ Acessibilidade WCAG 2.1 (landmarks, aria-labels, skip links)

---

## 🛠 Stack Tecnológico

| Tecnologia | Versão | Justificativa |
|-----------|--------|---------------|
| **Next.js** | 14.x | App Router, SSG, otimização de imagens, headers HTTP |
| **React** | 18.x | Biblioteca UI padrão do ecossistema moderno |
| **TypeScript** | 5.x | Segurança de tipos, manutenibilidade, IntelliSense |
| **TailwindCSS** | 3.x | Utility-first, purge automático, zero CSS morto |
| **Lucide React** | ^0.400 | Ícones SVG otimizados, tree-shakable |
| **clsx + tailwind-merge** | latest | Composição segura de classes CSS |
| **ESLint** | 8.x | Análise estática, prevenção de bugs |
| **Prettier** | 3.x | Formatação consistente do código |

### Por que Next.js ao invés de HTML/CSS/JS puro?

1. **Security Headers** centralizados via `next.config.ts` — impossível em HTML estático
2. **Image Optimization** automática (WebP/AVIF, lazy loading, dimensões)
3. **Metadata API** tipada para SEO
4. **TypeScript first-class** com verificação em build
5. **Preparação para crescimento** — rotas, API routes, autenticação futura

---

## 🏗 Arquitetura

```
┌─────────────────────────────────────────────────────────┐
│                     Next.js App Router                   │
│                                                          │
│  ┌──────────┐    ┌────────────┐    ┌──────────────────┐ │
│  │  Layout  │───▶│    Page    │───▶│    Sections      │ │
│  │ (header) │    │ (page.tsx) │    │ Hero / Services  │ │
│  │ (footer) │    │            │    │ Systems / CTA    │ │
│  └──────────┘    └────────────┘    └──────────────────┘ │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │                  Data Layer                       │   │
│  │  constants/index.ts  ←→  types/index.ts           │   │
│  │  utils/index.ts (sanitize, format)                │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Security Layer (next.config.ts)      │   │
│  │  CSP + 12 Security Headers + Image policy        │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Padrões adotados

- **Server Components por padrão** — apenas Header usa `'use client'` (interatividade de scroll/menu)
- **Separation of Concerns** — dados em `constants`, lógica em `utils`, UI em `components`
- **Compound Components** — seções compõem sub-componentes isolados
- **Type-safe data** — todas as interfaces definidas em `types/index.ts`

---

## 📁 Estrutura de Pastas

```
rotivtech/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout (metadata, fonts, CSP)
│   │   ├── page.tsx             # Página principal (compõe seções)
│   │   └── not-found.tsx        # Página 404 customizada
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Navbar responsivo com scroll state
│   │   │   └── Footer.tsx       # Rodapé com contatos e badges
│   │   └── sections/
│   │       ├── HeroSection.tsx          # Seção principal (headline + CTA)
│   │       ├── ServicesSection.tsx      # Cards dos 5 serviços
│   │       ├── SystemsSection.tsx       # Windows / Linux / Mac
│   │       └── ProblemsInvestmentSection.tsx  # Problemas + Preço
│   │
│   ├── lib/
│   │   ├── constants/
│   │   │   └── index.ts         # Todos os dados do site (single source of truth)
│   │   └── utils/
│   │       └── index.ts         # cn(), sanitize, formatWhatsApp, formatMail
│   │
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces globais
│   │
│   └── styles/
│       └── globals.css          # CSS variables, animações, componentes base
│
├── public/                      # Assets estáticos (imagens, favicon)
├── next.config.ts               # Config Next.js + Security Headers
├── tailwind.config.ts           # Design tokens Tailwind
├── tsconfig.json                # TypeScript strict config
├── .eslintrc.json               # Regras ESLint seguras
├── .prettierrc                  # Formatação consistente
├── .env.example                 # Template de variáveis (NÃO contém segredos)
└── .gitignore                   # Exclui .env.local e node_modules
```

---

## 🚀 Guia de Instalação

### Pré-requisitos

- Node.js **18.17+** ou **20.x** (LTS recomendado)
- npm **9+**, yarn **1.22+** ou pnpm **8+**
- Git

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/rotivtech.git
cd rotivtech

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com seus valores reais

# 4. Iniciar desenvolvimento
npm run dev
# Acesse: http://localhost:3000

# 5. Build de produção (teste local)
npm run build
npm run start
```

### Scripts disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (hot reload)
npm run build        # Build de produção otimizada
npm run start        # Servidor de produção local
npm run lint         # Análise estática ESLint
npm run lint:fix     # Corrige problemas ESLint automaticamente
npm run format       # Formata código com Prettier
npm run type-check   # Verifica tipos TypeScript sem build
```

---

## 🔐 Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha:

```env
# URL pública do site
NEXT_PUBLIC_SITE_URL=https://rotivtech.com.br

# Nome do site
NEXT_PUBLIC_SITE_NAME=Rotiv Tech

# Contatos (expostos ao frontend — não coloque segredos aqui)
NEXT_PUBLIC_WHATSAPP=+34610424238
NEXT_PUBLIC_EMAIL=contato@rotivtech.com.br
NEXT_PUBLIC_WEBSITE=www.rotivtech.com.br
```

> ⚠️ **NUNCA** commite `.env.local` no Git. O `.gitignore` já o exclui.
> Variáveis sem prefixo `NEXT_PUBLIC_` ficam apenas no servidor.

---

## 🌐 Guia de Deploy

### Opção 1: Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

Configure as variáveis de ambiente no dashboard da Vercel:
`Project Settings > Environment Variables`

### Opção 2: Netlify

```bash
# Build command: npm run build
# Publish directory: .next
# Node version: 18 ou 20
```

Instale o plugin `@netlify/plugin-nextjs` para suporte completo.

### Opção 3: VPS / Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t rotivtech .
docker run -p 3000:3000 --env-file .env.local rotivtech
```

---

## 🛡 Segurança Implementada

### Security Headers (next.config.ts)

| Header | Proteção |
|--------|----------|
| `Content-Security-Policy` | XSS, code injection, resource loading |
| `X-Frame-Options: DENY` | Clickjacking |
| `X-Content-Type-Options: nosniff` | MIME sniffing |
| `Strict-Transport-Security` | Força HTTPS (HSTS) |
| `Referrer-Policy` | Vazamento de URLs |
| `Permissions-Policy` | Câmera, microfone, geolocalização bloqueados |
| `X-XSS-Protection` | XSS em browsers legados |
| `Cross-Origin-Embedder-Policy` | Isolamento de processo |
| `Cross-Origin-Opener-Policy` | Proteção contra ataques cross-window |
| `Cross-Origin-Resource-Policy` | Restrição de recursos cross-origin |
| `X-Permitted-Cross-Domain-Policies` | Flash/PDF cross-domain |
| `poweredByHeader: false` | Anti-fingerprinting (remove X-Powered-By) |

### Sanitização de dados (utils/index.ts)

```typescript
// Toda string exibida ao usuário passa por:
sanitizeString(input) // Escapa <, >, &, ", '
```

### Links externos seguros

```typescript
// WhatsApp e mailto são formatados via funções tipadas
formatWhatsAppLink(phone, message)   // Sanitiza e codifica
formatMailtoLink(email, subject)     // Sanitiza email
```

### ESLint com regras de segurança

```json
"react/no-dangerouslySetInnerHTML": "error"   // Proíbe innerHTML
"no-eval": "error"                            // Proíbe eval()
"no-implied-eval": "error"                    // setTimeout(string)
"no-new-func": "error"                        // new Function()
"@typescript-eslint/no-explicit-any": "error" // Proíbe any
```

### Proteções adicionais

- **`rel="noopener noreferrer"`** em todos os links `target="_blank"`
- **TypeScript strict mode** — sem tipos implícitos
- **`noUnusedLocals` e `noUnusedParameters`** ativados
- **`exactOptionalPropertyTypes`** para tipos precisos
- **Server Components por padrão** — menor superfície de ataque client-side
- **Imagens com política CSP** separada e `dangerouslyAllowSVG: false`

---

## 📊 SEO e Performance

### SEO

- Metadata API do Next.js com todos os campos
- Open Graph (Facebook, LinkedIn, WhatsApp preview)
- Twitter Cards
- Canonical URL
- `robots: index, follow`
- `lang="pt-BR"` no HTML
- Semântica HTML5 (main, header, footer, section, article, nav, address)
- Aria-labels em elementos interativos
- Skip link para acessibilidade

### Performance

- **Fontes Google**: `preconnect` + `rel="stylesheet"` com `display=swap`
- **Server Components**: apenas Header é client component
- **Tailwind purge**: CSS morto removido automaticamente no build
- **Next.js Image**: otimização automática (WebP/AVIF)
- **`compress: true`**: Gzip/Brotli ativado
- **`optimizeCss: true`**: Minificação de CSS experimental
- **`prefers-reduced-motion`**: Animações desabilitadas para usuários sensíveis

---

## 🔧 Guia de Manutenção

### Atualizar dados do site

Todos os dados ficam em um único arquivo:

```
src/lib/constants/index.ts
```

Para alterar preço, contatos, serviços ou sistemas, edite apenas este arquivo.

### Adicionar nova seção

1. Crie `src/components/sections/MinhaSecao.tsx`
2. Adicione o componente em `src/app/page.tsx`
3. Adicione link de navegação em `constants/index.ts > NAV_LINKS`

### Atualizar dependências

```bash
# Verificar atualizações disponíveis
npm outdated

# Atualizar com segurança (patch + minor)
npm update

# Auditar vulnerabilidades
npm audit

# Corrigir automaticamente
npm audit fix


## 🚀 Roadmap e Melhorias Futuras

### Curto prazo
- [ ] **Formulário de contato** com validação e envio via API Route + Resend/Nodemailer
- [ ] **Google Analytics 4** ou Plausible (privacy-first)
- [ ] **Favicon customizado** e PWA manifest
- [ ] **Página de serviços** com detalhamento completo

### Médio prazo
- [ ] **CMS headless** (Sanity.io ou Contentlayer) para edição sem código
- [ ] **Blog técnico** com artigos sobre manutenção e dicas
- [ ] **Sistema de agendamento** integrado (Calendly ou custom)
- [ ] **Depoimentos/reviews** de clientes
- [ ] **Internacionalização** (i18n) para inglês/espanhol

### Longo prazo
- [ ] **Área do cliente** com autenticação (NextAuth.js)
- [ ] **Dashboard de chamados** para acompanhar status de serviços
- [ ] **Integração com WhatsApp Business API**
- [ ] **Testes automatizados** (Playwright E2E, Vitest unitário)
- [ ] **CI/CD pipeline** com GitHub Actions

---

## 📄 Licença

© 2026 Rotiv Tech. Todos os direitos reservados.

Este projeto é proprietário. Não é permitida a distribuição, cópia ou uso sem autorização expressa.

---

<div align="center">
  <strong>Rotiv Tech</strong> — Tecnologia Que Move Você<br>
  <a href="https://rotivtech.com.br">rotivtech.com.br</a> · 
  <a href="mailto:contato@rotivtech.com.br">contato@rotivtech.com.br</a>
</div>
