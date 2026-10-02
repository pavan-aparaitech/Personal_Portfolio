import { GraduationCap, Award } from 'lucide-react';
import Reveal from '@/components/Reveal';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  metricLabel: string;
  metricValue: string;
  icon: typeof GraduationCap;
}

const education: EducationItem[] = [
  {
    degree: 'B.E. Information Technology',
    institution: "Marathwada Mitra Mandal's College of Engineering, Pune",
    period: '2024 – 2027',
    metricLabel: 'CGPA',
    metricValue: '8.38',
    icon: GraduationCap,
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'Abhaysinhraje Bhonsle Institute of Technology, Shendre',
    period: '2021 – 2024',
    metricLabel: 'Percentage',
    metricValue: '91.88%',
    icon: Award,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal animation="reveal">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">My academic background</p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {education.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.degree}
                animation="reveal-left"
                delay={idx * 150}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 rounded-xl border border-slate-200 dark:border-slate-700 card-hover hover:shadow-lg dark:hover:shadow-blue-500/10 bg-white dark:bg-slate-800"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-700 shrink-0">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">{item.institution}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">{item.period}</p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 sm:gap-0 shrink-0">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.metricLabel}</span>
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.metricValue}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
