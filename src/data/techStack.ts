export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'Mobile & AI' | 'Database & Tooling';
  description: string;
}

export const TECH_STACK_ITEMS: TechItem[] = [
  { name: 'Next.js 15', category: 'Frontend', description: 'Server Components & Partial Prerendering' },
  { name: 'React 19', category: 'Frontend', description: 'Concurrent mode & fine-grained reactivity' },
  { name: 'TypeScript', category: 'Frontend', description: 'End-to-end type safety' },
  { name: 'Tailwind CSS v4', category: 'Frontend', description: 'Modern Oxide engine styling' },
  { name: 'Node.js', category: 'Backend & Cloud', description: 'High-throughput async event loop' },
  { name: 'Python / FastAPI', category: 'Backend & Cloud', description: 'High-performance AI & data pipelines' },
  { name: 'Go (Golang)', category: 'Backend & Cloud', description: 'Ultra-low latency microservices' },
  { name: 'AWS Cloud', category: 'Backend & Cloud', description: 'ECS, Lambda, RDS, GovCloud architectures' },
  { name: 'Vercel Edge', category: 'Backend & Cloud', description: 'Global CDN edge computing <50ms' },
  { name: 'PostgreSQL', category: 'Database & Tooling', description: 'ACID transactional & Row-Level Security' },
  { name: 'Redis', category: 'Database & Tooling', description: 'In-memory caching & distributed locks' },
  { name: 'Docker', category: 'Database & Tooling', description: 'Containerized reproducible deployments' },
  { name: 'Flutter', category: 'Mobile & AI', description: 'Pixel-perfect 60fps cross-platform mobile' },
  { name: 'React Native', category: 'Mobile & AI', description: 'Native-speed iOS and Android experiences' },
  { name: 'LangChain & OpenAI', category: 'Mobile & AI', description: 'Generative AI & autonomous agent pipelines' },
  { name: 'Stripe', category: 'Database & Tooling', description: 'Enterprise billing, invoices, & usage meters' }
];
