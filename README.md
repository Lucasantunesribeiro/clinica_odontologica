# 🦷 Sorrir+ Odontologia - Site Institucional

Site institucional premium para clínicas odontológicas com design profissional, sem "cara de IA". Desenvolvido com Next.js 16, TypeScript, Tailwind CSS 4 e shadcn/ui.

## ✨ Destaques

- **Design Premium**: Tipografia elegante (Inter + Playfair Display), cores médicas, espaçamento generoso
- **Conteúdo Humanizado**: Textos realistas escritos por humanos, sem jargões genéricos
- **Imagens Reais**: 21 imagens profissionais (Unsplash) incluídas no projeto
- **SEO Otimizado**: Sitemap, robots.txt, metadata completa, JSON-LD schema
- **Performance**: Next.js 16 App Router, next/image otimizado, código limpo
- **Acessibilidade**: WCAG 2.1 AA, navegação por teclado, contraste adequado

## 🚀 Tecnologias

- **Next.js 16** (App Router)
- **TypeScript 5.6**
- **Tailwind CSS 4** + Design System Custom
- **shadcn/ui** (componentes base)
- **React 19.2**
- **Lucide React** (ícones)

## 📦 Instalação

```bash
# Clonar o repositório
git clone <seu-repo>
cd clinica_odontologica

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build && npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📋 Funcionalidades

### Páginas

- ✅ **Home** (Hero + Avisos + Tratamentos + Sobre + Equipe + Consultório + Depoimentos + FAQ + CTA)
- ✅ **Tratamentos** (hub com filtros + 8 páginas individuais)
- ✅ **Equipe** (perfis completos com educação)
- ✅ **Contato** (formulário + mapa + horários)

### Recursos

- ✅ Integração WhatsApp (business + desenvolvedor)
- ✅ Botão flutuante WhatsApp
- ✅ Galeria consultório (8 imagens)
- ✅ Cards de equipe com fotos reais
- ✅ Depoimentos com localização e data
- ✅ FAQ com Accordion
- ✅ Sitemap.xml dinâmico
- ✅ Robots.txt
- ✅ JSON-LD (Dentist + LocalBusiness)

## 🎨 Personalização

### 1️⃣ WhatsApp (OBRIGATÓRIO)

Edite `/lib/constants.ts`:

```typescript
export const BUSINESS = {
  // ⚠️ TROCAR PELO SEU WHATSAPP (formato: 5521999999999)
  whatsapp: "5521999999999", // ← TROCAR AQUI
  // ...
};
```

**WhatsApp do desenvolvedor** (botão "Quero um igual" no footer):

```typescript
export const DEVELOPER = {
  name: "Lucas Antunes Ferreira",
  whatsapp: "5521996805944", // ← Deixe para portfolio ou troque
};
```

### 2️⃣ Dados da Clínica

Edite `/lib/constants.ts`:

```typescript
export const BUSINESS = {
  name: "Sorrir+ Odontologia", // ← TROCAR
  tagline: "Cuidado com o seu sorriso desde 2015", // ← TROCAR
  description: "Clínica odontológica no coração...", // ← TROCAR

  whatsapp: "5521999999999", // ← TROCAR
  phone: "(21) 3251-8847", // ← TROCAR
  email: "contato@sorrirodonto.com.br", // ← TROCAR

  address: {
    street: "Rua Visconde de Pirajá, 414", // ← TROCAR
    complement: "Sala 603", // ← TROCAR
    neighborhood: "Ipanema", // ← TROCAR
    city: "Rio de Janeiro", // ← TROCAR
    state: "RJ", // ← TROCAR
    zip: "22410-002", // ← TROCAR
    mapUrl: "https://maps.google.com/?q=-22.9848,-43.2005", // ← TROCAR
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=...", // ← TROCAR
  },

  hours: {
    weekdays: "Segunda a Sexta: 8h às 19h", // ← TROCAR
    saturday: "Sábado: 9h às 14h", // ← TROCAR
    sunday: "Domingo: Fechado",
    extended: "Último horário às 18h30 (chegada até 18h)", // ← TROCAR
  },

  social: {
    instagram: "https://instagram.com/sorrirmaisodonto", // ← TROCAR
    facebook: "https://facebook.com/sorrirmaisodonto", // ← TROCAR
  },
};
```

### 3️⃣ Equipe

Edite `/lib/content.ts` no array `TEAM`:

```typescript
export const TEAM: TeamMember[] = [
  {
    id: "dra-ana-paula",
    name: "Dra. Ana Paula Mendes", // ← TROCAR
    role: "Diretora Clínica e Implantodontista", // ← TROCAR
    cro: "CRO-RJ 28451", // ← TROCAR (CRO REAL)
    specialties: ["Implantodontia", "Prótese", "Reabilitação Oral"], // ← TROCAR
    bio: "Fundou a Sorrir+ em 2015...", // ← TROCAR
    education: [
      "Graduação em Odontologia - UFRJ", // ← TROCAR
      "Especialização em Implantodontia - ABO-RJ", // ← TROCAR
      // ...
    ],
    image: "/clinic/team-1.jpg", // Imagem real incluída
  },
  // Adicionar/remover membros conforme necessário
];
```

### 4️⃣ Tratamentos

Os tratamentos estão em `/lib/content.ts` no array `TREATMENTS`. Você pode:

- Editar os 8 tratamentos existentes
- Adicionar novos tratamentos
- Remover tratamentos não oferecidos

Cada tratamento tem:

- `name`: Nome do tratamento
- `slug`: URL amigável (usado em /tratamentos/[slug])
- `shortDescription`: Resumo para card
- `fullDescription`: Descrição completa
- `forWhom`: Array com "para quem é indicado"
- `howItWorks`: Array com passo a passo
- `duration`: Tempo médio
- `image`: Caminho da imagem
- `faqs`: Array de perguntas/respostas

**Exemplo:**

```typescript
{
  id: "implante-unitario",
  slug: "implante-dentario",
  category: "implantes",
  name: "Implante Dentário",
  shortDescription: "Substitua dentes perdidos...",
  fullDescription: "O implante dentário é...",
  image: "/clinic/treatment-implante.jpg",
  forWhom: [
    "Pessoas que perderam um ou mais dentes",
    "Quem busca alternativa às pontes móveis",
    // ...
  ],
  howItWorks: [
    "Consulta inicial com tomografia...",
    "Cirurgia para inserção do pino...",
    // ...
  ],
  duration: "4 a 8 meses (processo completo)",
  faqs: [
    {
      question: "Dói fazer implante?",
      answer: "A cirurgia é feita com anestesia local..."
    }
  ]
}
```

### 5️⃣ Depoimentos

Edite `/lib/content.ts` no array `TESTIMONIALS`:

```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mariana Costa", // ← TROCAR
    treatment: "Implante Dentário", // ← TROCAR
    text: "Depois de anos adiando...", // ← TROCAR (depoimento real)
    rating: 5, // 1-5
    date: "Dezembro de 2024", // ← TROCAR
    location: "Ipanema", // ← TROCAR (opcional)
  },
  // Adicionar depoimentos reais
];
```

### 6️⃣ FAQ

Edite `/lib/content.ts` no array `FAQS`:

```typescript
export const FAQS: FAQ[] = [
  {
    question: "Vocês atendem por convênio?", // ← TROCAR
    answer: "Sim! Trabalhamos com...", // ← TROCAR
    category: "pagamento", // opcional
  },
  // ...
];
```

### 7️⃣ Convênios

Edite `/lib/constants.ts`:

```typescript
export const INSURANCE_PLANS = [
  "Amil Dental", // ← TROCAR/ADICIONAR/REMOVER
  "Bradesco Dental",
  "SulAmérica Odonto",
  // ...
];
```

### 8️⃣ Sobre a Clínica

Edite `/lib/constants.ts` no objeto `ABOUT`:

```typescript
export const ABOUT = {
  title: "Sobre a Sorrir+", // ← TROCAR
  subtitle: "Tradição e cuidado no coração de Ipanema", // ← TROCAR
  paragraphs: [
    "Desde 2015, atendemos pacientes...", // ← TROCAR (parágrafos reais)
    "Investimos em educação continuada...",
    "Acreditamos que ir ao dentista...",
  ],
  stats: [
    { value: "9+", label: "anos de atuação" }, // ← TROCAR
    { value: "4.8", label: "avaliação média" }, // ← TROCAR
    { value: "3.500+", label: "pacientes atendidos" }, // ← TROCAR
    { value: "12", label: "especialidades" }, // ← TROCAR
  ],
};
```

### 9️⃣ Imagens

#### Imagens da Clínica (Consultório)

21 imagens reais já incluídas em `/public/clinic/`:

- `hero.jpg` (Hero da home)
- `team-1.jpg` a `team-4.jpg` (Equipe)
- `clinic-1.jpg` a `clinic-8.jpg` (Galeria consultório)
- `treatment-*.jpg` (Imagens de tratamentos)

**Para trocar imagens:**

1. Substitua as imagens em `/public/clinic/`
2. Mantenha os mesmos nomes OU
3. Atualize os paths em `/lib/constants.ts` (CLINIC_GALLERY) e `/lib/content.ts` (TEAM, TREATMENTS)

**Script para baixar novas imagens:**

```bash
node scripts/fetch-assets.mjs
```

(Edite o script para adicionar URLs do Unsplash/Pexels)

#### Favicon e OG Image

- **Favicon**: Substitua `/app/favicon.ico`
- **OG Image**: Adicione `/public/og-image.jpg` (1200x630px)

### 🔟 Cores e Branding

#### Paleta Atual

- **Primary**: Azul médico (#0884E0) - Confiança
- **Accent**: Teal (#39B5A8) - Frescor
- **Background**: Off-white (#FCFCFC) - Limpeza

#### Trocar Cores

Edite `/app/globals.css`:

```css
:root {
  /* Primary - Azul médico */
  --primary: 210 95% 48%; /* HSL - TROCAR AQUI */
  --primary-foreground: 0 0% 100%;

  /* Accent - Teal */
  --accent: 175 55% 50%; /* HSL - TROCAR AQUI */
  --accent-foreground: 0 0% 100%;

  /* Outras cores... */
}
```

**Exemplo: Trocar para Verde**

```css
:root {
  --primary: 142 71% 45%; /* Verde médico */
  --accent: 158 64% 52%; /* Verde claro */
}
```

Use [HSL Color Picker](https://hslpicker.com/) para escolher cores.

## 🌐 SEO e Domínio

### Domínio

Edite `/app/sitemap.ts` e `/app/robots.ts`:

```typescript
const BASE_URL = "https://sorrirplus.com.br"; // ← TROCAR PELO SEU DOMÍNIO
```

### Metadata

Edite `/app/layout.tsx` para ajustar:

- **title**: Título do site
- **description**: Descrição para Google
- **keywords**: Palavras-chave
- **openGraph**: Preview em redes sociais

### JSON-LD (Schema.org)

Edite `/components/JsonLd.tsx` para ajustar coordenadas GPS:

```typescript
geo: {
  latitude: "-22.9848", // ← TROCAR
  longitude: "-43.2005", // ← TROCAR
}
```

## 📁 Estrutura do Projeto

```
clinica_odontologica/
├── app/
│   ├── layout.tsx              # Layout global + metadata
│   ├── page.tsx                # Home (redesenhada)
│   ├── tratamentos/
│   │   ├── page.tsx            # Hub de tratamentos
│   │   └── [slug]/
│   │       └── page.tsx        # Página individual de tratamento
│   ├── equipe/
│   │   └── page.tsx            # Página da equipe
│   ├── contato/
│   │   └── page.tsx            # Formulário de contato
│   ├── globals.css             # Design system premium
│   ├── sitemap.ts              # Sitemap XML dinâmico
│   └── robots.ts               # robots.txt
├── components/
│   ├── Header.tsx              # Navegação principal
│   ├── Footer.tsx              # Footer com "Quero um igual"
│   ├── CTAWhatsApp.tsx         # Botão flutuante WhatsApp
│   ├── JsonLd.tsx              # Schema.org
│   ├── Section.tsx             # Wrapper premium para seções
│   ├── Gallery.tsx             # Grid de galeria
│   ├── ReviewCard.tsx          # Card de depoimento
│   ├── Stats.tsx               # Números/estatísticas
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── constants.ts            # ⭐ DADOS DA CLÍNICA (EDITAR)
│   ├── content.ts              # ⭐ TRATAMENTOS, EQUIPE, FAQ (EDITAR)
│   ├── whatsapp.ts             # Helpers WhatsApp
│   └── utils.ts                # Utilitários
├── public/
│   └── clinic/                 # ⭐ IMAGENS REAIS (21 arquivos)
│       ├── hero.jpg
│       ├── team-*.jpg
│       ├── clinic-*.jpg
│       └── treatment-*.jpg
└── scripts/
    └── fetch-assets.mjs        # Script para baixar imagens
