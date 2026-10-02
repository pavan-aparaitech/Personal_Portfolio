import { User } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal animation="reveal-left">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40">
              <User className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
          </div>
        </Reveal>

        <Reveal animation="reveal-right" delay={150}>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm Pavan Mali, a Software Developer with a strong interest in full-stack
              development and building practical web applications. I enjoy turning ideas
              into working software — from designing clean user interfaces to building
              reliable backend APIs and integrating databases.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My focus is on writing maintainable code, learning modern technologies,
              and creating applications that solve real problems. I'm currently pursuing
              my B.E. in Information Technology and continuously expanding my skills
              across the full web development stack.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
