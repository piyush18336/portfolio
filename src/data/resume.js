export const profile = {
  name: 'Piyush Gupta',
  titles: ['AI Engineer', 'Fullstack Developer', 'Gen AI Specialist', 'LLM Architect'],
  email: 'piyush18336@gmail.com',
  phone: '+91 9910890980',
  location: 'Ghaziabad, India',
  linkedin: 'https://linkedin.com/in/piyush-gupta-96b254123',
  summary:
    'AI Engineer with 4+ years of experience designing and shipping scalable Generative AI applications using Retrieval-Augmented Generation (RAG), Multi-Agent systems, Model Context Protocol (MCP/FastMCP), LangGraph, and LLM orchestration. Built real-time AI avatar pipelines integrating STT, Hybrid RAG, LLMs, XTTS, and MuseTalk for conversational learning platforms.',
  stats: [
    { value: '4+', label: 'Years Experience' },
    { value: '4', label: 'Domains Served' },
    { value: '10+', label: 'Technologies' },
    { value: '4', label: 'Major Projects' },
  ],
};

export const experience = [
  {
    role: 'AI Engineer / Fullstack AI Engineer',
    company: 'WittyBrains Software Tech. Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Jun 2022 – Present',
    bullets: [
      'Designed and delivered scalable Generative AI applications end-to-end using RAG, Multi-Agent architectures, MCP/FastMCP tools, LangGraph, and LLM orchestration across EdTech, logistics, and healthcare domains.',
      'Engineered real-time conversational AI avatar pipelines (VAD → STT → Intent Routing → Hybrid RAG → LLM → TTS/XTTS → MuseTalk) with FastAPI and WebRTC, optimizing for low-latency streaming inference.',
      'Led full-stack AI product development with React.js frontends and Python/FastAPI backends, integrating multiple backend services and APIs for seamless data flow.',
      'Collaborated with cross-domain teams and stakeholders to translate product requirements into production-grade, maintainable AI features.',
    ],
    tags: ['Gen AI', 'RAG', 'LangGraph', 'FastAPI', 'React.js', 'WebRTC', 'MCP'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'EdTech LMS — AI Avatar Assistant',
    subtitle: 'Real-Time Conversational AI for Learning',
    period: 'May 2026 – Present',
    tags: ['React.js', 'FastAPI', 'WebRTC', 'Pipecat', 'MuseTalk', 'RAG', 'XTTS'],
    color: '#00d4ff',
    bullets: [
      'Built an AI-powered LMS with a real-time conversational avatar assistant integrated into a React dashboard.',
      'Designed an end-to-end Gen AI pipeline: VAD → STT → Intent Router → Hybrid RAG → LLM → TTS → MuseTalk Avatar.',
      'Architected low-latency AI inference and streaming for real-time avatar conversations.',
      'Implemented RAG workflows for contextual Q&A and personalized learning.',
    ],
  },
  {
    id: 2,
    title: 'Kenco — Shipment Analytics Dashboard',
    subtitle: 'Intelligent Multi-Agent Query System',
    period: 'Mar 2025 – Apr 2026',
    tags: ['Multi-Agent', 'MCP', 'Dask', 'Python', 'LangGraph'],
    color: '#a855f7',
    bullets: [
      'Developed an interactive dashboard for real-time shipment and pre-shipment load analysis.',
      'Implemented a multi-agent architecture: Supervisor, Security, Filter, and Query Agents to orchestrate workflows.',
      'Integrated MCP tools and Dask Compute to handle large-scale data queries and heavy computations efficiently.',
      'Designed secure authentication, dynamic filter handling, and automated query execution for accurate insights.',
    ],
  },
  {
    id: 3,
    title: 'Intelligent Farming IoT System',
    subtitle: 'Real-Time Sensor Data Platform',
    period: 'Jan 2025 – Mar 2025',
    tags: ['Python', 'Flask', 'Pandas', 'NumPy', 'PostgreSQL'],
    color: '#00ff88',
    bullets: [
      'Designed and developed RESTful APIs for real-time IoT sensor data ingestion.',
      'Utilized Pandas and NumPy for processing large-scale environmental datasets.',
      'Implemented PostgreSQL data models to store and query sensor data efficiently.',
      'Improved robustness with data validation and comprehensive error handling.',
    ],
  },
  {
    id: 4,
    title: 'ShareCare — Healthcare Platform',
    subtitle: 'Responsive React Frontend',
    period: 'Jan 2023 – Dec 2024',
    tags: ['React.js', 'JavaScript', 'Webpack', 'Vite', 'MobX'],
    color: '#f59e0b',
    bullets: [
      'Developed and maintained a client-side healthcare application using React, focusing on responsive UI.',
      'Integrated multiple backend services and APIs for seamless data flow and interaction.',
      'Built reusable components and managed application state with React hooks and context.',
    ],
  },
];

export const skills = [
  {
    category: 'Generative AI',
    color: '#00d4ff',
    icon: '🤖',
    items: ['Generative AI', 'LLMs', 'RAG', 'Hybrid RAG', 'Multi-Agent Systems', 'LangGraph', 'LLM Orchestration', 'Prompt Engineering'],
  },
  {
    category: 'AI Tooling & Protocols',
    color: '#a855f7',
    icon: '⚙️',
    items: ['MCP / FastMCP', 'Pipecat', 'STT', 'TTS / XTTS', 'MuseTalk', 'VAD', 'Intent Routing', 'WebRTC'],
  },
  {
    category: 'Languages',
    color: '#00ff88',
    icon: '💻',
    items: ['Python', 'JavaScript', 'SQL', 'HTML'],
  },
  {
    category: 'Frameworks & Libraries',
    color: '#f59e0b',
    icon: '🧩',
    items: ['FastAPI', 'Flask', 'React.js', 'Node.js', 'NumPy', 'Pandas', 'Dask', 'MobX'],
  },
  {
    category: 'Databases',
    color: '#ec4899',
    icon: '🗄️',
    items: ['PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    category: 'Tools & DevOps',
    color: '#06b6d4',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'CI/CD', 'Webpack', 'Vite', 'REST APIs', 'Cloud-Native Systems'],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Institute of Technology and Science',
    period: 'Jun 2020 – Jun 2022',
    score: '85.4%',
    color: '#00d4ff',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Institute of Technology and Science',
    period: 'Jun 2017 – May 2020',
    score: '75%',
    color: '#a855f7',
  },
];
