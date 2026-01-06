/**
 * Constantes da Clínica Odontológica
 * Personalize aqui as informações do seu negócio
 */

export const BUSINESS = {
  name: "Sorrir+ Odontologia",
  tagline: "Cuidado com o seu sorriso desde 2015",
  description: "Clínica odontológica no coração do Rio de Janeiro com equipe especializada em implantes, estética dental e ortodontia. Oferecemos tratamentos completos com tecnologia e acolhimento.",

  // IMPORTANTE: Substituir pelo WhatsApp do negócio (formato: 5521999999999)
  whatsapp: "5521999999999", // PLACEHOLDER - TROCAR PELO NÚMERO REAL
  phone: "(21) 3251-8847",
  email: "contato@sorrirodonto.com.br",

  address: {
    street: "Rua Visconde de Pirajá, 414",
    complement: "Sala 603",
    neighborhood: "Ipanema",
    city: "Rio de Janeiro",
    state: "RJ",
    zip: "22410-002",
    mapUrl: "https://maps.google.com/?q=-22.9848,-43.2005", // Coordenadas de Ipanema (DEMO)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0!2d-43.2005!3d-22.9848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzA1LjMiUyA0M8KwMTInMDEuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" // DEMO
  },

  hours: {
    weekdays: "Segunda a Sexta: 8h às 19h",
    saturday: "Sábado: 9h às 14h",
    sunday: "Domingo: Fechado",
    extended: "Último horário de atendimento às 18h30 (chegada até 18h)"
  },

  social: {
    instagram: "https://instagram.com/sorrirmaisodonto",
    facebook: "https://facebook.com/sorrirmaisodonto"
  }
} as const;

// WhatsApp do desenvolvedor (para portfólio "Quero um igual")
export const DEVELOPER = {
  name: "Lucas Antunes Ferreira",
  whatsapp: "5521996805944",
  message: `Olá Lucas! Vi o site da ${BUSINESS.name} e gostaria de um site profissional parecido para meu negócio.`
} as const;

// Diferenciais da clínica (textos específicos e realistas)
export const DIFFERENTIALS = [
  {
    icon: "shield-check",
    title: "Biossegurança Rigorosa",
    description: "Esterilização em autoclave após cada uso e uso de materiais descartáveis sempre que possível. Sua saúde em primeiro lugar."
  },
  {
    icon: "clock",
    title: "Horários Flexíveis",
    description: "Atendimento estendido até 19h e aos sábados. Encaixamos urgências no mesmo dia sempre que possível."
  },
  {
    icon: "credit-card",
    title: "Facilidade de Pagamento",
    description: "Aceitamos principais convênios, parcelamos em até 12x sem juros no cartão e oferecemos planos para tratamentos longos."
  }
] as const;

// Convênios aceitos
export const INSURANCE_PLANS = [
  "Amil Dental",
  "Bradesco Dental",
  "SulAmérica Odonto",
  "Unimed Odonto",
  "Porto Seguro Dental",
  "MetLife",
  "OdontoPrev",
  "Particular (parcelamento facilitado)"
] as const;

// Avisos importantes para home (editáveis)
export const IMPORTANT_NOTICES = [
  {
    id: "convenios",
    icon: "check-circle",
    title: "Atendemos convênios",
    description: "Consulte sua operadora para confirmar cobertura"
  },
  {
    id: "urgencia",
    icon: "clock",
    title: "Urgências no mesmo dia",
    description: "Whatsapp (21) 9999-9999 relatando o caso"
  },
  {
    id: "sabado",
    icon: "calendar",
    title: "Atendimento aos sábados",
    description: "Das 9h às 14h com agendamento prévio"
  }
] as const;

// Sobre a clínica (para seção "Sobre" na home)
export const ABOUT = {
  title: "Sobre a Sorrir+",
  subtitle: "Tradição e cuidado no coração de Ipanema",
  paragraphs: [
    "Desde 2015, atendemos pacientes de todas as idades em nossa clínica localizada em Ipanema. Nossa equipe é formada por dentistas especialistas que se dedicam a oferecer tratamentos com excelência técnica e respeito ao seu tempo.",
    "Investimos em educação continuada e equipamentos modernos (como radiografia digital e escaneamento intraoral) para tornar sua experiência mais confortável e seus resultados mais previsíveis.",
    "Acreditamos que ir ao dentista não precisa ser um momento de ansiedade. Por isso, explicamos cada etapa do tratamento, respeitamos seu ritmo e estamos sempre disponíveis para tirar dúvidas — inclusive pelo WhatsApp."
  ],
  stats: [
    { value: "9+", label: "anos de atuação" },
    { value: "4.8", label: "avaliação média" },
    { value: "3.500+", label: "pacientes atendidos" },
    { value: "12", label: "especialidades" }
  ]
} as const;

// Galeria do consultório (paths para public/clinic/)
export const CLINIC_GALLERY = [
  { src: "/clinic/clinic-1.jpg", alt: "Recepção da clínica com ambiente clean e acolhedor" },
  { src: "/clinic/clinic-2.jpg", alt: "Sala de atendimento equipada com tecnologia moderna" },
  { src: "/clinic/clinic-3.jpg", alt: "Consultório odontológico com cadeira e equipamentos" },
  { src: "/clinic/clinic-4.jpg", alt: "Ambiente de esterilização e biossegurança" },
  { src: "/clinic/clinic-5.jpg", alt: "Sala de procedimentos com iluminação natural" },
  { src: "/clinic/clinic-6.jpg", alt: "Equipamentos de radiografia digital" },
  { src: "/clinic/clinic-7.jpg", alt: "Área de espera confortável" },
  { src: "/clinic/clinic-8.jpg", alt: "Detalhe dos equipamentos modernos" }
] as const;
