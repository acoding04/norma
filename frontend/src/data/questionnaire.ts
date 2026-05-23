export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  text: string;
  helperText?: string;
  inputType: 'radio' | 'checkbox';
  options: QuestionOption[];
}

export interface QuestionnaireSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const QUESTIONNAIRE_SECTIONS: QuestionnaireSection[] = [
  {
    id: 'ai-system',
    title: 'AI System',
    description: 'Determine whether your system qualifies as an AI system under the EU AI Act.',
    questions: [
      {
        id: 'q1',
        text: 'Does your system infer from inputs to generate outputs (predictions, recommendations, decisions, or content)?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes — it learns from data or adapts its behaviour' },
          {
            value: 'no',
            label: 'No — it follows fixed rules, lookup tables, or deterministic logic',
          },
          { value: 'not-sure', label: 'Not sure' },
        ],
      },
      {
        id: 'q2',
        text: 'Does your system operate with some level of autonomy (i.e., it can function without continuous human instruction for each action)?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No — a human must direct every action manually' },
        ],
      },
    ],
  },
  {
    id: 'prohibited-practices',
    title: 'Prohibited Practices',
    description:
      'Check whether your system involves any practices banned outright under Article 5 of the AI Act.',
    questions: [
      {
        id: 'q3',
        text: 'Does your system do any of the following? (Select all that apply)',
        inputType: 'checkbox',
        options: [
          {
            value: 'subliminal',
            label: 'Uses subliminal or deceptive techniques to manipulate behaviour causing harm',
          },
          {
            value: 'exploits-vulnerabilities',
            label:
              'Exploits vulnerabilities of specific groups (age, disability, socioeconomic situation)',
          },
          {
            value: 'social-scoring',
            label:
              'Scores or classifies people based on social behaviour, leading to unfavourable treatment in unrelated contexts',
          },
          {
            value: 'criminal-profiling',
            label:
              'Predicts criminal risk based solely on profiling personality traits, without objective facts linked to a crime',
          },
          {
            value: 'facial-scraping',
            label:
              'Builds facial recognition databases by scraping images from the internet or CCTV',
          },
          {
            value: 'emotion-inference',
            label:
              'Infers emotions in workplaces or educational settings (except for medical/safety reasons)',
          },
          {
            value: 'biometric-categorisation',
            label:
              'Categorises people by biometric data to deduce race, political opinions, religion, sexual orientation, or trade union membership',
          },
          {
            value: 'realtime-facial',
            label:
              'Uses real-time facial recognition in public spaces (except for the three narrow law enforcement exceptions)',
          },
          { value: 'none', label: 'None of the above' },
        ],
      },
    ],
  },
  {
    id: 'regulated-products',
    title: 'Regulated Products',
    description:
      'Determine if your system is covered by existing EU product safety legislation (Pathway A).',
    questions: [
      {
        id: 'q4',
        text: 'Is your system a product, or a component of a product, covered by any of the following EU legislation?',
        inputType: 'checkbox',
        options: [
          { value: 'medical', label: 'Medical devices or in vitro diagnostics' },
          { value: 'machinery', label: 'Machinery' },
          { value: 'toys', label: 'Toys' },
          { value: 'lifts', label: 'Lifts' },
          { value: 'radio', label: 'Radio equipment' },
          { value: 'ppe', label: 'Personal protective equipment' },
          { value: 'aviation', label: 'Civil aviation / unmanned aircraft' },
          { value: 'vehicles', label: 'Motor vehicles / marine equipment' },
          {
            value: 'pressure',
            label: 'Pressure equipment, recreational craft, cableway installations, or gas appliances',
          },
          { value: 'none', label: 'None of the above' },
        ],
      },
      {
        id: 'q5',
        text: 'Does your product require a third-party conformity assessment under that product legislation before being placed on the market?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          {
            value: 'no',
            label: 'No — internal self-assessment only, with no reliance on harmonised standards',
          },
          { value: 'not-sure', label: 'Not sure' },
        ],
      },
    ],
  },
  {
    id: 'standalone-systems',
    title: 'Standalone Systems',
    description:
      'Determine if your system falls under a high-risk use case as a standalone system (Pathway B).',
    questions: [
      {
        id: 'q6',
        text: "What is the primary domain of your system's intended use?",
        inputType: 'checkbox',
        options: [
          {
            value: 'biometrics',
            label: 'Biometrics (identification, categorisation, or emotion recognition)',
          },
          {
            value: 'infrastructure',
            label: 'Critical infrastructure (road traffic, water, gas, electricity, digital infrastructure)',
          },
          {
            value: 'education',
            label: 'Education or vocational training (admissions, grading, placement, proctoring)',
          },
          {
            value: 'employment',
            label: 'Employment (recruitment, CV screening, promotion, task allocation, performance monitoring, termination)',
          },
          {
            value: 'essential-services',
            label: 'Essential services (public benefits eligibility, credit scoring, insurance pricing, emergency dispatch)',
          },
          {
            value: 'law-enforcement',
            label: 'Law enforcement (victim risk, polygraphs, evidence reliability, recidivism, profiling)',
          },
          {
            value: 'migration',
            label: 'Migration, asylum, or border control (risk assessment, document examination, person detection)',
          },
          {
            value: 'justice',
            label: 'Justice or democratic processes (assisting judges, influencing elections)',
          },
          { value: 'none', label: 'None of the above' },
        ],
      },
      {
        id: 'q7',
        text: 'Does your system evaluate, assess, score, rank, or make decisions about individual natural persons (not just legal entities like companies)?',
        inputType: 'radio',
        options: [
          {
            value: 'yes',
            label: 'Yes — it processes data about identifiable individuals to produce evaluations or decisions',
          },
          {
            value: 'no',
            label: 'No — it only processes aggregate data or data about legal entities',
          },
          { value: 'both', label: 'It does both' },
        ],
      },
      {
        id: 'q8',
        text: "Does your system perform profiling — i.e., automated processing of personal data to evaluate, analyse, or predict a person's characteristics, behaviour, performance, or preferences?",
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          {
            value: 'no',
            label: 'No — it only performs simple factual classification (e.g., sorting by age) or narrow procedural tasks (e.g., file indexing, formatting)',
          },
          { value: 'not-sure', label: 'Not sure' },
        ],
      },
      {
        id: 'q9',
        text: 'Does your system exclusively perform one of the following tasks?',
        inputType: 'checkbox',
        options: [
          {
            value: 'procedural',
            label: 'Narrow procedural tasks (data conversion, file sorting, duplicate detection) without value judgments',
          },
          {
            value: 'improve-human',
            label: 'Improving previously completed human work (grammar checks, formatting, style consistency) without altering substance',
          },
          {
            value: 'detect-patterns',
            label: 'Detecting patterns or anomalies in completed assessments for human review, without modifying active files',
          },
          {
            value: 'preparatory',
            label: 'Preparatory work for an assessment (retrieving legal provisions, matching guidelines) without providing evaluations or recommendations',
          },
          {
            value: 'none',
            label: 'None of the above — my system goes beyond these tasks',
          },
        ],
      },
    ],
  },
  {
    id: 'scope-context',
    title: 'Scope & Context',
    description:
      'Additional context questions for systems classified as high-risk.',
    questions: [
      {
        id: 'q10',
        text: 'Can persons under 18 access your system or be affected by its outputs?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'possibly', label: "Possibly — we haven't assessed this" },
        ],
      },
      {
        id: 'q11',
        text: 'Does your training data include special categories of personal data (race, ethnicity, health, political opinions, religion, sexual orientation, biometrics, genetics, trade union membership)?',
        inputType: 'radio',
        options: [
          {
            value: 'yes-bias',
            label: 'Yes — we need it for bias detection and correction',
          },
          { value: 'yes-other', label: 'Yes — for other reasons' },
          { value: 'no', label: 'No' },
          { value: 'not-sure', label: 'Not sure' },
        ],
      },
      {
        id: 'q12',
        text: 'What level of human oversight does your system currently support?',
        inputType: 'radio',
        options: [
          {
            value: 'in-the-loop',
            label: 'Human-in-the-loop — a person validates each action before the system executes it',
          },
          {
            value: 'on-the-loop',
            label: 'Human-on-the-loop — the system acts autonomously, but a person can review and revert after the fact',
          },
          {
            value: 'autonomous',
            label: 'Fully autonomous — no human review mechanism exists',
          },
          { value: 'not-designed', label: 'Not yet designed' },
        ],
      },
      {
        id: 'q13',
        text: 'Does your system involve remote biometric identification (identifying people at a distance without their active participation)?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        id: 'q14',
        text: 'Is your system deployed by or on behalf of a public authority?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
    ],
  },
  {
    id: 'transparency',
    title: 'Transparency',
    description:
      'Transparency obligations apply to all AI systems, regardless of risk classification.',
    questions: [
      {
        id: 'q15',
        text: 'Does your system interact directly with people (e.g., chatbot, virtual assistant, voice interface)?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        id: 'q16',
        text: 'Does your system generate synthetic content (text, images, audio, or video)?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        id: 'q17',
        text: 'Can your system be used to create deepfakes (realistic simulations of real people, places, or events)?',
        inputType: 'radio',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
    ],
  },
];
