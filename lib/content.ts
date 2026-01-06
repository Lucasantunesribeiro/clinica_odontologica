/**
 * Conteúdos da Clínica Odontológica
 * Tratamentos, Equipe, Depoimentos, FAQ
 */

export type TreatmentCategory = "preventivo" | "estetica" | "ortodontia" | "implantes" | "protese" | "urgencia";

export interface Treatment {
  id: string;
  slug: string;
  category: TreatmentCategory;
  name: string;
  shortDescription: string;
  fullDescription: string;
  forWhom: string[]; // Para quem é indicado
  howItWorks: string[]; // Passo a passo
  duration: string;
  image: string;
  faqs: Array<{ question: string; answer: string }>;
}

// ========================================
// TRATAMENTOS (8+ páginas ricas)
// ========================================

export const TREATMENTS: Treatment[] = [
  // IMPLANTES
  {
    id: "implante-unitario",
    slug: "implante-dentario",
    category: "implantes",
    name: "Implante Dentário",
    shortDescription: "Substitua dentes perdidos com segurança e naturalidade",
    fullDescription: "O implante dentário é uma raiz artificial de titânio fixada no osso, sobre a qual instalamos uma coroa protética. É a solução mais moderna e duradoura para recuperar dentes perdidos, devolvendo função mastigatória e estética.",
    image: "/clinic/treatment-implante.jpg",
    forWhom: [
      "Pessoas que perderam um ou mais dentes",
      "Quem busca alternativa às pontes móveis",
      "Pacientes com osso em boa condição (ou que aceitem enxerto)",
      "Não fumantes ou dispostos a parar durante tratamento"
    ],
    howItWorks: [
      "Consulta inicial com tomografia para avaliar osso e planejamento digital",
      "Cirurgia para inserção do pino de titânio (40-60 min, anestesia local)",
      "Período de osseointegração: 3-6 meses para cicatrização e integração ao osso",
      "Instalação da coroa definitiva após cicatrização completa",
      "Retornos periódicos para acompanhamento e higiene profissional"
    ],
    duration: "4 a 8 meses (processo completo)",
    faqs: [
      {
        question: "Dói fazer implante?",
        answer: "A cirurgia é feita com anestesia local, igual a uma extração. No pós-operatório, a maioria dos pacientes relata desconforto leve controlado com analgésicos comuns. Orientamos repouso por 2-3 dias."
      },
      {
        question: "Qualquer pessoa pode fazer?",
        answer: "A maioria sim, mas avaliamos caso a caso. Diabéticos controlados podem fazer. Fumantes têm maior risco de perda, por isso pedimos parar de fumar. Quem faz quimioterapia ou toma remédios para osteoporose precisa de liberação médica."
      },
      {
        question: "Quanto tempo dura um implante?",
        answer: "Com higiene adequada e acompanhamento regular, implantes duram décadas — muitos a vida toda. A coroa pode precisar de troca após 10-15 anos devido ao desgaste natural."
      },
      {
        question: "Posso fazer carga imediata (dente no mesmo dia)?",
        answer: "Em casos selecionados sim, principalmente na frente e quando o osso está firme. Mas na maioria das vezes esperamos a osseointegração para garantir sucesso a longo prazo."
      }
    ]
  },

  {
    id: "protese-protocolo",
    slug: "protese-dentaria",
    category: "protese",
    name: "Prótese Protocolo",
    shortDescription: "Substitua todos os dentes com prótese fixa sobre implantes",
    fullDescription: "A prótese protocolo é uma arcada completa parafusada sobre 4 a 6 implantes. É fixa, ou seja, só o dentista remove para manutenções. Ideal para quem perdeu todos os dentes ou usa dentadura e quer segurança.",
    image: "/clinic/treatment-protese.jpg",
    forWhom: [
      "Quem perdeu todos os dentes de uma arcada",
      "Usuários de dentadura que querem mais firmeza e conforto",
      "Quem busca recuperar capacidade mastigatória completa",
      "Pacientes que não se adaptam a próteses removíveis"
    ],
    howItWorks: [
      "Avaliação com tomografia e planejamento do número ideal de implantes",
      "Instalação cirúrgica de 4-6 implantes estrategicamente posicionados",
      "Em alguns casos fazemos carga imediata (prótese provisória no mesmo dia)",
      "Após osseointegração (3-6 meses), instalamos prótese definitiva",
      "Manutenção a cada 6 meses para limpeza e checagem dos parafusos"
    ],
    duration: "3 a 8 meses (ou carga imediata quando possível)",
    faqs: [
      {
        question: "É removível?",
        answer: "Não para você. Apenas o dentista remove com ferramentas específicas nas manutenções. No dia a dia você escova normalmente e não precisa tirar."
      },
      {
        question: "Posso comer de tudo?",
        answer: "Sim! Após cicatrização completa você recupera praticamente toda capacidade mastigatória. Evite alimentos muito duros nos primeiros meses."
      },
      {
        question: "É melhor que dentadura?",
        answer: "Sim, em conforto e função. A prótese protocolo não se move, não machuca, permite sentir sabor dos alimentos e recupera até 80-90% da força de mordida."
      }
    ]
  },

  // ESTÉTICA
  {
    id: "facetas-porcelana",
    slug: "facetas",
    category: "estetica",
    name: "Facetas em Porcelana",
    shortDescription: "Transforme seu sorriso com lâminas de porcelana personalizadas",
    fullDescription: "Facetas são finas lâminas de porcelana coladas sobre os dentes, corrigindo cor, formato e pequenos desalinhamentos. Resultado natural e duradouro para um sorriso harmônico.",
    image: "/clinic/treatment-lentes.jpg",
    forWhom: [
      "Dentes com manchas resistentes a clareamento",
      "Dentes pequenos, desgastados ou com formato irregular",
      "Espaços entre dentes (diastemas)",
      "Dentes levemente desalinhados ou com fraturas"
    ],
    howItWorks: [
      "Planejamento digital do sorriso (DSD) com fotos e mockup",
      "Preparo mínimo dos dentes (quando necessário) e moldagem de precisão",
      "Confecção das facetas em laboratório especializado (2 semanas)",
      "Prova estética para ajustes finais antes da cimentação",
      "Cimentação definitiva e ajuste da mordida"
    ],
    duration: "2 a 3 semanas (2-3 consultas)",
    faqs: [
      {
        question: "Precisa desgastar muito o dente?",
        answer: "Depende do caso. Facetas tradicionais pedem desgaste de 0,5-0,7mm. Em alguns casos fazemos lentes de contato (sem ou com mínimo desgaste). Avaliamos na consulta qual é melhor para você."
      },
      {
        question: "Fica artificial?",
        answer: "Não! Trabalhamos com técnicos protéticos especializados e reproduzimos textura e translucidez natural. Ninguém vai notar que você tem facetas, só que seu sorriso está bonito."
      },
      {
        question: "Dura quanto tempo?",
        answer: "Facetas em porcelana duram 15-20 anos ou mais com cuidados adequados. Evite roer unhas, abrir embalagens com os dentes e morder objetos duros."
      }
    ]
  },

  {
    id: "clareamento-dental",
    slug: "clareamento",
    category: "estetica",
    name: "Clareamento Dental",
    shortDescription: "Dentes mais brancos com segurança e acompanhamento profissional",
    fullDescription: "Tratamento que remove manchas e reduz amarelamento usando géis à base de peróxido. Oferecemos clareamento em consultório (resultado em 1 sessão) ou caseiro (moldeiras personalizadas).",
    image: "/clinic/treatment-clareamento.jpg",
    forWhom: [
      "Dentes amarelados por café, vinho, cigarro ou idade",
      "Quem quer melhorar cor dos dentes antes de evento importante",
      "Pacientes sem cáries ou sensibilidade extrema",
      "Candidatos a facetas (clarear antes para melhor resultado)"
    ],
    howItWorks: [
      "Avaliação e limpeza prévia (remove tártaro para melhor resultado)",
      "Clareamento em consultório: gel forte + luz LED, 40-60 min, resultado imediato",
      "OU clareamento caseiro: moldeiras + gel para usar 1-2h por dia durante 2-3 semanas",
      "Gel dessensibilizante para prevenir desconforto",
      "Orientações sobre alimentos que mancham (evitar nos primeiros 7 dias)"
    ],
    duration: "1 sessão (consultório) ou 2-3 semanas (caseiro)",
    faqs: [
      {
        question: "Quanto tempo dura o resultado?",
        answer: "Em média 1-2 anos. Depende dos hábitos: café, vinho e cigarro escurecem mais rápido. Mantemos com retoques anuais no caseiro."
      },
      {
        question: "Sensibilidade aumenta?",
        answer: "Pode ocorrer sensibilidade temporária durante o tratamento. Usamos dessensibilizantes e ajustamos o protocolo se necessário. Geralmente desaparece 2-3 dias após."
      },
      {
        question: "Clareia restaurações e coroas?",
        answer: "Não. O clareamento age no esmalte natural. Se tiver restaurações visíveis, pode ser necessário trocá-las depois para igualar a cor."
      }
    ]
  },

  // ORTODONTIA
  {
    id: "aparelho-fixo",
    slug: "ortodontia",
    category: "ortodontia",
    name: "Aparelho Fixo",
    shortDescription: "Alinhe dentes e corrija mordida com tratamento ortodôntico tradicional",
    fullDescription: "Bráquetes metálicos ou estéticos colados aos dentes e conectados por fios que movimentam os dentes gradualmente. Solução eficaz para correção de alinhamento e mordida.",
    image: "/clinic/treatment-ortodontia.jpg",
    forWhom: [
      "Dentes tortos, apinhados ou com espaços excessivos",
      "Mordida errada (sobremordida, mordida cruzada, prognatismo)",
      "Respiradores bucais que precisam expandir arcada",
      "Crianças, adolescentes e adultos"
    ],
    howItWorks: [
      "Avaliação ortodôntica com radiografias, fotos e moldagem",
      "Instalação dos bráquetes e primeiro arco ortodôntico",
      "Manutenções mensais para trocar elásticos e ajustar fio",
      "Acompanhamento do movimento dentário e ajustes necessários",
      "Após término, uso de contenção para manter resultado"
    ],
    duration: "18 a 36 meses (varia conforme complexidade)",
    faqs: [
      {
        question: "Dói?",
        answer: "Instalação não dói. Nos primeiros dias e após cada manutenção pode haver desconforto ao mastigar, mas é tolerável e passa em 2-3 dias."
      },
      {
        question: "Posso escolher cores?",
        answer: "Sim! No aparelho metálico você escolhe cor das borrachinhas a cada mês. Muitos adolescentes adoram mudar."
      },
      {
        question: "Adulto pode usar aparelho?",
        answer: "Sim! Não tem idade limite. Adultos podem preferir aparelho estético (bráquetes transparentes) ou alinhadores invisíveis."
      }
    ]
  },

  {
    id: "alinhadores-invisiveis",
    slug: "alinhadores-invisiveis",
    category: "ortodontia",
    name: "Alinhadores Invisíveis",
    shortDescription: "Ortodontia discreta com placas transparentes removíveis",
    fullDescription: "Sequência de placas transparentes feitas sob medida que alinham os dentes progressivamente. Removíveis para comer e higienizar. Ideal para quem busca discrição.",
    image: "/clinic/treatment-alinhadores.jpg",
    forWhom: [
      "Adultos que querem tratamento discreto",
      "Casos leves a moderados de desalinhamento",
      "Quem precisa de estética durante tratamento (trabalha com público)",
      "Pacientes disciplinados (uso 22h/dia)"
    ],
    howItWorks: [
      "Escaneamento 3D da boca e planejamento digital do movimento",
      "Confecção de série de alinhadores personalizados",
      "Troca de alinhador a cada 1-2 semanas em casa",
      "Consultas de acompanhamento a cada 6-8 semanas",
      "Contenção após finalização para manter resultado"
    ],
    duration: "12 a 24 meses (casos leves a moderados)",
    faqs: [
      {
        question: "Tenho que usar o tempo todo?",
        answer: "Sim, 22h por dia. Só remove para comer e escovar. Uso inferior a 20h por dia atrasa o tratamento."
      },
      {
        question: "Resolve todos os casos?",
        answer: "Não. Casos severos com problemas de mordida complexos ainda precisam de aparelho fixo. Avaliamos seu caso na consulta."
      },
      {
        question: "As pessoas percebem que estou usando?",
        answer: "Muito pouco. Os alinhadores são transparentes e discretos. A maioria das pessoas não nota."
      }
    ]
  },

  // ENDODONTIA
  {
    id: "tratamento-canal",
    slug: "endodontia",
    category: "preventivo",
    name: "Tratamento de Canal",
    shortDescription: "Salve seu dente eliminando infecção e dor de forma definitiva",
    fullDescription: "Procedimento que remove a polpa dental infectada ou inflamada, limpa e desinfeta os canais radiculares e preenche com material biocompatível. Salva o dente evitando extração.",
    image: "/clinic/treatment-canal.jpg",
    forWhom: [
      "Dor de dente intensa e latejante",
      "Sensibilidade extrema ao quente/frio",
      "Inchaço ou abscesso na gengiva",
      "Dente escurecido após trauma"
    ],
    howItWorks: [
      "Anestesia local e isolamento do dente com lençol de borracha",
      "Abertura da coroa e acesso aos canais radiculares",
      "Remoção da polpa, limpeza e desinfecção com instrumentos rotatórios",
      "Preenchimento dos canais com material selador",
      "Restauração do dente e, se necessário, coroa protética"
    ],
    duration: "1 a 3 sessões de 60-90 minutos",
    faqs: [
      {
        question: "Dói fazer canal?",
        answer: "O procedimento é feito com anestesia. A dor que você sente antes é da infecção, que o tratamento elimina. Maioria dos pacientes relata alívio após primeira sessão."
      },
      {
        question: "Vou perder o dente?",
        answer: "Não! O objetivo do canal é justamente salvar o dente. Com tratamento bem feito e restauração adequada, o dente pode durar a vida toda."
      },
      {
        question: "Preciso de coroa depois?",
        answer: "Depende do dente. Molares e pré-molares (dentes de trás) geralmente precisam de coroa para proteção. Dentes da frente às vezes ficam bem só com restauração."
      }
    ]
  },

  // CIRURGIA
  {
    id: "extracao-siso",
    slug: "cirurgia",
    category: "urgencia",
    name: "Extração de Siso",
    shortDescription: "Remova dentes do siso inclusos ou mal posicionados com segurança",
    fullDescription: "Cirurgia para extração dos terceiros molares (sisos) que não nasceram corretamente, estão causando dor ou empurrando outros dentes. Procedimento ambulatorial com anestesia local.",
    image: "/clinic/treatment-canal.jpg",
    forWhom: [
      "Siso incluso ou semi-incluso causando dor",
      "Infecção recorrente ao redor do siso (pericoronarite)",
      "Siso empurrando demais dentes",
      "Indicação do ortodontista antes de iniciar aparelho"
    ],
    howItWorks: [
      "Avaliação com radiografia panorâmica ou tomografia",
      "Cirurgia com anestesia local (opção de sedação em casos específicos)",
      "Remoção do dente e sutura (quando necessário)",
      "Orientações pós-operatórias e prescrição de medicamentos",
      "Retorno em 7 dias para avaliar cicatrização e remover pontos"
    ],
    duration: "30 a 60 minutos por dente",
    faqs: [
      {
        question: "Dói muito depois?",
        answer: "Há desconforto nos primeiros 2-3 dias, controlado com analgésicos e anti-inflamatórios. Siga à risca repouso e compressas geladas nas primeiras 24h."
      },
      {
        question: "Quanto tempo de repouso?",
        answer: "Recomendamos 2-3 dias de repouso relativo. Evite esforço físico, sol e alimentos quentes nos primeiros dias."
      },
      {
        question: "Posso extrair os 4 sisos de uma vez?",
        answer: "Tecnicamente sim, mas geralmente fazemos 2 por vez (um lado) para você poder mastigar do outro lado durante recuperação."
      }
    ]
  },

  // PREVENTIVO
  {
    id: "limpeza-profilaxia",
    slug: "limpeza",
    category: "preventivo",
    name: "Limpeza Dental",
    shortDescription: "Mantenha dentes e gengivas saudáveis com limpeza profissional",
    fullDescription: "Procedimento que remove tártaro (cálculo dentário), placa bacteriana e manchas superficiais com ultrassom e instrumentos manuais. Essencial para prevenir cáries, gengivite e mau hálito.",
    image: "/clinic/treatment-limpeza.jpg",
    forWhom: [
      "Todos! Recomendado a cada 6 meses para manutenção",
      "Quem tem sangramento gengival ou tártaro visível",
      "Fumantes e pessoas com tendência a formar tártaro",
      "Antes de procedimentos como clareamento ou cirurgias"
    ],
    howItWorks: [
      "Remoção do tártaro com ultrassom (vibração que descoloca cálculo)",
      "Raspagem manual com curetas para áreas específicas",
      "Polimento com pasta profilática para remover manchas",
      "Aplicação de flúor para fortalecer esmalte",
      "Orientações sobre técnica de escovação e uso do fio dental"
    ],
    duration: "40 a 60 minutos",
    faqs: [
      {
        question: "Dói?",
        answer: "Geralmente não. Pacientes com sensibilidade ou gengivas inflamadas podem sentir desconforto leve. Em casos extremos podemos usar anestesia tópica."
      },
      {
        question: "Com que frequência devo fazer?",
        answer: "A cada 6 meses é o ideal para a maioria das pessoas. Pacientes com doença periodontal podem precisar de limpezas a cada 3-4 meses."
      },
      {
        question: "Limpeza remove manchas de café?",
        answer: "Sim, manchas superficiais saem com polimento. Manchas internas (no esmalte) precisam de clareamento."
      }
    ]
  }
];

