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
  fileName: string;
  highlight?: boolean;
  description?: string;
}

export interface InstitutionInfo {
  key: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  badgeStyle: string;
  glowColor: string;
}

function pdfPath(subpath: string): string {
  // Caminho local com basePath /Certificados para servir diretamente o arquivo PDF nativo
  // sem redirecionar para a interface web do GitHub
  return `/Certificados/pdfs/${subpath.replace(/\\/g, "/")}`;
}

export const INSTITUTIONS: Record<string, InstitutionInfo> = {
  dio: {
    key: "dio",
    name: "Digital Innovation One (DIO)",
    shortName: "DIO / Santander",
    description: "Santander Bootcamp - Formação Fullstack Developer, Java, Spring Boot e Angular",
    icon: "🚀",
    badgeStyle: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
    glowColor: "rgba(99, 102, 241, 0.25)",
  },
  descomplica: {
    key: "descomplica",
    name: "Faculdade Descomplica",
    shortName: "Descomplica",
    description: "Cursos superiores em Arquitetura, Banco de Dados, Mobile e Programação Orientada a Objetos",
    icon: "🎓",
    badgeStyle: "bg-sky-500/10 text-sky-300 border-sky-500/25",
    glowColor: "rgba(14, 165, 233, 0.25)",
  },
  harvard: {
    key: "harvard",
    name: "CC50 - Harvard University",
    shortName: "Harvard CC50",
    description: "Introdução à Ciência da Computação (Versão brasileira do CS50 de Harvard)",
    icon: "🏛️",
    badgeStyle: "bg-rose-500/10 text-rose-300 border-rose-500/25",
    glowColor: "rgba(244, 63, 94, 0.25)",
  },
  coursera: {
    key: "coursera",
    name: "Coursera & Google",
    shortName: "Coursera / Google",
    description: "Certificado Profissional de Suporte em TI do Google",
    icon: "📘",
    badgeStyle: "bg-blue-500/10 text-blue-300 border-blue-500/25",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
  balta: {
    key: "balta",
    name: "Balta.io",
    shortName: "Balta.io",
    description: "Cursos especializados em Dart, Flutter Mobile e Fundamentos de C#",
    icon: "💻",
    badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  cocacola: {
    key: "cocacola",
    name: "Instituto Coca-Cola",
    shortName: "Coca-Cola",
    description: "Programa Coletivo Jovem & Formação Corporativa",
    icon: "🥤",
    badgeStyle: "bg-red-500/10 text-red-300 border-red-500/25",
    glowColor: "rgba(239, 68, 68, 0.25)",
  },
  ifes: {
    key: "ifes",
    name: "Instituto Federal do Espírito Santo (IFES)",
    shortName: "IFES",
    description: "Simuladores de Redes, Infraestrutura e Formação Técnica Federal",
    icon: "🏫",
    badgeStyle: "bg-teal-500/10 text-teal-300 border-teal-500/25",
    glowColor: "rgba(20, 184, 166, 0.25)",
  },
  qualifica: {
    key: "qualifica",
    name: "Qualifica ES",
    shortName: "Qualifica ES",
    description: "Programa Estadual de Qualificação Profissional em Tecnologia da Informação",
    icon: "📋",
    badgeStyle: "bg-amber-500/10 text-amber-300 border-amber-500/25",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
  sebrae: {
    key: "sebrae",
    name: "Sebrae",
    shortName: "Sebrae",
    description: "Gestão Empresarial, Liderança de Equipes e Gestão de Pessoas",
    icon: "📊",
    badgeStyle: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
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
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Santander Bootcamp - Fullstack Developer.pdf"),
    fileName: "Santander Bootcamp - Fullstack Developer.pdf",
    highlight: true,
    description: "Formação integral intensiva cobrindo arquitetura de microsserviços, Java Enterprise, Spring Boot, Angular e bancos relacionais.",
  },
  {
    id: "dio-spring-cloud",
    name: "Construindo Microsserviços com Spring Cloud",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Spring Cloud", "Microsserviços", "Spring Boot", "Java"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Construindo um projeto com arquitetura baseada em microsserviços usando Spring Cloud.pdf"),
    fileName: "Construindo um projeto com arquitetura baseada em microsserviços usando Spring Cloud.pdf",
    highlight: true,
    description: "Implementação de arquitetura distribuída com Service Discovery (Eureka), Config Server, API Gateway e tolerância a falhas.",
  },
  {
    id: "dio-spring-rest-pessoas",
    name: "API REST de Gestão de Pessoas com Spring Boot",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["REST API", "Spring Boot", "Java", "Swagger"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Desenvolvendo um sistema de gerenciamento de pessoas em API REST com Spring Boot.pdf"),
    fileName: "Desenvolvendo um sistema de gerenciamento de pessoas em API REST com Spring Boot.pdf",
    description: "Construção de API RESTful com arquitetura em camadas, validações avançadas de DTOs e testes.",
  },
  {
    id: "dio-spring-ponto",
    name: "Sistema de Controle de Ponto e Acesso com Spring Boot",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Spring Boot", "Backend", "Java", "JPA"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Construindo um sistema de controle de ponto e acesso com Spring Boot.pdf"),
    fileName: "Construindo um sistema de controle de ponto e acesso com Spring Boot.pdf",
    description: "Modelagem de regras de negócio de jornada de trabalho corporativa, controle de acessos e persistência relacional.",
  },
  {
    id: "dio-java-avancado",
    name: "Desenvolvimento Avançado em Java",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Java", "Design Patterns", "Paradigmas", "Performance"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Desenvolvimento avançado em Java.pdf"),
    fileName: "Desenvolvimento avançado em Java.pdf",
    highlight: true,
    description: "Programação funcional em Java, Threads, inferência de tipos, Streams e boas práticas enterprise.",
  },
  {
    id: "dio-java-collections-streams",
    name: "Implementando Collections e Streams com Java",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Java", "Collections", "Streams API", "Lambdas"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Implementando Collections e Streams com Java.pdf"),
    fileName: "Implementando Collections e Streams com Java.pdf",
    description: "Manipulação avançada de estruturas de dados, Lists, Sets, Maps e pipeline funcional com Streams.",
  },
  {
    id: "dio-java-basico",
    name: "Desenvolvimento Básico em Java",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Java", "POO", "Sintaxe", "Fundamentos"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Desenvolvimento básico em Java.pdf"),
    fileName: "Desenvolvimento básico em Java.pdf",
    description: "Conceitos fundamentais da linguagem Java, encapsulamento, herança e polimorfismo.",
  },
  {
    id: "dio-java-desafios",
    name: "Resolvendo Desafios de Código em Java",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Backend",
    tags: ["Java", "Algoritmos", "Lógica de Programação"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Resolvendo Desafios de Código em Java.pdf"),
    fileName: "Resolvendo Desafios de Código em Java.pdf",
    description: "Resolução de desafios algorítmicos complexos e otimização de tempo e espaço computacional.",
  },
  {
    id: "dio-angular-avancado",
    name: "Aplicações Avançadas com Angular",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Frontend",
    tags: ["Angular", "TypeScript", "RxJS", "State Management"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Aplicações avançadas com Angular.pdf"),
    fileName: "Aplicações avançadas com Angular.pdf",
    highlight: true,
    description: "Arquitetura avançada de Single Page Applications, observables reativos com RxJS e rotas protegidas.",
  },
  {
    id: "dio-angular-tecnicas",
    name: "Técnicas Avançadas em Angular 8",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Frontend",
    tags: ["Angular", "TypeScript", "Componentes"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Técnicas avançadas em Angular 8.pdf"),
    fileName: "Técnicas avançadas em Angular 8.pdf",
    description: "Componentização dinâmica, injeção de dependências e custom directives no ecossistema Angular.",
  },
  {
    id: "dio-angular-intro",
    name: "Introdução ao Angular 8",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Frontend",
    tags: ["Angular", "TypeScript", "Frontend SPA"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Introdução ao Angular 8.pdf"),
    fileName: "Introdução ao Angular 8.pdf",
    description: "Fundamentos do framework Angular, data binding bidirecional, diretivas e criação de módulos.",
  },
  {
    id: "dio-banco-jdbc-jpa",
    name: "Trabalhando com Banco de Dados utilizando JDBC e JPA",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Dados",
    tags: ["JPA", "Hibernate", "JDBC", "SQL", "Java"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Trabalhando com Banco de Dados utilizando JDBC e JPA.pdf"),
    fileName: "Trabalhando com Banco de Dados utilizando JDBC e JPA.pdf",
    highlight: true,
    description: "Mapeamento Objeto-Relacional (ORM), persistência relacional, queries HQL/JPQL e transações.",
  },
  {
    id: "dio-banco-postgres",
    name: "Conceitos e Melhores Práticas com PostgreSQL",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Dados",
    tags: ["PostgreSQL", "SQL", "Modelagem", "Queries"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/conceitos e melhores práticas com banco de dados PostgreSQL.pdf"),
    fileName: "conceitos e melhores práticas com banco de dados PostgreSQL.pdf",
    description: "Modelagem relacional eficiente, criação de índices, integridade referencial e boas práticas com PostgreSQL.",
  },
  {
    id: "dio-web-html-css",
    name: "Introdução à Criação de Websites com HTML5 e CSS3",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "Design Responsivo", "Semântica"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Introdução a criação de websites com HTML5 E CSS3.pdf"),
    fileName: "Introdução a criação de websites com HTML5 E CSS3.pdf",
    description: "Estruturação semântica, responsividade com Flexbox, estilização moderna e acessibilidade na web.",
  },
  {
    id: "dio-git-github",
    name: "Introdução ao Git e ao GitHub",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Git", "GitHub", "Versionamento", "DevOps"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Introdução ao Git e ao GitHub.pdf"),
    fileName: "Introdução ao Git e ao GitHub.pdf",
    description: "Controle de versão distribuído, fluxo de branches, pull requests e boas práticas de colaboração.",
  },
  {
    id: "dio-logica-programacao",
    name: "Lógica de Programação Essencial",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Lógica", "Algoritmos", "Fluxogramas"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Lógica de programação essencial.pdf"),
    fileName: "Lógica de programação essencial.pdf",
    description: "Algoritmos essenciais, estruturas de decisão, repetição e estruturação do raciocínio lógico.",
  },
  {
    id: "dio-estrutura-dados",
    name: "Aprenda o que são Estrutura de Dados e Algoritmos",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Estrutura de Dados", "Pilhas", "Filas", "Complexidade"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Aprenda o que são Estrutura de Dados e Algoritmos.pdf"),
    fileName: "Aprenda o que são Estrutura de Dados e Algoritmos.pdf",
    highlight: true,
    description: "Alocação de memória, encadeamento, pilhas, filas e análise de complexidade assintótica.",
  },
  {
    id: "dio-onboarding-1",
    name: "Bem-vindo à DIO",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Carreira Tech", "Comunidade"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Bem-vindo à DIO.pdf"),
    fileName: "Bem-vindo à DIO.pdf",
    description: "Imersão no ecossistema e trilha de desenvolvimento contínuo da DIO.",
  },
  {
    id: "dio-onboarding-2",
    name: "Boas-vindas ao Bootcamp Santander Fullstack",
    institution: "Digital Innovation One (DIO)",
    institutionKey: "dio",
    category: "Fundamentos",
    tags: ["Santander", "Bootcamp", "Fullstack"],
    pdfUrl: pdfPath("DIO/Santander Bootcamp - Fullstack Developer/Boas-vindas ao Bootcamp Santander Fullstack.pdf"),
    fileName: "Boas-vindas ao Bootcamp Santander Fullstack.pdf",
    description: "Abertura oficial e alinhamento do programa de alta performance Santander Fullstack.",
  },

  // --- Descomplica (6) ---
  {
    id: "descomplica-db-dev",
    name: "DB Developer - Especialização em Banco de Dados",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Dados",
    tags: ["Banco de Dados", "SQL", "Modelagem ER", "DBA"],
    pdfUrl: pdfPath("Descomplica/DB Developer.pdf"),
    fileName: "DB Developer.pdf",
    highlight: true,
    description: "Especialização superior em modelagem de esquemas relacionais, normalização de dados e otimização de consultas SQL.",
  },
  {
    id: "descomplica-mobile-dev",
    name: "Mobile Developer - Desenvolvimento Mobile",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Mobile",
    tags: ["Mobile", "Android", "UI Mobile", "APIs"],
    pdfUrl: pdfPath("Descomplica/Mobile Developer.pdf"),
    fileName: "Mobile Developer.pdf",
    highlight: true,
    description: "Desenvolvimento de aplicações para smartphones, ciclo de vida de apps e consumo de APIs REST.",
  },
  {
    id: "descomplica-oop-dev",
    name: "Object-Oriented Developer (POO)",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Backend",
    tags: ["POO", "Arquitetura de Software", "Clean Code", "SOLID"],
    pdfUrl: pdfPath("Descomplica/Object-Oriented Developer.pdf"),
    fileName: "Object-Oriented Developer.pdf",
    highlight: true,
    description: "Arquitetura orientada a objetos de nível enterprise, princípios SOLID e padrões de design limpos.",
  },
  {
    id: "descomplica-smart-data",
    name: "Smart Data Structures",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Fundamentos",
    tags: ["Estrutura de Dados", "Grafos", "Árvores", "Performance"],
    pdfUrl: pdfPath("Descomplica/Smart Data Structures.pdf"),
    fileName: "Smart Data Structures.pdf",
    highlight: true,
    description: "Estruturas de dados inteligentes, algoritmos de busca e ordenação, grafos e árvores binárias.",
  },
  {
    id: "descomplica-arq-comp",
    name: "Arquitetura e Organização de Computadores",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Fundamentos",
    tags: ["Hardware", "CPU", "Memória", "Sistemas Operacionais"],
    pdfUrl: pdfPath("Descomplica/ARQUITETURA E ORGANIZAÇÃO DE.pdf"),
    fileName: "ARQUITETURA E ORGANIZAÇÃO DE.pdf",
    description: "Estrutura interna dos computadores, unidades lógicas e aritméticas, pipeline e hierarquia de memória.",
  },
  {
    id: "descomplica-participacao",
    name: "Certificado de Participação Acadêmica",
    institution: "Faculdade Descomplica",
    institutionKey: "descomplica",
    category: "Gestão & TI",
    tags: ["Acadêmico", "Extensão", "Tecnologia"],
    pdfUrl: pdfPath("Descomplica/Certificado de Participação - João Vitor Da Silva Rocha.pdf"),
    fileName: "Certificado de Participação - João Vitor Da Silva Rocha.pdf",
    description: "Participação em jornadas de qualificação e extensão tecnológica universitária.",
  },

  // --- Harvard CC50 (1) ---
  {
    id: "harvard-cc50",
    name: "CC50: Introdução à Ciência da Computação",
    institution: "CC50 - Harvard University",
    institutionKey: "harvard",
    category: "Fundamentos",
    tags: ["Harvard", "C", "Python", "Algoritmos", "CS50"],
    pdfUrl: pdfPath("CC50 Introdução à Ciência da Computação/course-84414-frsxc.pdf"),
    fileName: "course-84414-frsxc.pdf",
    highlight: true,
    description: "Versão oficial brasileira do CS50 da Harvard University: rigor conceitual em C, gerenciamento de memória, algoritmos e ciência da computação pura.",
  },

  // --- Coursera Google (1) ---
  {
    id: "coursera-google-it",
    name: "Fundamentos do Suporte Técnico (Google IT)",
    institution: "Coursera & Google",
    institutionKey: "coursera",
    category: "Gestão & TI",
    tags: ["Google", "TI", "Suporte", "Hardware", "Troubleshooting"],
    pdfUrl: pdfPath("Coursera/Coursera Y5EQEW7YR2PM.pdf"),
    fileName: "Coursera Y5EQEW7YR2PM.pdf",
    highlight: true,
    description: "Certificado profissional emitido pelo Google através do Coursera: resolução de problemas, redes, sistemas operacionais e infraestrutura.",
  },

  // --- Balta.io (3) ---
  {
    id: "balta-flutter-app",
    name: "Criando seu Primeiro App com Flutter",
    institution: "Balta.io",
    institutionKey: "balta",
    category: "Mobile",
    tags: ["Flutter", "Dart", "Mobile", "Cross-Platform"],
    pdfUrl: pdfPath("Baita.io/Flutter/Criando seu primeiro App com Flutter.pdf"),
    fileName: "Criando seu primeiro App com Flutter.pdf",
    highlight: true,
    description: "Construção de aplicações multiplataforma reativas com o framework Flutter e ecossistema Dart.",
  },
  {
    id: "balta-dart-logica",
    name: "Lógica de Programação com Dart",
    institution: "Balta.io",
    institutionKey: "balta",
    category: "Mobile",
    tags: ["Dart", "Lógica", "Sintaxe Moderna"],
    pdfUrl: pdfPath("Baita.io/Dart/Lógica de programação com Dart - balta.io.pdf"),
    fileName: "Lógica de programação com Dart - balta.io.pdf",
    description: "Sintaxe moderna da linguagem Dart, tipagem estática e programação funcional para Flutter.",
  },
  {
    id: "balta-csharp-fundamentos",
    name: "Fundamentos do C#",
    institution: "Balta.io",
    institutionKey: "balta",
    category: "Backend",
    tags: ["C#", ".NET", "POO", "Backend"],
    pdfUrl: pdfPath("Baita.io/C Sharp/fundamentos do C Sharp.pdf"),
    fileName: "fundamentos do C Sharp.pdf",
    description: "Bases da plataforma Microsoft .NET, orientação a objetos com C# e tipos de referência.",
  },

  // --- Coca-Cola (2) ---
  {
    id: "cocacola-coletivo-online",
    name: "Programa Coletivo Online",
    institution: "Instituto Coca-Cola",
    institutionKey: "cocacola",
    category: "Gestão & TI",
    tags: ["Comunicação", "Carreira", "Planejamento"],
    pdfUrl: pdfPath("Coca-Cola/Coca-Cola.pdf"),
    fileName: "Coca-Cola.pdf",
    description: "Desenvolvimento de competências para inserção no mercado corporativo e comunicação.",
  },
  {
    id: "cocacola-conclusao",
    name: "Certificado de Conclusão - Coletivo Jovem",
    institution: "Instituto Coca-Cola",
    institutionKey: "cocacola",
    category: "Gestão & TI",
    tags: ["Liderança", "Carreira", "Soft Skills"],
    pdfUrl: pdfPath("Coca-Cola/Certificado de conclusão - João Vitor da Silva Rocha.pdf"),
    fileName: "Certificado de conclusão - João Vitor da Silva Rocha.pdf",
    description: "Conclusão com mérito de capacitação socioemocional e postura profissional corporativa.",
  },

  // --- IFES (2) ---
  {
    id: "ifes-redes-simuladores",
    name: "Introdução aos Simuladores de Redes",
    institution: "Instituto Federal do Espírito Santo (IFES)",
    institutionKey: "ifes",
    category: "Fundamentos",
    tags: ["Redes", "Cisco", "Topologia", "Infraestrutura"],
    pdfUrl: pdfPath("Ifes/INTRODUÇÃO AOS SIMULADORES DE REDES.pdf"),
    fileName: "INTRODUÇÃO AOS SIMULADORES DE REDES.pdf",
    highlight: true,
    description: "Configuração de topologias de rede, roteamento de pacotes, endereçamento IP e simulação com Cisco Packet Tracer.",
  },
  {
    id: "ifes-certificado-geral",
    name: "Certificado de Extensão Técnica IFES",
    institution: "Instituto Federal do Espírito Santo (IFES)",
    institutionKey: "ifes",
    category: "Gestão & TI",
    tags: ["IFES", "Tecnologia", "Extensão"],
    pdfUrl: pdfPath("Ifes/Certificado ifes.pdf"),
    fileName: "Certificado ifes.pdf",
    description: "Qualificação técnica e extensão comunitária emitida pelo Instituto Federal do Espírito Santo.",
  },

  // --- Qualifica ES (1) ---
  {
    id: "qualifica-assistente-ti",
    name: "Assistente de Tecnologia da Informação",
    institution: "Qualifica ES",
    institutionKey: "qualifica",
    category: "Gestão & TI",
    tags: ["Suporte Técnico", "Redes", "TI", "Manutenção"],
    pdfUrl: pdfPath("qualifica es/Assistente de tecnologia da informação.pdf"),
    fileName: "Assistente de tecnologia da informação.pdf",
    highlight: true,
    description: "Qualificação profissional estadual em manutenção de computadores, redes locais, suporte ao usuário e sistemas operacionais.",
  },

  // --- Sebrae (1) ---
  {
    id: "sebrae-gestao-pessoas",
    name: "Gestão de Pessoas e Liderança",
    institution: "Sebrae",
    institutionKey: "sebrae",
    category: "Gestão & TI",
    tags: ["Liderança", "Gestão de Pessoas", "Soft Skills", "Trabalho em Equipe"],
    pdfUrl: pdfPath("Sebrae/Gestão de pessoas.pdf"),
    fileName: "Gestão de pessoas.pdf",
    description: "Práticas modernas de liderança participativa, gestão de conflitos, motivação e trabalho em equipe.",
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
  { name: "Java", color: "bg-amber-500/10 text-amber-300 border-amber-500/25" },
  { name: "Spring Boot", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25" },
  { name: "Angular", color: "bg-rose-500/10 text-rose-300 border-rose-500/25" },
  { name: "TypeScript", color: "bg-sky-500/10 text-sky-300 border-sky-500/25" },
  { name: "Flutter", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25" },
  { name: "Dart", color: "bg-teal-500/10 text-teal-300 border-teal-500/25" },
  { name: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25" },
  { name: "C#", color: "bg-purple-500/10 text-purple-300 border-purple-500/25" },
  { name: "Git & GitHub", color: "bg-orange-500/10 text-orange-300 border-orange-500/25" },
];
