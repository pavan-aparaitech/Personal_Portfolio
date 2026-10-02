import { useState, type FormEvent, useEffect } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Reveal from '@/components/Reveal';

type FormStatus = 'idle' | 'success' | 'error' | 'loading';

interface FormData {
  name: string;
  email: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const EMAIL = 'pavan.mali.aparaitech@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/pavan-mali-1808b6273/';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = 'Please enter your name';
    if (!formData.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      e.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters';
    }
    if (!formData.consent) e.consent = 'Please provide consent to submit';
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: EMAIL,
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          reply_to: formData.email.trim(),
        }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '', consent: false });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors duration-300" >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal animation="reveal">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Contact Me</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Get in touch — I'd love to hear from you</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <Reveal animation="reveal-left">
            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-700 card-hover hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md dark:hover:shadow-blue-500/20 transition-all group bg-white dark:bg-slate-800"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors group-hover:scale-110">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="font-medium text-slate-900 dark:text-white break-all">{EMAIL}</p>
                </div>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-700 card-hover hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md dark:hover:shadow-blue-500/20 transition-all group bg-white dark:bg-slate-800"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors group-hover:scale-110">
                  <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <p className="font-medium text-slate-900 dark:text-white">View Profile</p>
                </div>
              </a>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  How does this form work?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  When you submit this form, your message is sent automatically to my inbox
                  without opening any email client. Your information is processed securely
                  and not stored on any server.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal animation="reveal-right" delay={150}>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              {status === 'success' ? (
                <div
                  role="status"
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2
                    className="w-12 h-12 text-green-600 mb-4 animate-bounce"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Message sent!</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Send another message
                  </button>
                </div>
              ) : status === 'error' ? (
                <div
                  role="alert"
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <AlertCircle
                    className="w-12 h-12 text-red-600 mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Error sending message</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {errorMessage}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg border text-slate-900 dark:text-white bg-white dark:bg-slate-700 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${
                        errors.name
                          ? 'border-red-300 dark:border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg border text-slate-900 dark:text-white bg-white dark:bg-slate-700 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${
                        errors.email
                          ? 'border-red-300 dark:border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      rows={5}
                      className={`w-full px-4 py-2.5 rounded-lg border text-slate-900 dark:text-white bg-white dark:bg-slate-700 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-y disabled:opacity-50 ${
                        errors.message
                          ? 'border-red-300 dark:border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                        className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        I agree that the information I provide will be used solely
                        to respond to my inquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="consent-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="inline-block animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