// Categorias de tratamentos
export const TREATMENT_CATEGORIES = [
  { id: "preventivo", name: "Preventivo e Geral", icon: "shield-plus" },
  { id: "estetica", name: "Estética Dental", icon: "sparkles" },
  { id: "ortodontia", name: "Ortodontia", icon: "smile" },
  { id: "implantes", name: "Implantes", icon: "activity" },
  { id: "protese", name: "Próteses", icon: "layers" },
  { id: "urgencia", name: "Urgências", icon: "alert-circle" }
] as const;

// ========================================
// EQUIPE
// ========================================

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  cro: string;
  specialties: string[];
  bio: string;
  education: string[];
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    id: "dra-ana-paula",
    name: "Dra. Ana Paula Mendes",
    role: "Diretora Clínica e Implantodontista",
    cro: "CRO-RJ 28451", // DEMO
    specialties: ["Implantodontia", "Prótese", "Reabilitação Oral"],
    bio: "Fundou a Sorrir+ em 2015 após anos de experiência em clínicas de referência no Rio. É apaixonada por devolver a função mastigatória e autoestima aos pacientes através de implantes e próteses bem planejadas.",
    education: [
      "Graduação em Odontologia - UFRJ",
      "Especialização em Implantodontia - ABO-RJ",
      "Pós-graduação em Prótese Dentária - São Leopoldo Mandic"
    ],
    image: "/clinic/team-1.jpg"
  },
  {
    id: "dr-carlos-eduardo",
    name: "Dr. Carlos Eduardo Rocha",
    role: "Ortodontista",
    cro: "CRO-RJ 31204", // DEMO
    specialties: ["Ortodontia", "Alinhadores Invisíveis", "Ortopedia Facial"],
    bio: "Atua há mais de 12 anos com ortodontia. Acredita que cada caso é único e dedica tempo ao planejamento para entregar resultados previsíveis e duradouros. Atende crianças, adolescentes e adultos.",
    education: [
      "Graduação em Odontologia - UERJ",
      "Mestrado em Ortodontia - UFRJ",
      "Credenciamento Invisalign"
    ],
    image: "/clinic/team-2.jpg"
  },
  {
    id: "dra-marina-lima",
    name: "Dra. Marina Lima",
    role: "Dentista Estética",
    cro: "CRO-RJ 34782", // DEMO
    specialties: ["Dentística", "Clareamento", "Facetas e Lentes"],
    bio: "Especialista em harmonização do sorriso. Trabalha com planejamento digital (DSD) e materiais estéticos de última geração para criar sorrisos naturais e harmoniosos. Fez cursos com referências nacionais e internacionais.",
    education: [
      "Graduação em Odontologia - UFF",
      "Especialização em Dentística - ABO-RJ",
      "Curso de DSD (Digital Smile Design)"
    ],
    image: "/clinic/team-3.jpg"
  },
  {
    id: "dr-roberto-santos",
    name: "Dr. Roberto Santos",
    role: "Endodontista",
    cro: "CRO-RJ 26918", // DEMO
    specialties: ["Endodontia", "Tratamento de Canal", "Urgências"],
    bio: "Referência em casos complexos de endodontia. Usa microscopia e técnicas modernas que tornam o tratamento de canal mais confortável e previsível. É o profissional que nossos pacientes procuram quando estão com dor.",
    education: [
      "Graduação em Odontologia - UFRJ",
      "Especialização em Endodontia - UERJ",
      "Aperfeiçoamento em Microscopia Odontológica"
    ],
    image: "/clinic/team-4.jpg"
  }
];

