import { Monitor, Server, Database, Wrench } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { getTechIcon } from '@/components/TechIcons';

interface SkillCategory {
  title: string;
  icon: typeof Monitor;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Monitor,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Tools & Deployment',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Vercel', 'Firebase'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal animation="reveal">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Skills</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Technologies I work with across the stack</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <Reveal
                key={cat.title}
                animation={catIdx % 2 === 0 ? 'reveal-left' : 'reveal-right'}
                delay={catIdx * 100}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 card-hover hover:shadow-lg dark:hover:shadow-blue-500/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cat.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => {
                    const TechIcon = getTechIcon(skill);
                    return (
                      <li key={skill}>
                        <span className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 transition-all hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-600 hover:scale-105 hover:-translate-y-0.5">
                          <TechIcon className="w-5 h-5 shrink-0" />
                          {skill}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