```

## ✅ Checklist de Personalização

### Obrigatório

- [ ] **WhatsApp**: Trocar `BUSINESS.whatsapp` em `/lib/constants.ts`
- [ ] **Nome e Dados**: Editar `BUSINESS` completo em `/lib/constants.ts`
- [ ] **Endereço**: Atualizar `BUSINESS.address` + coordenadas GPS
- [ ] **Equipe**: Editar `TEAM` em `/lib/content.ts` (nomes, CROs, bios)
- [ ] **Domínio**: Trocar `BASE_URL` em `/app/sitemap.ts` e `/app/robots.ts`
- [ ] **Horários**: Atualizar `BUSINESS.hours` em `/lib/constants.ts`

### Recomendado

- [ ] **Tratamentos**: Revisar e personalizar `TREATMENTS` em `/lib/content.ts`
- [ ] **Depoimentos**: Substituir por depoimentos reais em `TESTIMONIALS`
- [ ] **FAQ**: Adaptar perguntas frequentes em `FAQS`
- [ ] **Sobre**: Personalizar `ABOUT` com história da clínica
- [ ] **Convênios**: Atualizar `INSURANCE_PLANS`
- [ ] **Imagens**: Substituir fotos em `/public/clinic/` (opcional, já tem 21)
- [ ] **Favicon**: Trocar `/app/favicon.ico`
- [ ] **OG Image**: Adicionar `/public/og-image.jpg`

### Opcional

- [ ] **Cores**: Ajustar paleta em `/app/globals.css`
- [ ] **Redes Sociais**: Atualizar `BUSINESS.social`
- [ ] **Avisos**: Editar `IMPORTANT_NOTICES` em `/lib/constants.ts`

## 📞 Integração WhatsApp

O site usa WhatsApp em 4 pontos:

1. **Header**: Botão "Agendar Avaliação"
2. **Home**: CTAs em seções
3. **Cards de Tratamento**: "Saiba mais" → Agendar
4. **Botão Flutuante**: Canto inferior direito (sempre visível)

### Como Funciona

1. Usuário clica em CTA
2. Abre WhatsApp com mensagem pré-formatada:

```
Olá! Gostaria de agendar uma consulta na *Sorrir+ Odontologia*.
*Tratamento de interesse:* Implante Dentário
```

3. Usuário confirma e envia

### Mensagens Personalizadas

Edite `/lib/whatsapp.ts` para customizar mensagens.

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure variável de ambiente:
   - `NEXT_PUBLIC_SITE_URL` = `https://seudominio.com.br`