// ========================================
// DEPOIMENTOS (mais realistas e detalhados)
// ========================================

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  text: string;
  rating: number;
  date: string;
  location?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mariana Costa",
    treatment: "Implante Dentário",
    text: "Depois de anos adiando, finalmente fiz meu implante com a Dra. Ana Paula. Ela explicou cada etapa com calma e o resultado ficou perfeito. Já indiquei pra minha mãe!",
    rating: 5,
    date: "Dezembro de 2024",
    location: "Ipanema"
  },
  {
    id: "2",
    name: "João Pedro L.",
    treatment: "Clareamento Dental",
    text: "Fiz o clareamento caseiro com a Dra. Marina. Resultado ficou muito natural, não manchou nem doeu. Valeu cada centavo!",
    rating: 5,
    date: "Novembro de 2024",
    location: "Copacabana"
  },
  {
    id: "3",
    name: "Fernanda Almeida",
    treatment: "Aparelho Ortodôntico",
    text: "Meu filho está adorando o tratamento com Dr. Carlos. Ele é super paciente e deixa escolher a cor das borrachinhas todo mês, então virou programa! 😊",
    rating: 5,
    date: "Outubro de 2024",
    location: "Leblon"
  },
  {
    id: "4",
    name: "Ricardo M.",
    treatment: "Tratamento de Canal",
    text: "Estava com dor insuportável e conseguiram me encaixar no mesmo dia. Dr. Roberto fez o canal e já saí sem dor. Não acreditei que seria tão tranquilo.",
    rating: 5,
    date: "Novembro de 2024",
    location: "Botafogo"
  },
  {
    id: "5",
    name: "Ana Beatriz S.",
    treatment: "Facetas em Porcelana",
    text: "Sempre tive vergonha de sorrir por causa de um dente manchado. A Dra. Marina fez 4 facetas e ficou incrivelmente natural. Ninguém percebe que são facetas, só acham que meu sorriso ficou bonito!",
    rating: 5,
    date: "Dezembro de 2024",
    location: "Ipanema"
  },
  {
    id: "6",
    name: "Paulo Henrique",
    treatment: "Limpeza + Restauração",
    text: "Fui pra limpeza de rotina e acabei fazendo uma restauração pequena no mesmo dia. Rápido, sem burocracia, preço justo. Aprovado!",
    rating: 5,
    date: "Setembro de 2024",
    location: "Gávea"
  },
  {
    id: "7",
    name: "Camila R.",
    treatment: "Prótese Protocolo",
    text: "Meu pai usava dentadura há anos e vivia reclamando. Fizemos a prótese protocolo e foi vida nova pra ele! Come de tudo agora e diz que deveria ter feito antes.",
    rating: 5,
    date: "Agosto de 2024",
    location: "Jardim Botânico"
  },
  {
    id: "8",
    name: "Lucas Oliveira",
    treatment: "Alinhadores Invisíveis",
    text: "Trabalho com atendimento ao público e não queria aparelho metálico. Os alinhadores foram perfeitos: ninguém percebe e meus dentes já estão bem alinhados em 8 meses.",
    rating: 5,
    date: "Outubro de 2024",
    location: "Centro"
  }
];

