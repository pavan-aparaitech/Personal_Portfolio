import { ArrowRight, Mail, Terminal, Code2 } from 'lucide-react';
import Typewriter from '@/components/Typewriter';

const floatingSnippets = [
  'const dev = "Pavan"',
  'git commit -m "ship"',
  'npm run build',
  'useState()',
  'async function()',
  '<React />',
  'export default',
  'if (coffee) code()',
  'for (let i = 0; ...)',
  'try { ship() }',
  'console.log("hi")',
  'return <App />',
  'const [data, set]',
  'await fetch()',
  'interface Dev {}',
  'type Stack = string[]',
];

const snippetStyles = floatingSnippets.map((_, i) => ({
  left: `${(i * 6.1 + 3) % 95}%`,
  animationDuration: `${18 + (i % 7) * 3}s`,
  animationDelay: `${(i * 2.3) % 12}s`,
  fontSize: `${11 + (i % 3) * 2}px`,
}));

const codeLines = [
  { text: 'const developer = {', color: 'text-slate-500 dark:text-slate-400' },
  { text: '  name: "Pavan Mali",', color: 'text-slate-700 dark:text-slate-200' },
  { text: '  role: "Software Developer",', color: 'text-blue-600 dark:text-blue-400' },
  { text: '  stack: ["React", "Node", "TS"],', color: 'text-green-600 dark:text-green-400' },
  { text: '  passion: "web apps",', color: 'text-purple-600 dark:text-purple-400' },
  { text: '};', color: 'text-slate-500 dark:text-slate-400' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 overflow-hidden pt-16 grid-bg transition-colors duration-300"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Floating code snippets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingSnippets.map((snippet, i) => (
            <span
              key={i}
              className="float-snippet text-slate-300 dark:text-slate-700 opacity-40 dark:opacity-30"
              style={snippetStyles[i]}
            >
              {snippet}
            </span>
          ))}
        </div>

        {/* Decorative glow blobs */}
        <div className="absolute -top-40 -right-32 w-[28rem] h-[28rem] bg-blue-200/25 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] bg-cyan-200/20 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-purple-200/15 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <div className="hero-fade-down inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Available for opportunities</span>
            </div>

            <h1 className="hero-fade-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-slate-900 dark:text-white">Pavan</span>{' '}
              <span className="gradient-text">Mali</span>
            </h1>

            <div className="hero-fade-up mt-4 flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-semibold">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span className="text-slate-700 dark:text-slate-300">{'<'}</span>
              <Typewriter
                words={['Software Developer', 'Full-Stack Developer', 'React Developer']}
                className="text-blue-600 dark:text-blue-400"
              />
              <span className="text-slate-700 dark:text-slate-300">{' />'}</span>
            </div>

            <p className="hero-fade-up mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building modern, scalable and user-focused web applications with cutting-edge technologies and best practices.
            </p>

            {/* Stats section */}
            <div className="hero-fade-up mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              <div>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                <p className="text-slate-600 dark:text-slate-400">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">450+</p>
                <p className="text-slate-600 dark:text-slate-400">GitHub Contributions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</p>
                <p className="text-slate-600 dark:text-slate-400">Certifications</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">4+</p>
                <p className="text-slate-600 dark:text-slate-400">Hackathon Wins</p>
              </div>
            </div>

            <div className="hero-fade-scale mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-lg border border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Contact Me
              </button>
              <a
                href="https://drive.google.com/file/d/1LlA9c8bb_DHFx8UnlcJS6RVNnJix_WxW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-lg border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                📄 View Resume
              </a>
            </div>
          </div>

          {/* Right: Animated code window */}
          <div className="hero-fade-scale hidden lg:block">
            <div className="window-float perspective">
              <div className="rounded-xl bg-slate-900 dark:bg-slate-950 shadow-2xl border border-slate-700/50 dark:border-slate-800 overflow-hidden">
                {/* Window title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-900 border-b border-slate-700/50 dark:border-slate-800">
                  <div className="flex gap-2" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                    <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                    developer.ts
                  </div>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <div className="flex gap-4">
                    {/* Line numbers */}
                    <div className="flex flex-col gap-0.5 text-slate-600 dark:text-slate-500 select-none" aria-hidden="true">
                      {codeLines.map((_, i) => (
                        <span key={i} className="text-xs">{i + 1}</span>
                      ))}
                    </div>

                    {/* Code */}
                    <div className="flex flex-col gap-0.5 flex-1">
                      {codeLines.map((line, i) => (
                        <div
                          key={i}
                          className={`code-line ${line.color}`}
                          style={{
                            animation: `typeLine 0.8s steps(40) ${0.6 + i * 0.3}s both`,
                          }}
                        >
                          {line.text}
                        </div>
                      ))}
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-blue-400">{'>'}</span>
                        <span className="typewriter-cursor text-blue-400">_</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
