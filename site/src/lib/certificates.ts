export interface Certificate {
  name: string;
  pdfUrl: string;
}

export interface CertificateGroup {
  institution: string;
  description: string;
  color: string;
  icon: string;
  certificates: Certificate[];
}

const GITHUB_BASE =
  "https://github.com/joaojsrbr/Certificados/blob/master";

function ghLink(path: string): string {
  return `${GITHUB_BASE}/${encodeURIComponent(path).replace(/%2F/g, "/")}`;
}

export const certificateGroups: CertificateGroup[] = [
  {
    institution: "DIO - Digital Innovation One",
    description: "Santander Bootcamp - Fullstack Developer",
    color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    icon: "🚀",
    certificates: [
      {
        name: "Santander Bootcamp - Fullstack Developer",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Santander Bootcamp - Fullstack Developer.pdf"
        ),
      },
      {
        name: "Aplicações avançadas com Angular",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Aplicações avançadas com Angular.pdf"
        ),
      },
      {
        name: "Técnicas avançadas em Angular 8",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Técnicas avançadas em Angular 8.pdf"
        ),
      },
      {
        name: "Introdução ao Angular 8",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Introdução ao Angular 8.pdf"
        ),
      },
      {
        name: "Desenvolvimento avançado em Java",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Desenvolvimento avançado em Java.pdf"
        ),
      },
      {
        name: "Desenvolvimento básico em Java",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Desenvolvimento básico em Java.pdf"
        ),
      },
      {
        name: "Implementando Collections e Streams com Java",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Implementando Collections e Streams com Java.pdf"
        ),
      },
      {
        name: "Resolvendo Desafios de Código em Java",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Resolvendo Desafios de Código em Java.pdf"
        ),
      },
      {
        name: "Construindo um projeto com arquitetura baseada em microsserviços usando Spring Cloud",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Construindo um projeto com arquitetura baseada em microsserviços usando Spring Cloud.pdf"
        ),
      },
      {
        name: "Construindo um sistema de controle de ponto e acesso com Spring Boot",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Construindo um sistema de controle de ponto e acesso com Spring Boot.pdf"
        ),
      },
      {
        name: "Desenvolvendo um sistema de gerenciamento de pessoas em API REST com Spring Boot",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Desenvolvendo um sistema de gerenciamento de pessoas em API REST com Spring Boot.pdf"
        ),
      },
      {
        name: "Trabalhando com Banco de Dados utilizando JDBC e JPA",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Trabalhando com Banco de Dados utilizando JDBC e JPA.pdf"
        ),
      },
      {
        name: "Conceitos e melhores práticas com banco de dados PostgreSQL",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/conceitos e melhores práticas com banco de dados PostgreSQL.pdf"
        ),
      },
      {
        name: "Introdução a criação de websites com HTML5 e CSS3",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Introdução a criação de websites com HTML5 E CSS3.pdf"
        ),
      },
      {
        name: "Introdução ao Git e ao GitHub",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Introdução ao Git e ao GitHub.pdf"
        ),
      },
      {
        name: "Lógica de programação essencial",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Lógica de programação essencial.pdf"
        ),
      },
      {
        name: "Aprenda o que são Estrutura de Dados e Algoritmos",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Aprenda o que são Estrutura de Dados e Algoritmos.pdf"
        ),
      },
      {
        name: "Bem-vindo à DIO",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Bem-vindo à DIO.pdf"
        ),
      },
      {
        name: "Boas-vindas ao Bootcamp Santander Fullstack",
        pdfUrl: ghLink(
          "DIO/Santander Bootcamp - Fullstack Developer/Boas-vindas ao Bootcamp Santander Fullstack.pdf"
        ),
      },
    ],
  },
  {
    institution: "Descomplica",
    description: "Faculdade Digital",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "🎓",
    certificates: [
      {
        name: "Arquitetura e Organização de Computadores",
        pdfUrl: ghLink("Descomplica/ARQUITETURA E ORGANIZAÇÃO DE.pdf"),
      },
      {
        name: "Certificado de Participação",
        pdfUrl: ghLink(
          "Descomplica/Certificado de Participação - João Vitor Da Silva Rocha.pdf"
        ),
      },
      {
        name: "DB Developer",
        pdfUrl: ghLink("Descomplica/DB Developer.pdf"),
      },
      {
        name: "Mobile Developer",
        pdfUrl: ghLink("Descomplica/Mobile Developer.pdf"),
      },
      {
        name: "Object-Oriented Developer",
        pdfUrl: ghLink("Descomplica/Object-Oriented Developer.pdf"),
      },
      {
        name: "Smart Data Structures",
        pdfUrl: ghLink("Descomplica/Smart Data Structures.pdf"),
      },
    ],
  },
  {
    institution: "CC50 - Harvard",
    description: "Introdução à Ciência da Computação",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: "🏛️",
    certificates: [
      {
        name: "CC50: Introdução à Ciência da Computação",
        pdfUrl: ghLink(
          "CC50 Introdução à Ciência da Computação/course-84414-frsxc.pdf"
        ),
      },
    ],
  },
  {
    institution: "Coursera",
    description: "Google IT Support",
    color: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    icon: "📘",
    certificates: [
      {
        name: "Fundamentos do Suporte Técnico",
        pdfUrl: ghLink("Coursera/Coursera Y5EQEW7YR2PM.pdf"),
      },
    ],
  },
  {
    institution: "Coca-Cola",
    description: "Programa Coletivo Online",
    color: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    icon: "🥤",
    certificates: [
      {
        name: "Coletivo Online",
        pdfUrl: ghLink("Coca-Cola/Coca-Cola.pdf"),
      },
      {
        name: "Certificado de Conclusão",
        pdfUrl: ghLink(
          "Coca-Cola/Certificado de conclusão - João Vitor da Silva Rocha.pdf"
        ),
      },
    ],
  },
  {
    institution: "Balta.io",
    description: "Cursos de Programação",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: "💻",
    certificates: [
      {
        name: "Lógica de programação com Dart",
        pdfUrl: ghLink(
          "Baita.io/Dart/Lógica de programação com Dart - balta.io.pdf"
        ),
      },
      {
        name: "Criando seu primeiro App com Flutter",
        pdfUrl: ghLink(
          "Baita.io/Flutter/Criando seu primeiro App com Flutter.pdf"
        ),
      },
      {
        name: "Fundamentos do C#",
        pdfUrl: ghLink("Baita.io/C Sharp/fundamentos do C Sharp.pdf"),
      },
    ],
  },
  {
    institution: "IFES",
    description: "Instituto Federal do Espírito Santo",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "🏫",
    certificates: [
      {
        name: "Certificado IFES",
        pdfUrl: ghLink("Ifes/Certificado ifes.pdf"),
      },
      {
        name: "Introdução aos Simuladores de Redes",
        pdfUrl: ghLink("Ifes/INTRODUÇÃO AOS SIMULADORES DE REDES.pdf"),
      },
    ],
  },
  {
    institution: "Qualifica ES",
    description: "Programa de Qualificação Profissional",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: "📋",
    certificates: [
      {
        name: "Assistente de Tecnologia da Informação",
        pdfUrl: ghLink(
          "qualifica es/Assistente de tecnologia da informação.pdf"
        ),
      },
    ],
  },
  {
    institution: "Sebrae",
    description: "Capacitação Empresarial",
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: "📊",
    certificates: [
      {
        name: "Gestão de Pessoas",
        pdfUrl: ghLink("Sebrae/Gestão de pessoas.pdf"),
      },
    ],
  },
];
