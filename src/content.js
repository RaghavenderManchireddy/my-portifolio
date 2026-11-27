export const profile = {
  name: 'Raghavender Reddy Manchireddy',
  title: 'Senior Full Stack .NET Developer',
  email: 'manchireddyraghavender0807@gmail.com',
  linkedin: 'https://www.linkedin.com/in/m-raghavender',
  github: 'https://github.com/RaghavenderManchireddy',
}

export const experience = [
  {
    client: 'State of Maryland', role: 'Senior Full Stack .NET Developer',
    dates: 'Nov 2023 – Present', location: 'Annapolis, MD',
    summary: 'Led full-stack delivery of a financial platform, modernizing legacy .NET workflows and building Angular dashboards for budgeting, approvals, payments, and reporting.',
    highlights: ['Reduced manual processing by 40% and improved operational efficiency by 35%.', 'Built Azure OpenAI document processing and semantic search, and implemented resilient event-driven workflows with Azure Service Bus.'],
  },
  {
    client: 'Optum', role: 'Senior Full Stack .NET Developer',
    dates: 'Aug 2021 – Oct 2023', location: 'Eden Prairie, MN',
    summary: 'Delivered HIPAA-compliant claims, enrollment, and provider workflows. Integrated SMART on FHIR applications with enterprise EMR and EHR systems.',
    highlights: ['Reduced claim processing delays by 30% through ANSI X12 EDI integrations.', 'Reduced portal page load times by 35% using NgRx, RxJS, and lazy loading.'],
  },
  {
    client: 'Fiserv', role: 'Senior .NET Developer',
    dates: 'Jan 2019 – Jul 2021', location: 'Milwaukee, WI',
    summary: 'Engineered payment processing and merchant onboarding systems for high-volume transactions and banking partner integrations.',
    highlights: ['Built React and Redux merchant dashboards for transaction tracking and settlements.', 'Delivered payment authorization and reconciliation APIs through AWS API Gateway.'],
  },
  {
    client: 'T-Mobile', role: 'Full Stack .NET Developer',
    dates: 'Nov 2016 – Dec 2018', location: 'Bellevue, WA',
    summary: 'Built telecom billing and customer onboarding features using ASP.NET MVC and C#.',
    highlights: ['Built REST APIs for onboarding, billing, and account management.', 'Integrated Twilio for SMS alerts, one-time passwords, and billing notifications.'],
  },
  {
    client: 'Cognizant', role: '.NET Developer',
    dates: 'Aug 2014 – Oct 2016', location: 'India',
    summary: 'Developed healthcare applications for claims processing, patient registration, and clinical operations.',
    highlights: ['Integrated vendor systems through SOAP web services and XML validation.', 'Built patient onboarding dashboards using ASP.NET WebForms and jQuery.'],
  },
]

export const projects = [
  {
    category: 'Government · State of Maryland', title: 'Financial Workflow Platform', icon: 'landmark',
    summary: 'Modernized financial operations across departments, covering budgeting, approvals, invoicing, reconciliation, and audit reporting.',
    detail: 'Migrated legacy workflows to modern .NET and REST APIs. Built Angular dashboards and event-driven processing with Azure Functions and Service Bus. Used Azure OpenAI and retrieval-augmented generation for document processing and semantic search.',
    outcome: '40% less manual processing and 35% higher operational efficiency.',
    stack: ['.NET 8/10', 'Angular', 'Azure Service Bus', 'Azure OpenAI', 'SQL Server'],
  },
  {
    category: 'Healthcare · Optum', title: 'Claims & Interoperability', icon: 'heart',
    summary: 'Connected claims platforms, member portals, and provider systems using healthcare interoperability standards.',
    detail: 'Integrated SMART on FHIR with enterprise health record systems using FHIR R4, OAuth 2.0, and OpenID Connect. Implemented ANSI X12 EDI exchange and improved portal performance with NgRx, RxJS, and lazy loading.',
    outcome: '30% reduction in claim processing delays and 35% reduction in portal page load times.',
    stack: ['ASP.NET Core', 'FHIR R4', 'ANSI X12 EDI', 'Angular', 'Azure APIM'],
  },
  {
    category: 'Financial Services · Fiserv', title: 'Merchant Payments Platform', icon: 'card',
    summary: 'Built payment and settlement integrations alongside a merchant dashboard for transaction tracking and onboarding.',
    detail: 'Implemented REST APIs with AWS API Gateway for payment authorization, settlement, and reconciliation. Built React and Redux dashboards and deployed services on EC2 with load balancing and auto scaling.',
    outcome: 'Simplified banking partner integrations and supported peak transaction loads.',
    stack: ['C#', 'ASP.NET MVC', 'React', 'Redux', 'AWS', 'Oracle PL/SQL'],
  },
]

export const skills = [
  [
    "Backend Engineering",
    [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST APIs",
      "Web API",
      "EF Core",
      "Dapper",
      "LINQ",
      "SignalR",
      "CQRS",
      "Microservices",
      "Clean Architecture"
    ]
  ],
  [
    "Frontend Engineering",
    [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "Blazor",
      "Redux Toolkit",
      "NgRx",
      "RxJS",
      "HTML5",
      "CSS3",
      "Telerik",
      "Kendo UI"
    ]
  ],
  [
    "Cloud Engineering",
    [
      "Microsoft Azure",
      "AWS",
      "Azure Functions",
      "Logic Apps",
      "Azure APIM",
      "App Services",
      "Event Grid",
      "Event Hubs",
      "Key Vault"
    ]
  ],
  [
    "Artificial Intelligence",
    [
      "Azure OpenAI",
      "Azure AI Foundry",
      "LLMs",
      "RAG",
      "Semantic Kernel",
      "Vector Embeddings",
      "AI Agents",
      "MCP",
      "Claude Code",
      "GitHub Copilot"
    ]
  ],
  [
    "Database Engineering",
    [
      "SQL Server",
      "Azure SQL",
      "Oracle PL/SQL",
      "PostgreSQL",
      "Redis",
      "Cosmos DB",
      "T-SQL",
      "Query Optimization"
    ]
  ],
  [
    "DevOps & Infrastructure",
    [
      "Docker",
      "Kubernetes",
      "Azure DevOps",
      "GitHub Actions",
      "CI/CD",
      "AKS",
      "Terraform",
      "Bicep",
      "SonarQube"
    ]
  ],
  [
    "Security & Quality",
    [
      "OAuth 2.0",
      "OpenID Connect",
      "JWT",
      "RBAC",
      "Entra ID",
      "SAML SSO",
      "Playwright",
      "xUnit",
      "NUnit",
      "Moq"
    ]
  ],
  [
    "Enterprise Integration & Accessibility",
    [
      "Kafka",
      "RabbitMQ",
      "Azure Service Bus",
      "FHIR R4",
      "HL7",
      "ANSI X12 EDI",
      "FACETS",
      "WCAG",
      "Section 508",
      "NVDA",
      "WAVE",
      "axe DevTools"
    ]
  ]
]
