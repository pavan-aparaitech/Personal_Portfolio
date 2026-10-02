import { Code2, Mail, Linkedin } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/pavan-mali-1808b6273/';
const EMAIL = 'pavan.mali.aparaitech@gmail.com';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-white dark:text-white mb-2">
              <Code2 className="w-5 h-5 text-blue-400 dark:text-blue-300" aria-hidden="true" />
              Pavan Mali
            </div>
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Software Developer building modern, scalable web applications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white dark:text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white dark:text-white mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 dark:border-slate-800 text-center text-sm text-slate-400 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pavan Mali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
