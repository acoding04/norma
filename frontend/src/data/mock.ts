export interface Project {
  id: string;
  name: string;
  description: string;
  riskClassification: 'unacceptable' | 'high' | 'limited' | 'minimal';
  motivation: string;
  scope: string;
  vision: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'policy' | 'technical' | 'assessment' | 'report';
  framework: string;
  uploadedAt: string;
  size: string;
}

export interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  connected: boolean;
}

export interface Framework {
  id: string;
  name: string;
  description: string;
  category: string;
  documentCount: number;
  status: 'active' | 'draft' | 'inactive';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Sample Project',
    description: 'AI-powered predictive maintenance system for industrial equipment monitoring.',
    riskClassification: 'high',
    motivation:
      'Reduce unplanned downtime and maintenance costs by predicting component failures before they occur using sensor data and machine learning models.',
    scope:
      'Covers turbine engines, landing gear, and avionics systems. Integrates with existing MRO workflows and CMMS platforms.',
    vision:
      'Achieve 95% prediction accuracy for critical component failures within a 30-day window, reducing unplanned events by 40%.',
  },
];

export const MOCK_DOCUMENTS: Document[] = [
  {
    id: '1',
    name: 'Risk Assessment Report',
    type: 'assessment',
    framework: 'EU AI Act',
    uploadedAt: '2025-01-15',
    size: '2.4 MB',
  },
  {
    id: '2',
    name: 'Data Processing Impact Assessment',
    type: 'assessment',
    framework: 'GDPR',
    uploadedAt: '2025-01-20',
    size: '1.8 MB',
  },
  {
    id: '3',
    name: 'Model Transparency Report',
    type: 'report',
    framework: 'EU AI Act',
    uploadedAt: '2025-02-01',
    size: '3.1 MB',
  },
  {
    id: '4',
    name: 'AI System Technical Documentation',
    type: 'technical',
    framework: 'EU AI Act',
    uploadedAt: '2025-02-10',
    size: '5.6 MB',
  },
  {
    id: '5',
    name: 'Data Governance Policy',
    type: 'policy',
    framework: 'Internal Guidelines',
    uploadedAt: '2025-02-15',
    size: '890 KB',
  },
  {
    id: '6',
    name: 'Privacy Notice',
    type: 'policy',
    framework: 'GDPR',
    uploadedAt: '2025-03-01',
    size: '420 KB',
  },
];

export const MOCK_INTEGRATIONS: Integration[] = [
  {
    id: '1',
    name: 'GitHub',
    description:
      'Connect your GitHub repositories to track code changes and manage version control for AI models.',
    icon: 'github',
    connected: true,
  },
  {
    id: '2',
    name: 'Jira',
    description: 'Link Jira projects to track compliance tasks and audit findings.',
    icon: 'ticket',
    connected: false,
  },
  {
    id: '3',
    name: 'Confluence',
    description: 'Sync documentation from Confluence spaces for framework compliance.',
    icon: 'book-open',
    connected: false,
  },
];

export const MOCK_FRAMEWORKS: Framework[] = [
  {
    id: '1',
    name: 'EU AI Act',
    description:
      'The European Union Artificial Intelligence Act establishes a comprehensive regulatory framework for AI systems based on risk classification. It mandates conformity assessments, transparency obligations, and human oversight requirements for high-risk AI systems.',
    category: 'Regulation',
    documentCount: 3,
    status: 'active',
  },
  {
    id: '2',
    name: 'GDPR',
    description:
      'The General Data Protection Regulation governs the processing of personal data within the EU. For AI systems, it requires lawful basis for data processing, data protection impact assessments, and ensures rights related to automated decision-making.',
    category: 'Regulation',
    documentCount: 2,
    status: 'active',
  },
  {
    id: '3',
    name: 'Internal AI Guidelines',
    description:
      'Company-specific guidelines for responsible AI development and deployment. Covers model governance, ethical review processes, bias testing protocols, and operational monitoring requirements aligned with corporate values and industry best practices.',
    category: 'Internal',
    documentCount: 1,
    status: 'draft',
  },
];

export const MOCK_CHAT_MESSAGES: ChatMessage[] = [];

export const SUGGESTED_QUESTIONS = [
  'What risk level is our project under the EU AI Act?',
  'Summarize our GDPR compliance gaps',
  'What documents are we missing for conformity assessment?',
  'Explain Article 14 human oversight requirements',
];

export interface ReportingQuestion {
  id: string;
  question: string;
  answer: string;
}

export const MOCK_REPORTING_TAB1: ReportingQuestion[] = [
  {
    id: '1',
    question: 'What is the intended purpose of the AI system?',
    answer: '',
  },
  {
    id: '2',
    question: 'Who are the intended users and affected persons?',
    answer: '',
  },
  {
    id: '3',
    question: 'What data is used for training and inference?',
    answer: '',
  },
  {
    id: '4',
    question: 'How is human oversight implemented?',
    answer: '',
  },
  {
    id: '5',
    question: 'What measures ensure accuracy and robustness?',
    answer: '',
  },
];

export const MOCK_REPORTING_TAB2: ReportingQuestion[] = [
  {
    id: '6',
    question: 'Is personal data processed by the system?',
    answer: '',
  },
  {
    id: '7',
    question: 'What is the lawful basis for data processing?',
    answer: '',
  },
  {
    id: '8',
    question: 'How are data subject rights handled (access, erasure, portability)?',
    answer: '',
  },
  {
    id: '9',
    question: 'Has a Data Protection Impact Assessment been conducted?',
    answer: '',
  },
];
