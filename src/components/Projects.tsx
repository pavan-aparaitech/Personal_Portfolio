import { Hotel, Users, CheckCircle2, Zap, Brain, Package } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { getTechIcon } from '@/components/TechIcons';

interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  icon: typeof Hotel;
}

const projects: Project[] = [
  {
    title: 'Hotel Management System',
    description:
      'A full-stack hotel management system with two dashboards for streamlined operations.',
    features: [
      'Admin Dashboard for analytics and management',
      'Counter Dashboard for bill generation',
      'Frontend and backend integration',
      'Database integration',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    icon: Hotel,
  },
  {
    title: 'RoomBridge',
    description:
      'Smart Roommate Matching - Full-stack roommate matching platform with AI compatibility scoring and real-time chat.',
    features: [
      'AI-powered compatibility scoring using Google Gemini',
      'Firebase Authentication and Firestore for real-time chat',
      'Secure session handling',
      'Responsive UI with Tailwind CSS',
    ],
    tech: ['React 18', 'TypeScript', 'Firebase', 'Gemini AI', 'Tailwind'],
    icon: Users,
  },
  {
    title: 'HackMates',
    description:
      'Hackathon Platform - AI-powered hackathon discovery and team formation platform.',
    features: [
      'Gemini AI teammate recommendation models based on trust scores',
      'Tech stack compatibility matching',
      'Firebase Auth + Firestore for sub-second live sync',
      'Docker + GitHub Actions CI/CD',
      'Real-time team collaboration',
    ],
    tech: ['React 18', 'TypeScript', 'Firebase', 'Gemini AI', 'Tailwind'],
    icon: Zap,
  },
  {
    title: 'CareerMitra',
    description:
      'AI-Powered Career Development Platform - Comprehensive platform bridging students/graduates and recruiters through AI-powered career guidance.',
    features: [
      'Enhanced ATS Resume Analyzer with 100+ technical skill extraction',
      'Voice-based mock interviews with speech-to-text evaluation',
      'Smart Learning Path Generation with 500+ curated courses',
      'Recruiter module with verified company accounts and advanced search',
      'Admin panel for user management and platform analytics',
      'Mobile-first design with bottom navigation',
    ],
    tech: ['React 18', 'Node.js', 'Express.js', 'Azure OpenAI GPT-4', 'Firebase'],
    icon: Brain,
  },
  {
    title: 'PharmaGenAI',
    description:
      'Pharmacogenomics AI - AI-powered pharmacogenomics app parsing genomic VCF files for drug-gene interactions.',
    features: [
      'Clinical risk scoring engine (0–100) adhering to CPIC guidelines',
      'Gemini 2.0 Flash classifies medications into Safe, Toxic, and Dose Adjustment',
      'Backend REST microservices on AWS EC2',
      'VCF file processing and analysis',
    ],
    tech: ['React 18', 'TypeScript', 'Gemini 2.0 Flash', 'AWS', 'Node.js'],
    icon: Zap,
  },
  {
    title: 'MSMEBoost',
    description:
      'AI-Powered Business Management Platform for Indian MSMEs - Comprehensive real-time business management with AI insights and government scheme discovery.',
    features: [
      'Google Gemini AI business advisor with context-aware recommendations',
      'Real-time dashboards with Recharts for financial metrics',
      'Full CRUD operations management with order tracking',
      'Infrastructure assessment with equipment health monitoring',
      'Innovation tracker for R&D projects',
      'Sustainability module tracking energy, water, waste, and carbon footprint',
      'AI-powered Government Schemes Finder with 100+ schemes',
      'Framer Motion animations and shadcn/ui components',
    ],
    tech: ['React 18', 'TypeScript', 'Firebase', 'Gemini AI', 'Tailwind', 'Recharts'],
    icon: Package,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal animation="reveal">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Projects</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Things I've built</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Reveal
                key={project.title}
                animation={idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}
                delay={idx * 150}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 card-hover hover:shadow-lg dark:hover:shadow-blue-500/10 flex flex-col transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-700 shrink-0 transition-transform hover:scale-110">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2
                        className="w-4 h-4 text-green-600 dark:text-green-500 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                  {project.tech.map((t) => {
                    const TechIcon = getTechIcon(t);
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-slate-700 rounded-md border border-blue-100 dark:border-slate-600"
                      >
                        <TechIcon className="w-3.5 h-3.5" />
                        {t}
                      </span>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