3. Deploy automático a cada push

**Via CLI:**

```bash
npm i -g vercel
vercel
```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Configure variável de ambiente:
   - `NEXT_PUBLIC_SITE_URL` = `https://seudominio.com.br`

### Servidor Próprio

```bash
npm run build
npm start
```

## 🎯 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: 90+ (Desktop)
- **Bundle Size**: < 500KB (initial load)

Otimizações aplicadas:

- Next.js App Router + Server Components
- next/image com lazy loading
- next/font com preload
- Code splitting automático
- Tailwind CSS purge

## 🆘 Suporte

### Precisa de Ajuda?

- **Personalização**: Siga este README passo a passo
- **Dúvidas técnicas**: Abra uma issue no GitHub
- **Quer um site igual para seu negócio?**

  👉 WhatsApp: [+55 21 99680-5944](https://wa.me/5521996805944?text=Olá!%20Vi%20o%20site%20Sorrir%2B%20e%20gostaria%20de%20um%20site%20profissional%20parecido.)

### Desenvolvedor

**Lucas Antunes Ferreira**

- WhatsApp: +55 21 99680-5944
- Portfolio: [wa.me/5521996805944](https://wa.me/5521996805944)

---

## 📄 Licença

Este é um **projeto DEMO** desenvolvido por Lucas Antunes Ferreira.

✅ Você pode usar este template para seu negócio
✅ Personalize à vontade
⚠️ Mantenha o link "Quero um igual" no footer (portfolio do dev)

---

**Desenvolvido com ❤️ por Lucas Antunes Ferreira**
Site profissional sem "cara de IA" • Design premium • Conteúdo humanizado
