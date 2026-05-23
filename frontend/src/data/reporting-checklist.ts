export interface ChecklistItem {
  code: string;
  title: string;
  questions: string[];
}

export interface ChecklistArea {
  id: string;
  title: string;
  article: string;
  items: ChecklistItem[];
}

export const REPORTING_CHECKLIST: ChecklistArea[] = [
  {
    id: 'cybersecurity',
    title: 'Cyber',
    article: 'Article 15',
    items: [
      {
        code: 'CYB-01',
        title: 'Data Poisoning Prevention',
        questions: [
          'Are there controls to prevent malicious manipulation of the training dataset or AI knowledge bases?',
          'Is the integrity and provenance of data injected during fine-tuning or RAG verified?',
        ],
      },
      {
        code: 'CYB-02',
        title: 'Resilience Against Evasion and Adversarial Attacks',
        questions: [
          'Is the AI system subjected to stress tests to evaluate its resistance to inputs designed to induce errors (adversarial attacks)?',
          'Are there safeguards to maintain performance against malicious variations?',
        ],
      },
      {
        code: 'CYB-03',
        title: 'Prompt Injection Mitigation',
        questions: [
          "Does the system have input and output guardrails to neutralise malicious prompt injections that alter the model's purpose?",
        ],
      },
      {
        code: 'CYB-04',
        title: 'Model Extraction and Theft Prevention (Model Inversion)',
        questions: [
          'Are there physical, logical, and cryptographic security measures to protect model weights and parameters against unauthorised access, preventing extraction or inversion?',
        ],
      },
      {
        code: 'CYB-05',
        title: 'Information Leakage Prevention (Confidentiality Attacks / Data Exfiltration)',
        questions: [
          'Have controls (DLP, output filters) been implemented to mitigate the risk of the model revealing confidential information, intellectual property, or PII in its responses?',
        ],
      },
      {
        code: 'CYB-06',
        title: 'AI Supply Chain Security (Supply Chain Vulnerabilities)',
        questions: [
          'Are third-party libraries (Python), containers, and imported AI components continuously scanned and validated for vulnerabilities to prevent supply chain injections?',
        ],
      },
      {
        code: 'CYB-07',
        title: 'IAM, Access Control, and Least Privilege (Zero Trust)',
        questions: [
          'Are robust identity and access management (IAM) systems employed, with role segregation and fine-grained access control (FGAC) over artifacts, vector databases, and model APIs?',
        ],
      },
      {
        code: 'CYB-08',
        title: 'Environment Isolation and Perimeter Security',
        questions: [
          'Is the AI development, training, and execution environment protected behind strict firewalls and perimeter controls (isolated networks, proxies, WAF) to prevent external intrusions?',
        ],
      },
      {
        code: 'CYB-09',
        title: 'Logging, Auditing, and Event Traceability (Security Logging)',
        questions: [
          'Does the AI system have automatic immutable logging capabilities for events, accesses, commands, and API usage, and are these integrated with a SIEM / Security Operations Centre (SOC)?',
        ],
      },
      {
        code: 'CYB-10',
        title: 'Data and Communications Encryption (Cryptography)',
        questions: [
          'Are training data, RAG knowledge bases, model weights, and prompts/responses encrypted in transit and at rest using strong cryptographic standards (AES-256, TLS 1.3)?',
        ],
      },
      {
        code: 'CYB-11',
        title: 'Vulnerability Management and Continuous Posture Monitoring (CSPM)',
        questions: [
          'Is continuous vulnerability analysis, patch management, and security posture auditing (CSPM) carried out on cloud APIs, containers, and AI model endpoints?',
        ],
      },
    ],
  },
  {
    id: 'documentation',
    title: 'Docs',
    article: 'Article 11, Annex IV',
    items: [
      {
        code: 'MG01',
        title: 'Plan documentation from design through deployment',
        questions: [
          'Has a documentation strategy been defined from the early design phases of the AI system to provide appropriate coverage?',
          'Does the plan include clear milestones and responsible parties to ensure traceability of the technical documentation process?',
        ],
      },
      {
        code: 'MG02',
        title: 'Periodic update plan for technical documentation',
        questions: [
          'Is there an established calendar for reviewing and updating technical documentation?',
          'Does the update plan account for regulatory, technical, or operational context changes that will produce additional updates?',
        ],
      },
      {
        code: 'MG03',
        title: 'Change tracking procedure for consistent documentation updates',
        questions: [
          'Have version control and change traceability mechanisms been defined to ensure coherence between the system and its technical documentation?',
          'Does the procedure guarantee immediate documentation update when the system is modified?',
        ],
      },
      {
        code: 'MG04',
        title: 'Cross-functional communication of documentation content and objectives',
        questions: [
          'Has an internal communication plan been designed to share key documentation content across implicated areas?',
          'Has it been verified that all areas understand the purpose of technical documentation in relation to their functions?',
        ],
      },
      {
        code: 'MG05',
        title: 'Designate a documentation responsible who coordinates and supervises',
        questions: [
          'Has a technical documentation responsible been formally named with cross-functional authority to coordinate its preparation and supervision?',
          'Does the responsible have the resources and knowledge necessary to carry out this task effectively?',
        ],
      },
      {
        code: 'MG06',
        title: 'Define specific responsible parties per area or domain',
        questions: [
          'Have specific documentation responsible parties been assigned for each key area (data, security, risks, etc.)?',
          'Do the designated responsible parties have the technical competencies to correctly document their domain?',
        ],
      },
      {
        code: 'MG07',
        title: 'Implement a document management system or centralised repository',
        questions: [
          'Is there a single, secure, and accessible repository for storing technical documentation?',
          'Does the document management system allow version control, access permissions, and audits?',
        ],
      },
      {
        code: 'MG08',
        title:
          'Ensure documentation responsible parties have access to the document management system',
        questions: [
          'Has it been verified that all responsible parties have adequate access to the document management system?',
          'Are there differentiated access policies based on roles and responsibilities?',
        ],
      },
      {
        code: 'MG09',
        title:
          'Ensure the document management system has conservation mechanisms (backups, redundancy)',
        questions: [
          'Have security and backup measures (backups, redundancy, etc.) been implemented to preserve technical documentation integrity?',
          'Are periodic audits conducted to verify these mechanisms are active and functioning correctly?',
        ],
      },
      {
        code: 'MG10',
        title: 'Ensure deployment instructions are accessible to deployers',
        questions: [
          'Do deployment responsible parties have clear, direct access to the necessary instructions and documentation?',
          'Is it periodically validated that said documentation is updated, comprehensible, and complete from an operational standpoint?',
        ],
      },
      {
        code: 'MG11',
        title: 'Keep deployment instructions updated',
        questions: [
          'Is there a procedure for periodically updating AI system deployment instructions?',
          'Are deployment responsible parties notified when instructions have been modified or updated?',
        ],
      },
      {
        code: 'MG12',
        title: 'Plan and execute periodic audits on documentation status',
        questions: [
          'Have evaluation frequency and criteria been defined for auditing technical documentation?',
          'Do audits include verifications of traceability, currency, and accessibility of the documentation?',
        ],
      },
      {
        code: 'MG13',
        title:
          'Identify available and relevant harmonised standards (CEN/CENELEC, ISO, NIST, etc.)',
        questions: [
          'Has an identification of relevant harmonised standards been carried out?',
          'Is periodic monitoring conducted of normative changes that could affect system compliance?',
        ],
      },
      {
        code: 'MG14',
        title: 'Apply relevant quality seals',
        questions: [
          'Has the possibility of applying recognised quality certifications been evaluated?',
          'Is there evidence of compliance with the criteria required by these quality seals?',
        ],
      },
      {
        code: 'MG15',
        title: 'Conserve technical documentation for at least 10 years with authority access',
        questions: [
          'Does the repository ensure secure and durable storage for at least 10 years?',
          'Does the system allow immediate access by competent national authorities when required?',
        ],
      },
      {
        code: 'MG16',
        title: 'Conserve QMS documentation for at least 10 years',
        questions: [
          'Has QMS documentation been included in the official conservation repository?',
          'Is its availability assured for at least 10 years and its accessibility for competent authorities?',
        ],
      },
      {
        code: 'MG17',
        title: 'Conservation plan for notified body-approved changes',
        questions: [
          'Are notified body approvals and change evidence conserved in a centralised, secure repository?',
          'Does the plan contemplate conservation for at least 10 years?',
        ],
      },
      {
        code: 'MG18',
        title: 'Conservation plan for notified body decisions and documents',
        questions: [
          'Does the system contemplate conservation of decisions and documents issued by notified bodies?',
          'Is conservation and access assured for at least 10 years in an adequate repository?',
        ],
      },
      {
        code: 'MG19',
        title: 'Conservation plan for the EU declaration of conformity for at least 10 years',
        questions: [
          'Is the declaration of conformity archived in a repository that ensures availability and conservation for at least 10 years?',
        ],
      },
      {
        code: 'MG20',
        title: 'Periodically audit the conservation mechanism',
        questions: [
          'Have regular audits of the documentation conservation mechanism been established?',
          'Is correct functioning and compliance with conservation obligations verified?',
        ],
      },
      {
        code: 'MG21',
        title: 'Ensure conservation mechanism survives provider disappearance',
        questions: [
          'Does the conservation mechanism guarantee continued access to technical documentation even if the provider ceases activity?',
          'Have legal and technical measures been taken to ensure this future availability?',
        ],
      },
      {
        code: 'MG22',
        title:
          'Include system purpose, provider name, and version with relation to previous versions',
        questions: [
          "Does the documentation clearly include the system's purpose, provider name, and corresponding version?",
          'Is traceability between previous and current versions indicated?',
        ],
      },
      {
        code: 'MG23',
        title: 'Include how the system interacts with external hardware, software, or AI systems',
        questions: [
          'Has it been adequately documented how the system communicates or can interoperate with other external systems?',
          'Have compatibility requirements for ensuring interoperability also been documented?',
        ],
      },
      {
        code: 'MG24',
        title: 'Include relevant software/firmware versions and update requirements',
        questions: [
          'Does the documentation record the versions used and procedures required for updates or patches?',
          'Is the planned update policy indicated to maintain system security and functionality?',
        ],
      },
      {
        code: 'MG25',
        title: 'Include how the system is placed on the market (software packages, downloads, API)',
        questions: [
          'Is the form of distribution and deployment detailed (e.g., as API, download, embedded software)?',
          'Is clear documentation provided for each modality of putting the system into service?',
        ],
      },
      {
        code: 'MG26',
        title: 'Include description of intended hardware',
        questions: [
          'Has the type of hardware necessary or recommended for correct system functioning been documented?',
          'Are possible limitations or incompatibilities with certain hardware specified?',
        ],
      },
      {
        code: 'MG27',
        title:
          'Include photographs or illustrations of external features, marking, and internal configuration',
        questions: [
          'Are visual elements such as product images, marking, or internal configuration included where applicable?',
          'Are illustrations correctly associated with relevant technical descriptions?',
        ],
      },
      {
        code: 'MG28',
        title: 'Include basic description of the user interface for the deployer',
        questions: [
          'Does the documentation contain a comprehensible and sufficient description of the user interface directed at the system operator?',
          'Have visual examples or diagrams been included to familiarise the deployer with the interface?',
        ],
      },
      {
        code: 'MG29',
        title: 'Include user interface description and usage instructions for the deployer',
        questions: [
          'Are practical and updated instructions included to facilitate system implementation by the operator?',
          'Do instructions contemplate possible errors during deployment and corresponding corrective actions?',
        ],
      },
      {
        code: 'MG30',
        title: 'Include development methods, use of third-party tools or models',
        questions: [
          'Have third-party tools and models used in development been documented, along with their integration or modification?',
          'Have risks derived from using third-party tools or models been evaluated and documented?',
        ],
      },
      {
        code: 'MG31',
        title:
          'Include design specifications, logic, algorithms, key decisions, assumptions, optimisation criteria',
        questions: [
          'Have all technical design elements been clearly and accessibly documented, including algorithms used?',
          'Does the documentation record technical concessions made and how they affect system performance or security?',
        ],
      },
      {
        code: 'MG32',
        title: 'Include system architecture, component integration, and computational resources',
        questions: [
          'Does the documentation include a comprehensible schema of system architecture and component interaction?',
          'Are computational resources employed and platforms used in each development phase described?',
        ],
      },
      {
        code: 'MG33',
        title:
          'Include data requirements, training methodologies, datasets used, provenance, labelling',
        questions: [
          'Have data and methodologies used in training, testing, and validation been documented?',
          'Is there evidence of data quality control and labelling/cleaning processes performed?',
        ],
      },
      {
        code: 'MG34',
        title:
          'Include evaluation of human oversight measures and technical measures for output interpretation',
        questions: [
          'Have measures enabling human oversight of the system during use been evaluated?',
          'Does the documentation include tools or mechanisms designed for users to correctly interpret results?',
        ],
      },
      {
        code: 'MG35',
        title:
          'Include predetermined changes and associated technical information for continued conformity',
        questions: [
          'Have planned changes that could apply to the system and their technical impact been documented?',
          "Are validation procedures specified to guarantee these changes don't compromise system conformity?",
        ],
      },
      {
        code: 'MG36',
        title:
          'Include validation/testing procedures, data used, evaluation parameters, results, and signed records',
        questions: [
          'Does the documentation contain clear evidence of tests performed, results, and signed records?',
          'Have specific tests been included to verify effects of planned updates or modifications?',
        ],
      },
      {
        code: 'MG37',
        title: 'Include cybersecurity measures adopted',
        questions: [
          'Are the protection measures applied to guarantee AI system cybersecurity detailed?',
          'Does the documentation include vulnerability assessments and security incident management mechanisms?',
        ],
      },
      {
        code: 'MG38',
        title:
          'Include foreseeable undesirable outcomes and risk sources for health, safety, fundamental rights',
        questions: [
          'Are possible adverse outcomes and risks associated with the system adequately identified and documented?',
          'Does the documentation include mechanisms to mitigate and supervise these risks throughout the lifecycle?',
        ],
      },
      {
        code: 'MG39',
        title:
          'Include human oversight measures and technical measures for deployer interpretation',
        questions: [
          "Have the deployer's functions and responsibilities regarding system supervision been clearly specified?",
          'Has the necessary training or qualification been described for this profile to correctly interpret results?',
        ],
      },
      {
        code: 'MG40',
        title: 'Include description of appropriateness of performance metrics',
        questions: [
          'Does the documentation justify the performance parameters established and their alignment with system purpose?',
          'Have these parameters been validated in documented tests?',
        ],
      },
      {
        code: 'MG41',
        title: 'Include detailed description of the risk management system per Article 9',
        questions: [
          'Has a risk management system been documented that complies with Article 9?',
          'Is it specified how this system is updated given relevant changes in the AI system lifecycle?',
        ],
      },
      {
        code: 'MG42',
        title:
          'Include description of relevant changes made by the provider throughout the lifecycle',
        questions: [
          'Has the history of relevant changes the system has undergone from design to current version been recorded?',
          'Is the impact of each change on safety, accuracy, or regulatory compliance indicated?',
        ],
      },
      {
        code: 'MG43',
        title:
          'Include list of harmonised standards applied (or detailed description of alternative solutions)',
        questions: [
          'Does the documentation clearly specify which harmonised standards or technical standards have been followed?',
          "Have the solutions adopted been adequately justified where harmonised standards haven't been applied?",
        ],
      },
      {
        code: 'MG44',
        title: 'Include a copy of the EU declaration of conformity per Article 47',
        questions: [
          "Has a valid copy of the system's declaration of conformity been included in the documentation?",
          'Is it verified that said declaration is signed by the authorised provider and explicitly references Article 47?',
        ],
      },
      {
        code: 'MG45',
        title:
          'Include detailed description of the post-market monitoring system per Article 72(3)',
        questions: [
          'Has a system for evaluating AI system performance after commercial deployment been defined?',
          'Does the post-market surveillance plan contemplate information collection mechanisms, audits, and continuous improvements?',
        ],
      },
    ],
  },
  {
    id: 'qms',
    title: 'QMS',
    article: 'Article 17',
    items: [
      {
        code: 'QMS-01',
        title: 'Regulatory Compliance Strategy',
        questions: [
          'Is there a defined regulatory compliance strategy to ensure the system complies with the AI Regulation?',
          'Does it establish compliance milestones?',
        ],
      },
      {
        code: 'QMS-02',
        title: 'Design Control and Verification',
        questions: [
          'Are systematic techniques, procedures, and actions defined for system design, design control, and design verification?',
        ],
      },
      {
        code: 'QMS-03',
        title: 'Development and Quality Control',
        questions: [
          'Are systematic techniques, procedures, and actions defined for development, quality control, and quality assurance?',
        ],
      },
      {
        code: 'QMS-04',
        title: 'Testing and Validation',
        questions: [
          'Are examination, testing, and validation procedures in place before, during, and after development?',
          'Are metrics and thresholds documented?',
        ],
      },
      {
        code: 'QMS-05',
        title: 'Technical Specifications and Standards',
        questions: [
          'Have the technical specifications and standards that will apply to the system been documented?',
        ],
      },
      {
        code: 'QMS-06',
        title: 'Data Management',
        questions: [
          'Are there documented systems and procedures for data management (acquisition, collection, analysis, labelling, storage, filtering, and retention)?',
        ],
      },
      {
        code: 'QMS-07',
        title: 'Risk Management System Integration',
        questions: [
          'Has the risk management system been integrated into the quality management system?',
        ],
      },
      {
        code: 'QMS-08',
        title: 'Post-Market Monitoring',
        questions: [
          'Has the configuration, application, and maintenance of a post-market monitoring system been established?',
        ],
      },
      {
        code: 'QMS-09',
        title: 'Serious Incident Notification',
        questions: [
          'Have procedures been defined for the notification of serious incidents and defective functioning?',
        ],
      },
      {
        code: 'QMS-10',
        title: 'Communication with Authorities',
        questions: [
          'Are there procedures for handling communication with competent national authorities and other relevant bodies?',
        ],
      },
      {
        code: 'QMS-11',
        title: 'Record Maintenance (Logs and Auditing)',
        questions: [
          'Are there systems and procedures for the maintenance of records (logs and technical documentation)?',
        ],
      },
      {
        code: 'QMS-12',
        title: 'Resource Management and Supply Security',
        questions: [
          'Does the QMS include procedures for resource management, including security-of-supply related measures?',
        ],
      },
      {
        code: 'QMS-13',
        title: 'Accountability Framework',
        questions: [
          'Has an accountability framework been established defining responsibilities of development, deployment, and management teams?',
        ],
      },
      {
        code: 'QMS-14',
        title: 'QMS Proportionality',
        questions: [
          "Is the quality management system proportionate to the organisation's size and the AI system's risks?",
        ],
      },
      {
        code: 'QMS-15',
        title: 'Weight Adjustment and Overfitting Control',
        questions: [
          'Are there statistical validations and algorithmic testing procedures to prevent overfitting and ensure correct weight adjustment during training?',
        ],
      },
      {
        code: 'QMS-16',
        title: 'Modification and Update Management',
        questions: [
          'Is there a formal procedure for managing substantial modifications to the AI system, including the need for a new conformity assessment?',
        ],
      },
    ],
  },
  {
    id: 'incidents',
    title: 'Incidents',
    article: 'Article 73',
    items: [
      {
        code: 'M-INC-01',
        title: 'Frame serious incident management within the QMS',
        questions: [
          'Provider: Within the QMS, procedures associated with notification of a serious incident.',
          'Deployer: Within the QMS, procedures associated with notification of a serious incident.',
        ],
      },
      {
        code: 'M-INC-02',
        title: 'Contact with the Market Surveillance Authority',
        questions: [
          'Provider: Document with the contact responsible for the Market Surveillance Authority.',
          'Deployer: Document with the contact responsible for the Market Surveillance Authority.',
        ],
      },
      {
        code: 'M-INC-03',
        title: 'Contact with the provider',
        questions: [
          'Provider: Prepare a user manual for the channel that enables management of requests and incidents between deployer and provider.',
          'Deployer: Access to the user manual for the channel that enables management of requests and incidents between deployer and provider.',
        ],
      },
      {
        code: 'M-INC-04',
        title: 'Knowledge of the AI system categorisation',
        questions: [
          "Provider: Prepare the document explaining the AI system's category according to those defined in the Regulation.",
          "Deployer: Access to the document explaining the AI system's category according to the Regulation.",
        ],
      },
      {
        code: 'M-INC-05',
        title: 'Knowledge of fundamental rights',
        questions: [
          'Provider: Document certifying knowledge about the fundamental rights of the European Union.',
          'Deployer: Document certifying knowledge about the fundamental rights of the European Union.',
        ],
      },
    ],
  },
  {
    id: 'risk-management',
    title: 'Risk',
    article: 'Article 9',
    items: [
      {
        code: 'MG01',
        title: 'Analysis and definition of internal and external context',
        questions: [
          'Has a risk management system been defined for high-risk AI systems throughout the entire lifecycle?',
          "Have the elements of the organisation's internal and external context around high-risk AI systems been identified and documented?",
          'Has leadership and commitment to risk management been formalised (policies, procedures, resources, authority, accountability)?',
        ],
      },
      {
        code: 'MG02',
        title: 'Definition and update of risk appetite',
        questions: [
          'Has the risk appetite been defined and constantly updated (in relation to the risk the AI system may pose to health, safety, and fundamental rights)?',
        ],
      },
      {
        code: 'MG03',
        title: 'Inventory of AI system components',
        questions: [
          'Have all AI system components been identified, inventoried, and documented (key actors, data, tools, etc.)?',
        ],
      },
      {
        code: 'MG04',
        title: 'Identification of main risk sources',
        questions: [
          'Have all risks associated with AI systems been identified, inventoried, and documented (especially those that could affect health, safety, and fundamental rights)?',
        ],
      },
      {
        code: 'MG05',
        title: 'Evaluation of risk sources',
        questions: [
          'Have all identified risks been analysed and evaluated (assigning probability of occurrence and impact)?',
        ],
      },
      {
        code: 'MG06',
        title: 'Identification and analysis of impact and probability of effects',
        questions: [
          'Have possible risks related to the use or impact of the AI system on minors under 18 been considered (identification, analysis, evaluation, and implementation of treatment measures)?',
        ],
      },
      {
        code: 'MG07',
        title: 'Reporting of results',
        questions: [
          'Have mechanisms been defined and implemented for communication and consultation around the risk management system for high-risk AI systems?',
        ],
      },
      {
        code: 'MG08',
        title: 'Analysis of post-market data collected',
        questions: [
          'Have possible risks related to the post-market surveillance system been considered (identification, analysis, evaluation, and implementation of treatment measures)?',
        ],
      },
      {
        code: 'MG09',
        title: 'Identification of new possible risks',
        questions: [
          'Have risk treatment options been defined and prioritised based on effectiveness and feasibility criteria?',
          'Have adequate mitigation measures and safeguards been evaluated for each identified risk?',
        ],
      },
      {
        code: 'MG10',
        title: 'Definition and selection of risk treatment options',
        questions: [
          'Have all risk treatment options been determined for managing the identified, analysed, and evaluated risks?',
        ],
      },
      {
        code: 'MG11',
        title: 'Plan and implement risk treatment',
        questions: [
          'If defined, has the risk management system been implemented throughout the entire lifecycle?',
          'If implemented, is the risk management system continuously maintained throughout the entire lifecycle?',
          'Has the implementation of defined treatment measures been planned?',
        ],
      },
      {
        code: 'MG12',
        title: 'Evaluate the effectiveness of each treatment',
        questions: [
          'Has a continuous monitoring and improvement process been defined and implemented around the risk management system?',
          'Have testing procedures been established to guarantee the system fulfils its purpose (intended use)?',
          'Have testing procedures been established to guarantee high-risk AI system requirements are met?',
          'Have tests in real conditions been defined and implemented?',
        ],
      },
      {
        code: 'MG13',
        title: 'Determine if residual risk is acceptable',
        questions: [
          'Have review and monitoring periods for the risk management system been established?',
        ],
      },
      {
        code: 'MG14',
        title: 'Document and report residual risks',
        questions: [
          'If defined, has the risk management system been documented throughout the lifecycle?',
          'Have residual risks after treatment measure implementation been documented for communication to deployers?',
          'Has the entire risk management process been documented?',
        ],
      },
    ],
  },
  {
    id: 'data-governance',
    title: 'Data',
    article: 'Article 10',
    items: [
      {
        code: 'MG01',
        title: 'Identification of necessary information',
        questions: [
          'Has all information necessary for AI system development and use been identified?',
          'Has the necessary information been documented?',
        ],
      },
      {
        code: 'MG02',
        title: 'Establishment of the data collection process',
        questions: [
          'Have data sources been identified?',
          'Has a data collection process been established?',
        ],
      },
      {
        code: 'MG03',
        title: 'Determine quality dimensions to evaluate',
        questions: ['Have data quality dimensions to evaluate been defined?'],
      },
      {
        code: 'MG04',
        title: 'Define quality controls for each dimension',
        questions: ['Have specific quality controls been defined for each identified dimension?'],
      },
      {
        code: 'MG05',
        title: 'Implement the defined quality controls',
        questions: [
          'Have the defined quality controls been implemented?',
          'Have the results of implemented quality controls been verified?',
        ],
      },
      {
        code: 'MG06',
        title: 'Report quality control results',
        questions: [
          'Have quality control results been reported?',
          'Have deviations detected in quality controls been documented?',
        ],
      },
      {
        code: 'MG07',
        title: 'Develop data quality improvement measures',
        questions: [
          'Have improvement plans been developed based on quality results?',
          'Have implemented improvement measures been documented?',
        ],
      },
      {
        code: 'MG08',
        title: 'Data transformation',
        questions: ['Have data been transformed to adapt them to AI system needs?'],
      },
      {
        code: 'MG09',
        title: 'Data aggregation',
        questions: [
          'Have data from different sources been aggregated?',
          'Have data aggregation processes been documented?',
        ],
      },
      {
        code: 'MG10',
        title: 'Data sampling',
        questions: ['Is adequate data sampling performed?'],
      },
      {
        code: 'MG11',
        title: 'Feature creation and selection',
        questions: [
          'After initial data collection and treatment, have additional data needs or characteristics been identified?',
          'Has dimensionality augmentation or reduction been considered to create features or discard redundant ones?',
        ],
      },
      {
        code: 'MG12',
        title: 'Data enrichment',
        questions: ['Have data been enriched and expanded?'],
      },
      {
        code: 'MG13',
        title: 'Data labelling',
        questions: [
          'Have identifying labels been assigned to collected data?',
          'Have automatic data labelling tools been used? Has the process been supervised by human oversight?',
        ],
      },
      {
        code: 'MG14',
        title: 'Analysis of main bias sources in data',
        questions: [
          'Has the potential bias that collected data may present been analysed and evaluated?',
        ],
      },
      {
        code: 'MG15',
        title: 'Evaluation of bias in data',
        questions: [
          'Has a bias been identified in the data?',
          'If affirmative, has analysis and evaluation been done to determine the need for treatment measures?',
        ],
      },
      {
        code: 'MG16',
        title: 'Treatment of bias in data',
        questions: [
          'Have treatment measures for identified and evaluated biases been implemented?',
        ],
      },
      {
        code: 'MG17',
        title: 'Data transfer',
        questions: [
          'If data will be transferred in the last phase of the data lifecycle, has a report been generated with full detail of the transfer process?',
        ],
      },
      {
        code: 'MG18',
        title: 'Total or partial data deletion',
        questions: [
          'Has it been verified that no user or actor involved in AI system development still requires data access?',
          "Has it been verified that the data deletion process won't violate any legal, contractual, or retention obligation?",
          'Has it been verified that data will be deleted from all storage locations?',
          'Has it been evaluated whether there is any possibility of partial or total data restoration from the AI system trained with this data?',
          'Has it been checked whether the data has cultural, social, or historical importance?',
          'Has a report been generated with full detail of the data deletion process?',
        ],
      },
    ],
  },
  {
    id: 'accuracy',
    title: 'Accuracy',
    article: 'Article 15',
    items: [
      {
        code: 'MG01',
        title: 'Selection of accuracy metrics according to intended purpose',
        questions: [
          "In selecting accuracy metrics and their values, has the system's intended purpose been considered?",
          "Has the correspondence between each selected metric and the system's intended use been documented traceably?",
          'Has it been validated that chosen metrics correctly reflect expected performance in real application contexts?',
        ],
      },
      {
        code: 'MG02',
        title: 'Metrics motivated by the risk plan',
        questions: [
          'Is the selection of accuracy metrics motivated by mitigation of risks identified in the risk plan, and has said motivation been documented?',
          'Have tests been performed to study correlation between detected risks and selected metrics that specifically address them?',
          'Have metrics that help control risks with greatest impact on health, safety, and fundamental rights been prioritised?',
        ],
      },
      {
        code: 'MG03',
        title: 'Impact of data preprocessing',
        questions: [
          'Has the impact of data preprocessing been considered, recording preprocessing operations and their relation to accuracy metrics results?',
          'Has the impact of data quality improvement on system accuracy been considered?',
          'Has the impact of feature engineering operations on system accuracy been documented and considered?',
        ],
      },
      {
        code: 'MG04',
        title: 'Impact of overfitting',
        questions: [
          'Has the impact of overfitting on accuracy been considered and recorded, along with measures taken to avoid it?',
          'Have cross-validation mechanisms or other methods been implemented to prevent overfitting?',
          'Have key indicators been recorded to detect signs of overfitting during training and evaluation?',
        ],
      },
      {
        code: 'MG05',
        title: 'Baseline models for comparison',
        questions: [
          'Have criteria been defined for choosing baseline models and their relevance at each lifecycle phase?',
          'Is model accuracy systematically compared throughout the lifecycle with associated baseline models?',
        ],
      },
      {
        code: 'MG06',
        title: 'Measurement of certainty/confidence level',
        questions: [
          'Does the AI output include a measure of certainty or confidence level that accompanies model outputs?',
          'Is comprehensible information about certainty level provided to end users in critical contexts?',
          'Have confidence thresholds been defined that trigger specific alerts or recommendations?',
        ],
      },
      {
        code: 'MG07',
        title: 'Unit, stress, and integration tests',
        questions: [
          'Have cumulative unit, stress, and integration tests been performed during the AI system development process in relation to accuracy measurement?',
          'Are test results and derived actions documented?',
          'Have boundary or failure conditions been defined?',
        ],
      },
      {
        code: 'MG08',
        title: 'Update and centralise metrics',
        questions: [
          'Is accuracy metrics information updated and centralised, with access for all implicated actors?',
          'Has a versioning or traceability system been implemented?',
          'Is there a formal procedure to communicate updates?',
        ],
      },
      {
        code: 'MG09',
        title: 'Objective function',
        questions: [
          "Has the system's objective function been selected according to its intended purpose?",
          'Have risks found in the risk analysis been considered and how system accuracy influences them?',
        ],
      },
      {
        code: 'MG10',
        title: 'Interface/Alarm for user accuracy monitoring',
        questions: [
          'Does the system have a mechanism (graphical interface, alarm, etc.) that allows the user to monitor accuracy status?',
          "Is the mechanism's functioning appropriately documented?",
          'Have users been trained to correctly interpret the information?',
        ],
      },
      {
        code: 'MG11',
        title: 'Accuracy history',
        questions: [
          'Does the system have a mechanism that stores all accuracies reported to the user in a history?',
          'Can the accuracy history be queried by date, model version, or usage context?',
          'Is the accuracy history used to improve the model or adjust the confidence threshold?',
        ],
      },
      {
        code: 'MG12',
        title: 'Statistical significance tests',
        questions: [
          'During the process of selecting accuracy metric(s) and objective function(s), have statistical significance tests been performed to justify the choices?',
          'Are the test results documented?',
          'Have minimum significance criteria been defined?',
        ],
      },
      {
        code: 'MG13',
        title: 'Model/family benchmarks',
        questions: [
          'Have benchmarks been performed during the design process considering intended purpose in relation to the model or model family used?',
          'Is the use of benchmarks justified, prioritising publicly recognised ones where pertinent?',
          'For benchmarks against manual measures or historical data, is the internal benchmark justified and its significance explained?',
          'Is it documented how comparisons were made and their results?',
        ],
      },
      {
        code: 'MG14',
        title: 'Accuracy instructions for the user',
        questions: [
          "Do the system's user instructions include all pertinent accuracy levels and metrics?",
          'Are metrics presented in an accessible and comprehensible format for non-technical users?',
        ],
      },
    ],
  },
  {
    id: 'records',
    title: 'Records',
    article: 'Article 12',
    items: [
      {
        code: 'MG01',
        title: 'Identification, analysis, and evaluation of needs motivating record generation',
        questions: [
          'Has a process been developed to analyse the needs motivating record generation and establish the information to be collected?',
          'Has a process been developed to evaluate the needs motivating record generation?',
          'Have the needs motivating record generation been adequately identified?',
        ],
      },
      {
        code: 'MG02',
        title: 'Identification of specific logging objectives',
        questions: [
          'Have the specific objectives of logging been identified?',
          'Has it been clearly identified what is expected to be achieved with its collection?',
        ],
      },
      {
        code: 'MG03',
        title: 'Identify log scope, information to record, and retention time',
        questions: [
          'Has the log scope been defined as the information to be recorded and the time during which said log will be maintained?',
          'Have retention and deletion periods been determined considering information disposition needs and applicable regulations such as GDPR?',
          'Have pre-existing special needs from financial sector-specific regulations been considered?',
        ],
      },
      {
        code: 'MG04',
        title:
          'Identify logs needed to evidence Article 9 (Risk Management) information collection',
        questions: [
          'Have the logs necessary to guarantee collection of information determined in the risk management system implementation process been generated?',
          'Have risk management system controls with associated evidence been considered for obtaining logs?',
        ],
      },
      {
        code: 'MG05',
        title:
          'Identify logs needed to evidence Article 72 (Post-Market Surveillance) information collection',
        questions: [
          'Have the logs necessary to guarantee collection of information determined in the post-market surveillance system implementation process been generated?',
          'Have the frequencies for collecting these records been adequately documented and implemented?',
        ],
      },
      {
        code: 'MG06',
        title:
          'Identify logs needed to evidence Article 14 (Human Oversight) information collection',
        questions: [
          'Have the logs necessary to guarantee collection of information determined for implementing human oversight mechanisms been generated?',
          'Has the need for these records and how to interpret their results for contribution to the human oversight process been adequately documented?',
        ],
      },
      {
        code: 'MG07',
        title: 'Implement the log capture process',
        questions: [
          'Has a log capture process been implemented to guarantee information is collected according to criteria established in the design phase?',
          'Have tests been conducted to validate these procedures?',
          'Have stress tests been performed on the log capture system to guarantee functioning without incidents even during high demand?',
        ],
      },
      {
        code: 'MG08',
        title: 'Implement storage media to guarantee log availability',
        questions: [
          'Have adequate storage media and protection materials been selected and implemented to guarantee log security and availability?',
          'Have storage media supervision and review periods been established?',
        ],
      },
      {
        code: 'MG09',
        title: 'Implement security and cybersecurity media to guarantee log protection',
        questions: [
          'Have adequate cybersecurity measures been selected and implemented to guarantee log security and availability?',
          'Have cybersecurity and access control supervision and review periods been established?',
        ],
      },
      {
        code: 'MG10',
        title: 'Develop training and capacity-building for personnel involved in log management',
        questions: [
          'Are training and capacity-building processes developed for personnel involved in log management?',
          'Are these training needs contemplated in the Article 4 AI Literacy response?',
        ],
      },
      {
        code: 'MG11',
        title: 'Analysis of impact of other applicable regulations (GDPR) on log generation',
        questions: [
          'Has the impact of other applicable regulations or laws that could affect the log generation process been analysed and evaluated?',
          'Specifically, has the impact of data protection regulation (GDPR) on the log generation process been analysed and evaluated?',
        ],
      },
      {
        code: 'MG12',
        title: 'Establish supervision and review periods for storage media and cybersecurity',
        questions: [
          'Have supervision periods for storage media, cybersecurity measures, and access controls been established?',
          'Have review periods for storage media, cybersecurity measures, and access controls been established?',
        ],
      },
      {
        code: 'MG13',
        title:
          'Establish a continuous monitoring and improvement process for the log management system',
        questions: [
          'Has a continuous monitoring and improvement process for the log management system been established?',
          'In the established process, are possible errors monitored and identified, and are recorded data evaluated for implementation and continuous improvement of proposed solutions?',
        ],
      },
      {
        code: 'MG14',
        title:
          'Implement a process guaranteeing adequate technical documentation of the log management system',
        questions: [
          'Has a process been defined and implemented that guarantees adequate technical documentation of the implemented log management system?',
          'Have logs been contemplated in documentation not only specifically about logs, but also in other documents where they appear collaterally (e.g., risk management, human oversight, post-market surveillance)?',
        ],
      },
      {
        code: 'MG15',
        title: 'Article 15: Accuracy, robustness, and cybersecurity',
        questions: [
          'Does the system comply with Accuracy, Robustness, and Cybersecurity measures oriented to provide Transparency about its functioning?',
        ],
      },
      {
        code: 'MG16',
        title: 'Article 12: Records',
        questions: [
          'Does the system comply with Record-Keeping measures oriented to provide Transparency about its functioning?',
        ],
      },
    ],
  },
  {
    id: 'robustness',
    title: 'Robustness',
    article: 'Article 15',
    items: [
      {
        code: 'MG01',
        title: 'Acquire basic knowledge about robustness',
        questions: [
          'Has adequate training of personnel involved in development and implementation been ensured on key aspects of AI system robustness?',
        ],
      },
      {
        code: 'MG02',
        title: 'Establish clear robustness objectives, define associated metrics',
        questions: [
          'Have robustness properties and metrics and the requirements they must meet been established according to intended purpose and risk analysis, with evidence?',
        ],
      },
      {
        code: 'MG03',
        title: 'Identify critical system characteristics',
        questions: [
          'During system design, have recognised characteristics for measuring robustness been identified and their separability (possibility of being measured separately) identified?',
        ],
      },
      {
        code: 'MG04',
        title: 'Uniformisation of validation and production environments',
        questions: [
          'Do the different environments through which the system evolves in its lifecycle (development, integration, pre-production, production) have equivalent characteristics according to defined robustness objectives?',
        ],
      },
      {
        code: 'MG05',
        title: 'Validation in hardware environments replicating final system capabilities',
        questions: [
          'Has verification and validation of chosen metrics been performed in hardware environments that exactly replicate the final capabilities the AI system will have access to?',
        ],
      },
      {
        code: 'MG06',
        title: 'Performance measurement and computational complexity',
        questions: [
          'Have various robustness metrics related to performance (FLOPS, efficiency, FLOPY, Latency, etc.) been defined for the system on the hardware established for its functioning?',
        ],
      },
      {
        code: 'MG07',
        title: 'Design experiments to evaluate robustness',
        questions: [
          'Is there an experiment plan to demonstrate system robustness based on at least one of the following methods: statistical, formal, empirical, or practical tests?',
        ],
      },
      {
        code: 'MG08',
        title: 'Perform experiments with real data, analyse and interpret results',
        questions: [
          'Is there evidence of said experiments performed, their analysis and interpretation, and their impact on AI system robustness parameters?',
        ],
      },
      {
        code: 'MG09',
        title: 'Implement capabilities to observe, supervise, and report degradations',
        questions: [
          'Have procedures and technical measures been defined to monitor robustness, such as system interfaces showing selected robustness metrics in aggregate and historical views and operation records?',
        ],
      },
      {
        code: 'MG10',
        title: 'Configure alert techniques and safe failure protocols',
        questions: [
          'Are there alert mechanisms when system robustness is not within established parameters?',
        ],
      },
      {
        code: 'MG11',
        title: 'Establish evaluation committees to foresee inconsistencies or failures',
        questions: [
          'Have specific committees or teams been established to proactively evaluate inconsistencies or possible failures in system robustness?',
        ],
      },
      {
        code: 'MG12',
        title: 'Implement automatic mechanisms for failure recovery',
        questions: [
          'Are there automatic mechanisms designed and implemented to guarantee system recovery in case of failure?',
        ],
      },
      {
        code: 'MG13',
        title: 'Implement tools for geographic redundancy, versioning, and scalability',
        questions: [
          'Have specific tools or procedures been implemented to guarantee geographic redundancy, adequate version management, and system scalability?',
        ],
      },
      {
        code: 'MG14',
        title:
          "For continuously learning systems: Ensure robustness, accuracy, and performance don't degrade",
        questions: [
          'For systems that continue learning, are all established metrics (including accuracy and cybersecurity) monitored to determine if the system remains within design parameters?',
        ],
      },
      {
        code: 'MG15',
        title:
          'For continuously learning systems: Adopt mitigation strategies to minimise model deviation and prevent bias accumulation',
        questions: [
          'Have monitoring and control plans been established, with action measures for model degradation based on model deviation, concept drift, data drift, etc.?',
        ],
      },
      {
        code: 'MG16',
        title:
          'For continuously learning systems: Formally register interaction and interoperability cases with other systems or humans',
        questions: [
          'Are interactions, interoperability, and feedback received during the lifecycle formally registered, especially in continuously learning systems, to ensure traceability and improve robustness?',
        ],
      },
    ],
  },
  {
    id: 'oversight',
    title: 'Oversight',
    article: 'Article 14',
    items: [
      {
        code: 'MG01',
        title: 'Design and development measures for effective oversight',
        questions: [
          'Does the AI system have an associated risk management system per Article 9?',
          'Does the system have an associated data governance model per Article 10?',
          'Does the system have Technical Documentation per Article 11?',
          'Does the system have Records management per Article 12?',
          'Does the system have Transparency mechanisms per Article 13?',
          'Does the system have Accuracy mechanisms per Article 15?',
          'Does the system have Robustness mechanisms per Article 15?',
          'Does the system have Cybersecurity mechanisms per Article 15?',
        ],
      },
      {
        code: 'MG02',
        title: 'Enable a human-machine interface',
        questions: [
          'Does the system have an interface to manage its risk management system per Article 9?',
          'Does the system have an interface to manage its data governance model per Article 10?',
          'Does the system have an interface to manage its Technical Documentation?',
          'Does the system have an interface to manage Records information?',
          'Does the system have an interface to manage Transparency?',
          'Does the system have an interface to manage Accuracy?',
          'Does the system have an interface to manage Robustness?',
          'Does the system have an interface to manage Cybersecurity?',
        ],
      },
      {
        code: 'MG03',
        title: 'Governance model',
        questions: [
          'Has a governance model been established that applies during construction and use, including at minimum an organisational structure, procedures, and training for its use?',
          'For remote biometric identification systems: Does the governance model include validation of identification separately by at least two natural persons with the necessary competence, training, and authority?',
        ],
      },
      {
        code: 'MG04',
        title: 'Awareness: Forced error',
        questions: [
          'Does the system provide "forced error" functionality or equivalent to avoid automation bias?',
        ],
      },
      {
        code: 'MG05',
        title: 'Human in/on the loop',
        questions: [
          "In the system's governance model, has the system's level of autonomy been contemplated, detailing the moment in the process at which the responsible person(s) intervene?",
          'Does the system have agile mechanisms for the responsible person to interrupt its functioning?',
        ],
      },
      {
        code: 'MG06',
        title: 'Risk management',
        questions: ['Does the system have an associated risk management plan?'],
      },
      {
        code: 'MG07',
        title: 'Transparency',
        questions: [
          'Does the system have Transparency management mechanisms that allow its correct supervision?',
        ],
      },
      {
        code: 'MG08',
        title: 'Records',
        questions: [
          'Does the system comply with Record-Keeping measures oriented to provide Transparency about its functioning?',
        ],
      },
    ],
  },
  {
    id: 'transparency',
    title: 'Transparency',
    article: 'Article 13',
    items: [
      {
        code: 'MG01',
        title: 'Provide contact with the provider',
        questions: [
          'Is the system accompanied by a channel that enables online management of requests and incidents?',
          'Does the governance model have a clear provider contact point available to deployers?',
        ],
      },
      {
        code: 'MG02',
        title: 'Attend to the business domain',
        questions: [
          'Does the system cover transparency-related requirements applicable to its supported use cases?',
          'Does the system provide detailed information about its functional scope, also specifying possible risks from unintended uses?',
        ],
      },
      {
        code: 'MG03',
        title: "Ensure the system's functional objective",
        questions: [
          'Does the system provide information about foreseeable circumstances where it could be used for purposes other than intended?',
          'Is the system accompanied by a risk plan for such uses?',
          "Does the system have an associated procedure to supervise that such uses don't occur during operation?",
        ],
      },
      {
        code: 'MG04',
        title: 'Transparency about data used',
        questions: [
          'Does the system identify data sources used both for its learning and its utilisation, also providing the meaning, utility, and implication of using said sources and data?',
          'Is the system accompanied by tools that enable detailed exploratory data analysis (EDA) of said sources?',
        ],
      },
      {
        code: 'MG05',
        title: 'Detail from global to particular',
        questions: [
          'Does the system provide technical mechanisms that facilitate understanding of its global reasoning mechanism?',
          'Does the system provide technical mechanisms that facilitate understanding of its actions on a subset of information with similar characteristics to guarantee functioning homogeneity?',
          'Does the system provide technical mechanisms that facilitate understanding of each individual action?',
        ],
      },
      {
        code: 'MG06',
        title: 'Adapt the language',
        questions: [
          'Does the system provide mechanisms that facilitate understanding of its global reasoning in language understandable by all actors who interact with the system throughout its lifecycle?',
          'Does the system provide mechanisms that facilitate understanding of its actions on information subsets in understandable language?',
          'Does the system provide mechanisms that facilitate understanding of individual system actions in understandable language?',
        ],
      },
      {
        code: 'MG07',
        title: 'Manage complexity',
        questions: [
          "Can the AI system's technical complexity be blocking for Transparency needs in any circumstance?",
          'For black-box models: Does the provider supply tools that enable Transparency about the system?',
        ],
      },
      {
        code: 'MG08',
        title: 'Use metrics integrated in the system lifecycle',
        questions: [
          'Does the system provide metrics on data, the model, result quality, and AI system performance, specifying minimum acceptable values below which retraining or execution stoppage is necessary?',
          'Is the system accompanied by a continuous integration system (MLOps) that identifies how metric changes affect different versions/releases?',
        ],
      },
      {
        code: 'MG09',
        title: 'Apply prudence',
        questions: [
          'Does the system have pertinent technical mechanisms to prevent it from providing sensitive information (confidential information, or information revealing relevant business process details that could risk its functioning)?',
        ],
      },
      {
        code: 'MG10',
        title: 'Use causality, minimise correlations',
        questions: [
          'Does the system provide tools that identify and analyse correlations, as well as explicitly undesired ones that could hinder system Transparency or impact its accuracy?',
        ],
      },
      {
        code: 'MG11',
        title: 'Use counterfactuality',
        questions: [
          'Does the system provide technical mechanisms that enable obtaining counterfactuals to facilitate understanding?',
        ],
      },
      {
        code: 'MG12',
        title: 'Enable a channel with system usage information',
        questions: [
          'Is the system accompanied by a medium (web/wiki/doc page) that compiles information about it, oriented to facilitate Transparency about its functioning, accessible to persons with any level of responsibility over it?',
        ],
      },
      {
        code: 'MG13',
        title: 'Article 9: Risk management system',
        questions: ['Does the system have an associated risk management plan?'],
      },
      {
        code: 'MG14',
        title: 'Article 14: Human oversight',
        questions: ['Does the system comply with Human Oversight measures?'],
      },
      {
        code: 'MG15',
        title: 'Article 15: Accuracy, robustness, and cybersecurity',
        questions: [
          'Does the system comply with Accuracy, Robustness, and Cybersecurity measures oriented to provide Transparency?',
        ],
      },
      {
        code: 'MG16',
        title: 'Article 12: Records',
        questions: [
          'Does the system comply with Record-Keeping measures oriented to provide Transparency?',
        ],
      },
    ],
  },
  {
    id: 'surveillance',
    title: 'Surveillance',
    article: 'Article 72',
    items: [
      {
        code: 'MG01',
        title: 'Design the surveillance system considering all highlighted risks',
        questions: [
          'Have all relevant risks associated with the production environment and system use been exhaustively identified and documented?',
          'Does the surveillance system design integrate specific measures addressing each identified risk?',
        ],
      },
      {
        code: 'MG02',
        title: 'Create indicators covering all aspects of the environment',
        questions: [
          'Have key indicators been defined that comprehensively cover critical aspects of the operational environment (intelligent system, infrastructure, cybersecurity, users)?',
          'Is the selection of indicators based on relevance criteria and environment criticality, with due documented justification?',
          'Has indicator efficacy and pertinence been validated in real or simulated scenario tests?',
        ],
      },
      {
        code: 'MG03',
        title: 'Establish normality scales for each indicator',
        questions: [
          'Have normality scales or acceptable value ranges been set for each indicator, based on historical analysis and expected scenarios?',
          'Is the determination of these scales adequately justified and aligned with real operational conditions?',
          'Is there a mechanism to periodically update scales based on environment evolution or new collected data?',
        ],
      },
      {
        code: 'MG04',
        title: 'Integrate a real-time alert system',
        questions: [
          'Does the system incorporate a real-time alert mechanism that continuously monitors key indicators?',
          'Have critical thresholds been configured that, when exceeded, trigger immediate alerts to responsible parties?',
          'Have tests been performed in both simulated and real environments to guarantee reliability and speed of alert activation?',
        ],
      },
      {
        code: 'MG05',
        title: 'Deploy the post-market surveillance system in production',
        questions: [
          'Has a controlled deployment process for the surveillance system in the production environment been planned and documented?',
          'Has the surveillance system been deployed in production?',
        ],
      },
      {
        code: 'MG06',
        title: 'Perform production tests of the surveillance system',
        questions: [
          'Have tests been executed in the production environment to validate the operability and robustness of the surveillance system?',
        ],
      },
      {
        code: 'MG07',
        title: 'Establish the continuous and periodic surveillance policy',
        questions: [
          'Is there a formal policy that contemplates both continuous monitoring and periodic reviews of the surveillance system?',
          'Are roles and responsibilities related to surveillance clearly defined and supported by management?',
          'Is the policy reviewed and updated regularly to adapt to environmental changes or new risks?',
        ],
      },
      {
        code: 'MG08',
        title:
          "Consider anomalous scenarios that could affect the surveillance system's own performance",
        questions: [
          "Have possible anomalous scenarios that could compromise the surveillance system's performance been identified and documented?",
          'Are there contingency plans and specific measures to manage each of these scenarios?',
        ],
      },
      {
        code: 'MG09',
        title: 'Formalise leadership and commitment to surveillance system management',
        questions: [
          'Has a leader or responsible for post-market surveillance management been designated with necessary authority?',
          'Is senior management commitment reflected in resource allocation and internal communication?',
          'Is there surveillance plan documentation that evidences leadership and coordination of surveillance activities?',
        ],
      },
      {
        code: 'MG10',
        title: 'Assign a response team',
        questions: [
          'Has a specific, duly trained team been formed to respond to alerts and incidents detected by the surveillance system?',
          "Are the response team's roles and responsibilities clearly defined and communicated?",
        ],
      },
      {
        code: 'MG11',
        title: 'Define the response protocol',
        questions: [
          'Is there a formal and documented response protocol detailing actions to follow upon incident detection?',
          'Has the incident report template been generated?',
        ],
      },
      {
        code: 'MG12',
        title: 'Perform necessary training activities',
        questions: [
          'Have training needs been identified for all personnel involved in post-market surveillance?',
          'Are training exercises and response simulations conducted to evaluate effectiveness and improve team coordination?',
        ],
      },
      {
        code: 'MG13',
        title: 'Establish review and monitoring periods',
        questions: [
          'Have regular periods been defined and documented for reviewing the functioning and effectiveness of the surveillance system?',
        ],
      },
    ],
  },
];