// ========================================
// FAQ
// ========================================

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Vocês atendem por convênio?",
    answer: "Sim! Trabalhamos com os principais convênios: Amil Dental, Bradesco Dental, SulAmérica Odonto, Unimed, Porto Seguro, MetLife e OdontoPrev. Entre em contato para confirmar se seu plano está coberto e quais procedimentos.",
    category: "pagamento"
  },
  {
    question: "Quais formas de pagamento aceitam?",
    answer: "Aceitamos dinheiro, PIX, cartão de débito e crédito (parcelamos em até 12x sem juros no cartão). Para tratamentos mais longos como implantes e ortodontia, oferecemos planos de pagamento facilitado.",
    category: "pagamento"
  },
  {
    question: "Como é a primeira consulta?",
    answer: "Na primeira consulta fazemos uma avaliação completa: exame clínico, radiografias (quando necessário) e conversamos sobre suas expectativas e histórico de saúde. Depois apresentamos o plano de tratamento com valores e prazos claros. A consulta avaliativa custa R$ 150 (particular) ou é coberta pelo convênio.",
    category: "geral"
  },
  {
    question: "Atendem urgências?",
    answer: "Sim! Se estiver com dor ou problema urgente, entre em contato pelo WhatsApp (21) 9999-9999 descrevendo a situação. Fazemos o possível para encaixar no mesmo dia ou no dia seguinte.",
    category: "urgencia"
  },
  {
    question: "O que levar na primeira consulta?",
    answer: "Documento com foto (RG ou CNH), carteirinha do convênio (se for usar) e radiografias recentes caso tenha. Se for menor de idade, precisa vir acompanhado de responsável.",
    category: "geral"
  },
  {
    question: "Tem estacionamento?",
    answer: "Temos convênio com o estacionamento localizado na mesma rua (Visconde de Pirajá). Peça o ticket na recepção para desconto. Também há opções de estacionamento público próximas e boa oferta de transporte público (metrô a 500m).",
    category: "geral"
  },
  {
    question: "Atendem crianças?",
    answer: "Sim! Atendemos crianças a partir de 2 anos. Temos profissionais com experiência em odontopediatria que tornam a consulta lúdica e tranquila. Primeira consulta é importante para criar vínculo positivo com o dentista.",
    category: "geral"
  },
  {
    question: "Quanto tempo dura cada consulta?",
    answer: "Consulta de avaliação: 30-40 min. Limpeza: 40-60 min. Procedimentos como restaurações: 45-90 min. Cirurgias e implantes: 1-2h. Sempre avisamos a duração estimada no agendamento.",
    category: "geral"
  },
  {
    question: "Posso parcelar tratamentos caros como implante?",
    answer: "Sim! Além do parcelamento no cartão, oferecemos planos internos para tratamentos acima de R$ 3.000. Conversamos sobre as opções na consulta de avaliação.",
    category: "pagamento"
  },
  {
    question: "Como funciona o protocolo de biossegurança?",
    answer: "Seguimos protocolos rigorosos: esterilização de instrumentos em autoclave, uso de materiais descartáveis sempre que possível, desinfecção de superfícies após cada paciente, luvas e máscaras trocadas a cada atendimento. Sua segurança é prioridade.",
    category: "geral"
  }
];

// Preferências de horário para agendamento
export const TIME_PREFERENCES = [
  "Manhã (8h-12h)",
  "Tarde (12h-17h)",
  "Final da tarde (17h-19h)",
  "Sábado (9h-14h)",
  "Qualquer horário"
] as const;
