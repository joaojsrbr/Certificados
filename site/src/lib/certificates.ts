export type CategoryType =
  | "Todas"
  | "Fullstack"
  | "Backend"
  | "Frontend"
  | "Mobile"
  | "Dados"
  | "Fundamentos"
  | "Gestão & TI";

export interface CertificateItem {
  id: string;
  name: string;
  institution: string;
  institutionKey:
    | "dio"
    | "descomplica"
    | "harvard"
    | "coursera"
    | "balta"
    | "cocacola"
    | "ifes"
    | "qualifica"
    | "sebrae";
  category: CategoryType;
  tags: string[];
  pdfUrl: string;
  highlight?: boolean;
  description?: string;
}

export interface InstitutionInfo {
  key: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  accentColor: string;
  badgeStyle: string;
  glowColor: string;
}

const GITHUB_BASE =
  "https://github.com/joaojsrbr/Certificados/blob/master";

function ghLink(path: string): string {
  return `${GITHUB_BASE}/${encodeURIComponent(path).replace(/%2F/g, "/")}`;
}

export const INSTITUTIONS: Record<string, InstitutionInfo> = {
  dio: {
    key: "dio",
    name: "Digital Innovation One (DIO)",
    shortName: "DIO / Santander",
    description: "Santander Bootcamp - Formação Fullstack Developer, Java & Spring Boot",
    icon: "🚀",
    accentColor: "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
    badgeStyle: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    glowColor: "rgba(139, 92, 246, 0.25)",
  },
  descomplica: {
    key: "descomplica",
    name: "Faculdade Descomplica",
    shortName: "Descomplica",
    description: "Cursos superiores em Arquitetura, Banco de Dados, Mobile e POO",
    icon: "🎓",
    accentColor: "from-blue-500/20 via-cyan-500/10 to-blue-500/20",
    badgeStyle: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
  harvard: {
    key: "harvard",
    name: "CC50 - Harvard University",
    shortName: "Harvard CC50",
    description: "Introdução à Ciência da Computação (CS50 de Harvard no Brasil)",
    icon: "🏛️",
    accentColor: "from-red-500/20 via-rose-500/10 to-orange-500/20",
    badgeStyle: "bg-red-500/15 text-red-300 border-red-500/30",
    glowColor: "rgba(239, 68, 68, 0.25)",
  },
  coursera: {
    key: "coursera",
    name: "Coursera & Google",
    shortName: "Coursera",
    description: "Google IT Support Professional Certificate",
    icon: "📘",
    accentColor: "from-sky-500/20 via-blue-500/10 to-cyan-500/20",
    badgeStyle: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    glowColor: "rgba(14, 165, 233, 0.25)",
  },
  balta: {
    key: "balta",
    name: "Balta.io",
    shortName: "Balta.io",
    description: "Especialização em Dart, Flutter Apps e Fundamentos de C#",
    icon: "💻",
    accentColor: "from-emerald-500/20 via-teal-500/10 to-emerald-500/20",
    badgeStyle: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  cocacola: {
    key: "cocacola",
    name: "Instituto Coca-Cola",
    shortName: "Coca-Cola",
    description: "Programa Coletivo Jovem & Formação Profissional",
    icon: "🥤",
    accentColor: "from-rose-500/20 via-red-500/10 to-pink-500/20",
    badgeStyle: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    glowColor: "rgba(244, 63, 94, 0.25)",
  },
  ifes: {
    key: "ifes",
    name: "Instituto Federal do Espírito Santo (IFES)",
    shortName: "IFES",
    description: "Simuladores de Redes, Infraestrutura e Formação Técnica",
    icon: "🏫",
    accentColor: "from-green-500/20 via-emerald-500/10 to-teal-500/20",
    badgeStyle: "bg-green-500/15 text-green-300 border-green-500/30",
    glowColor: "rgba(34, 197, 94, 0.25)",
  },
  qualifica: {
    key: "qualifica",
    name: "Qualifica ES",
    shortName: "Qualifica ES",
    description: "Programa Estadual de Formação Técnica em TI",
    icon: "📋",
    accentColor: "from-amber-500/20 via-yellow-500/10 to-orange-500/20",
    badgeStyle: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
  sebrae: {
    key: "sebrae",
    name: "Sebrae",
    shortName: "Sebrae",
    description: "Gestão Empresarial, Liderança e Gestão de Pessoas",
    icon: "📊",
    accentColor: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
    badgeStyle: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
};

export const ALL_CERTIFICATES: CertificateItem[] = [
  // --- DIO Santander Bootcamp (19) ---
  {
    id: "dio-bootcamp-fullstack",
    name: "Santander Bootcamp - Fullstack Developer",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fullstack",
    tags: ["Java", "Angular", "Spring Boot", "Fullstack", "PostgreSQL"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Santander Bootcamp - Fullstack Developer.pdf"
    ),
    highlight: true,
    description: "Formação completa cobrindo arquitetura de microsserviços, Java, Spring Boot, Angular e banco de dados relacional.",
  },
  {
    id: "dio-spring-cloud",
    name: "Construindo Microsserviços com Spring Cloud",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Spring Cloud", "Microsserviços", "Spring Boot", "Java"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Construindo um projeto com arquitetura baseada em microsserviços usando Spring Cloud.pdf"
    ),
    highlight: true,
    description: "Arquitetura distribuída com Service Discovery (Eureka), Config Server, API Gateway e tolerância a falhas.",
  },
  {
    id: "dio-spring-rest-pessoas",
    name: "API REST de Gestão de Pessoas com Spring Boot",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["REST API", "Spring Boot", "Java", "Clean Code"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Desenvolvendo um sistema de gerenciamento de pessoas em API REST com Spring Boot.pdf"
    ),
    description: "Desenvolvimento de endpoints RESTful com validações, DTOs e arquitetura em camadas.",
  },
  {
    id: "dio-spring-ponto",
    name: "Sistema de Controle de Ponto com Spring Boot",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Spring Boot", "Backend", "Java", "JPA"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Construindo um sistema de controle de ponto e acesso com Spring Boot.pdf"
    ),
    description: "Modelagem de regras de negócio complexas de jornada de trabalho e controle de acessos.",
  },
  {
    id: "dio-java-avancado",
    name: "Desenvolvimento Avançado em Java",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Java", "Design Patterns", "Paradigmas", "Performance"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Desenvolvimento avançado em Java.pdf"
    ),
    highlight: true,
    description: "Programação funcional em Java, Threads, inferência de tipos e boas práticas enterprise.",
  },
  {
    id: "dio-java-collections-streams",
    name: "Collections e Streams API com Java",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Java", "Collections", "Streams", "Lambdas"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Implementando Collections e Streams com Java.pdf"
    ),
    description: "Manipulação avançada de listas, conjuntos, mapas e pipeline funcional de dados com Streams.",
  },
  {
    id: "dio-java-basico",
    name: "Desenvolvimento Básico em Java",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Java", "POO", "Sintaxe", "Fundamentos"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Desenvolvimento básico em Java.pdf"
    ),
    description: "Orientação a objetos, herança, polimorfismo, interfaces e encapsulamento em Java.",
  },
  {
    id: "dio-java-desafios",
    name: "Resolvendo Desafios de Código em Java",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Java", "Algoritmos", "Lógica de Programação"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Resolvendo Desafios de Código em Java.pdf"
    ),
    description: "Resolução de problemas de algoritmos, complexidade de código e estruturas lógicas.",
  },
  {
    id: "dio-angular-avancado",
    name: "Aplicações Avançadas com Angular",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Frontend",
    tags: ["Angular", "TypeScript", "RxJS", "State Management"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Aplicações avançadas com Angular.pdf"
    ),
    highlight: true,
    description: "Arquitetura avançada de Single Page Applications, observables com RxJS e rotas complexas.",
  },
  {
    id: "dio-angular-tecnicas",
    name: "Técnicas Avançadas em Angular 8",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Frontend",
    tags: ["Angular", "TypeScript", "Componentes"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Técnicas avançadas em Angular 8.pdf"
    ),
    description: "Criação de componentes dinâmicos, custom directives, pipes e injeção de dependências.",
  },
  {
    id: "dio-angular-intro",
    name: "Introdução ao Angular 8",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Frontend",
    tags: ["Angular", "TypeScript", "Frontend SPA"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Introdução ao Angular 8.pdf"
    ),
    description: "Fundamentos do ecossistema Angular, data binding bidirecional e módulos.",
  },
  {
    id: "dio-banco-jdbc-jpa",
    name: "Banco de Dados com JDBC e JPA/Hibernate",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Dados",
    tags: ["JPA", "Hibernate", "JDBC", "SQL", "Java"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Trabalhando com Banco de Dados utilizando JDBC e JPA.pdf"
    ),
    highlight: true,
    description: "Mapeamento objeto-relacional (ORM), persistência relacional e transações em Java.",
  },
  {
    id: "dio-banco-postgres",
    name: "Conceitos e Melhores Práticas com PostgreSQL",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Dados",
    tags: ["PostgreSQL", "SQL", "Modelagem", "Queries"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/conceitos e melhores práticas com banco de dados PostgreSQL.pdf"
    ),
    description: "Otimização de consultas, índices, constraints e integridade relacional no PostgreSQL.",
  },
  {
    id: "dio-web-html-css",
    name: "Criação de Websites com HTML5 e CSS3",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "Semântica", "Design Responsivo"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Introdução a criação de websites com HTML5 E CSS3.pdf"
    ),
    description: "Estruturação semântica, estilização moderna com Flexbox e responsividade.",
  },
  {
    id: "dio-git-github",
    name: "Introdução ao Git e ao GitHub",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Git", "GitHub", "Versionamento", "DevOps"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Introdução ao Git e ao GitHub.pdf"
    ),
    description: "Controle de versão distribuído, branches, pull requests e colaboração no GitHub.",
  },
  {
    id: "dio-logica-programacao",
    name: "Lógica de Programação Essencial",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Lógica", "Algoritmos", "Fluxogramas"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Lógica de programação essencial.pdf"
    ),
    description: "Estruturas de controle de fluxo, laços de repetição e resolução algorítmica de problemas.",
  },
  {
    id: "dio-estrutura-dados",
    name: "Estrutura de Dados e Algoritmos",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Estrutura de Dados", "Pilhas", "Filas", "Complexidade"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Aprenda o que são Estrutura de Dados e Algoritmos.pdf"
    ),
    highlight: true,
    description: "Alocação de memória, pilhas, filas, nós encadeados e análise de algoritmos.",
  },
  {
    id: "dio-onboarding-1",
    name: "Bem-vindo à DIO",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Carreira Tech", "Comunidade"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Bem-vindo à DIO.pdf"
    ),
    description: "Imersão no ecossistema e trilha de desenvolvimento contínuo da DIO.",
  },
  {
    id: "dio-onboarding-2",
    name: "Boas-vindas ao Bootcamp Santander Fullstack",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Santander", "Bootcamp", "Fullstack"],
    pdfUrl: ghLink(
      "DIO/Santander Bootcamp - Fullstack Developer/Boas-vindas ao Bootcamp Santander Fullstack.pdf"
    ),
    description: "Abertura oficial e alinhamento de metas da trilha intensiva do Santander.",
  },

  // --- Descomplica (6) ---
  {
    id: "descomplica-db-dev",
    name: "DB Developer - Especialização em Banco de Dados",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Dados",
    tags: ["Banco de Dados", "SQL", "Modelagem ER", "DBA"],
    pdfUrl: ghLink("Descomplica/DB Developer.pdf"),
    highlight: true,
    description: "Formação superior voltada para design de esquemas, normalização e otimização de bancos relacionais.",
  },
  {
    id: "descomplica-mobile-dev",
    name: "Mobile Developer - Desenvolvimento Mobile",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Mobile",
    tags: ["Mobile", "Android", "UI Mobile", "APIs"],
    pdfUrl: ghLink("Descomplica/Mobile Developer.pdf"),
    highlight: true,
    description: "Desenvolvimento de aplicativos para dispositivos móveis, ciclo de vida e integração com serviços.",
  },
  {
    id: "descomplica-oop-dev",
    name: "Object-Oriented Developer (POO)",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Backend",
    tags: ["POO", "Arquitetura de Software", "Clean Code", "SOLID"],
    pdfUrl: ghLink("Descomplica/Object-Oriented Developer.pdf"),
    highlight: true,
    description: "Aprofundamento conceitual e prático em princípios de orientação a objetos e boas práticas de código.",
  },
  {
    id: "descomplica-smart-data",
    name: "Smart Data Structures",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Fundamentos",
    tags: ["Estrutura de Dados", "Grafos", "Árvores", "Performance"],
    pdfUrl: ghLink("Descomplica/Smart Data Structures.pdf"),
    highlight: true,
    description: "Estruturas de dados inteligentes, tabelas hash, árvores binárias e algoritmos eficientes.",
  },
  {
    id: "descomplica-arq-comp",
    name: "Arquitetura e Organização de Computadores",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Fundamentos",
    tags: ["Hardware", "CPU", "Memória", "Sistemas Operacionais"],
    pdfUrl: ghLink("Descomplica/ARQUITETURA E ORGANIZAÇÃO DE.pdf"),
    description: "Funcionamento interno de processadores, barramentos, registradores e hierarquia de memória.",
  },
  {
    id: "descomplica-participacao",
    name: "Certificado de Participação Acadêmica",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Gestão & TI",
    tags: ["Acadêmico", "Extensão", "Tecnologia"],
    pdfUrl: ghLink(
      "Descomplica/Certificado de Participação - João Vitor Da Silva Rocha.pdf"
    ),
    description: "Participação em seminários e eventos acadêmicos da faculdade de tecnologia.",
  },

  // --- Harvard CC50 (1) ---
  {
    id: "harvard-cc50",
    name: "CC50: Introdução à Ciência da Computação",
    institution: "CC50 - Harvard University",
    institutionKey: "harvard",
    category: "Fundamentos",
    tags: ["Harvard", "C", "Python", "Algoritmos", "Ciência da Computação"],
    pdfUrl: ghLink(
      "CC50 Introdução à Ciência da Computação/course-84414-frsxc.pdf"
    ),
    highlight: true,
    description: "Versão brasileira do lendário CS50 da Universidade de Harvard: pensamento computacional, algoritmos em C e abstrações de dados.",
  },

  // --- Coursera Google (1) ---
  {
    id: "coursera-google-it",
    name: "Fundamentos do Suporte Técnico (Google IT)",
    institution: "Coursera & Google",
    institutionKey: "coursera",
    category: "Gestão & TI",
    tags: ["Google", "TI", "Suporte", "Hardware", "Troubleshooting"],
    pdfUrl: ghLink("Coursera/Coursera Y5EQEW7YR2PM.pdf"),
    highlight: true,
    description: "Certificação profissional desenvolvida pelo Google abordando resolução de problemas, redes, sistemas operacionais e atendimento ao cliente.",
  },

  // --- Balta.io (3) ---
  {
    id: "balta-flutter-app",
    name: "Criando seu Primeiro App com Flutter",
    institution: "Balta.io",
    institutionKey: "balta",
    category: "Mobile",
    tags: ["Flutter", "Dart", "Mobile", "Cross-Platform"],
    pdfUrl: ghLink("Baita.io/Flutter/Criando seu primeiro App com Flutter.pdf"),
    highlight: true,
    description: "Construção de aplicações multiplataforma fluidas e reativas com Flutter e widgets modernos.",
  },
  {
    id: "balta-dart-logica",
    name: "Lógica de Programação com Dart",
    institution: "Balta.io",
    institutionKey: "balta",
    category: "Mobile",
    tags: ["Dart", "Lógica", "Sintaxe Moderna"],
    pdfUrl: ghLink("Baita.io/Dart/Lógica de programação com Dart - balta.io.pdf"),
    description: "Fundamentos essenciais da linguagem Dart para suporte a aplicações Flutter modernas.",
  },
  {
    id: "balta-csharp-fundamentos",
    name: "Fundamentos do C#",
    institution: "Balta.io",
    institutionKey: "balta",
    category: "Backend",
    tags: ["C#", ".NET", "POO", "Backend"],
    pdfUrl: ghLink("Baita.io/C Sharp/fundamentos do C Sharp.pdf"),
    description: "Estruturas do C#, tipagem estática forte, classes e paradigmas da plataforma .NET.",
  },

  // --- Coca-Cola (2) ---
  {
    id: "cocacola-coletivo-online",
    name: "Programa Coletivo Online",
    institution: "Instituto Coca-Cola",
    institutionKey: "cocacola",
    category: "Gestão & TI",
    tags: ["Desenvolvimento Profissional", "Planejamento", "Comunicação"],
    pdfUrl: ghLink("Coca-Cola/Coca-Cola.pdf"),
    description: "Capacitação para o mercado de trabalho com ênfase em comunicação assertiva e metas profissionais.",
  },
  {
    id: "cocacola-conclusao",
    name: "Certificado de Conclusão - Coletivo Jovem",
    institution: "Instituto Coca-Cola",
    institutionKey: "cocacola",
    category: "Gestão & TI",
    tags: ["Carreira", "Liderança", "Soft Skills"],
    pdfUrl: ghLink(
      "Coca-Cola/Certificado de conclusão - João Vitor da Silva Rocha.pdf"
    ),
    description: "Conclusão com mérito de capacitação socioemocional e formação corporativa.",
  },

  // --- IFES (2) ---
  {
    id: "ifes-redes-simuladores",
    name: "Introdução aos Simuladores de Redes",
    institution: "Instituto Federal do Espírito Santo (IFES)",
    institutionKey: "ifes",
    category: "Fundamentos",
    tags: ["Redes", "Cisco", "Topologia", "Infraestrutura"],
    pdfUrl: ghLink("Ifes/INTRODUÇÃO AOS SIMULADORES DE REDES.pdf"),
    highlight: true,
    description: "Simulação de topologias de rede, roteamento de pacotes, endereçamento IP e diagnóstico de conexões.",
  },
  {
    id: "ifes-certificado-geral",
    name: "Certificado de Capacitação Técnica IFES",
    institution: "Instituto Federal do Espírito Santo (IFES)",
    institutionKey: "ifes",
    category: "Gestão & TI",
    tags: ["IFES", "Tecnologia", "Extensão"],
    pdfUrl: ghLink("Ifes/Certificado ifes.pdf"),
    description: "Participação e conclusão de módulos de qualificação técnica da instituição federal.",
  },

  // --- Qualifica ES (1) ---
  {
    id: "qualifica-assistente-ti",
    name: "Assistente de Tecnologia da Informação",
    institution: "Qualifica ES",
    institutionKey: "qualifica",
    category: "Gestão & TI",
    tags: ["Suporte Técnico", "Redes", "TI", "Manutenção"],
    pdfUrl: ghLink("qualifica es/Assistente de tecnologia da informação.pdf"),
    highlight: true,
    description: "Qualificação governamental em manutenção preventiva, suporte a usuários, redes locais e sistemas corporativos.",
  },

  // --- Sebrae (1) ---
  {
    id: "sebrae-gestao-pessoas",
    name: "Gestão de Pessoas e Liderança",
    institution: "Sebrae",
    institutionKey: "sebrae",
    category: "Gestão & TI",
    tags: ["Liderança", "Gestão de Pessoas", "Soft Skills", "Trabalho em Equipe"],
    pdfUrl: ghLink("Sebrae/Gestão de pessoas.pdf"),
    description: "Liderança participativa, inteligência emocional e gestão de conflitos no ambiente corporativo.",
  },
];

export const CATEGORIES: CategoryType[] = [
  "Todas",
  "Fullstack",
  "Backend",
  "Frontend",
  "Mobile",
  "Dados",
  "Fundamentos",
  "Gestão & TI",
];

export const TECH_BADGES = [
  { name: "Java", color: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
  { name: "Spring Boot", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
  { name: "Angular", color: "bg-red-500/15 text-red-300 border-red-500/30" },
  { name: "TypeScript", color: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
  { name: "Flutter", color: "bg-sky-500/15 text-sky-300 border-sky-500/30" },
  { name: "Dart", color: "bg-teal-500/15 text-teal-300 border-teal-500/30" },
  { name: "PostgreSQL", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30" },
  { name: "C#", color: "bg-purple-500/15 text-purple-300 border-purple-500/30" },
  { name: "Git & GitHub", color: "bg-orange-500/15 text-orange-300 border-orange-500/30" },
];
