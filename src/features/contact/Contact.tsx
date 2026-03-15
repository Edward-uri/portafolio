import { useState } from 'react';
import { SectionWrapper } from '../../components/SectionWrapper';
import { personalInfo } from '../../data/portfolio.data';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { Toast, type ToastType } from '../../components/Toast';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [toast, setToast] = useState<{ message: string; type: ToastType; isVisible: boolean }>({
    message: '',
    type: 'info',
    isVisible: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const showToast = (message: string, type: ToastType) => {
    setToast({ message, type, isVisible: true });
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    
    setStatus('sending');


    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      showToast('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
      
      // Reset button state after success message
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      showToast('Error al enviar el mensaje. Inténtalo de nuevo más tarde.', 'error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };


  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
          Hablemos
        </h2>
        <p className="text-neutral-400">
          ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: 'name',    label: 'Nombre',  type: 'text',  placeholder: 'Tu nombre' },
            { name: 'email',   label: 'Email',   type: 'email', placeholder: 'tu@email.com' },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name}>
              <label className="block text-xs text-neutral-500 mb-1.5 uppercase tracking-widest font-mono">
                {label}
              </label>
              <input
                type={type} name={name} required
                placeholder={placeholder}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3
                  text-neutral-200 text-sm placeholder:text-neutral-600
                  focus:outline-none focus:border-indigo-500/60 transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="block text-xs text-neutral-500 mb-1.5 uppercase tracking-widest font-mono">
              Mensaje
            </label>
            <textarea
              name="message" required rows={5}
              placeholder="Cuéntame sobre tu proyecto..."
              value={form.message}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3
                text-neutral-200 text-sm placeholder:text-neutral-600 resize-none
                focus:outline-none focus:border-indigo-500/60 transition-colors"
            />
          </div>

          <button type="submit" disabled={status === 'sending' || status === 'sent'}
            className="w-full flex items-center justify-center gap-2 px-6 py-3
              bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed
              text-white rounded-xl font-medium text-sm transition-all duration-200">
            {status === 'sending' ? 'Enviando...' :
             status === 'sent'    ? '¡Mensaje enviado!' :
             <><FiSend size={15} /> Enviar mensaje</>}
          </button>
        </form>

        {/* Info */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-neutral-400 text-sm leading-relaxed">
            También puedes encontrarme en estas redes. Respondo rápido por email o LinkedIn.
          </p>
          {[
            { icon: <FiMail size={18} />,     label: personalInfo.email,    href: `mailto:${personalInfo.email}` },
            { icon: <FiLinkedin size={18} />, label: 'LinkedIn',            href: personalInfo.linkedin },
            { icon: <FiGithub size={18} />,   label: 'GitHub',              href: personalInfo.github },
          ].map(({ icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900
                border border-neutral-800 hover:border-indigo-500/40 transition-all
                text-neutral-400 hover:text-white group">
              <span className="text-indigo-400 group-hover:text-indigo-300">{icon}</span>
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </div>
      </div>
      
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </SectionWrapper>
  );
};
