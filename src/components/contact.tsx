import { useMemo, useState } from 'react';
import { Calendar, Clock, MessageSquare, User, X } from 'lucide-react';
import './contact.css';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  recipientEmail?: string;
};

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
};

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  message: '',
};

const buildTimeOptions = (): string[] => {
  const times: string[] = [];

  for (let hour = 9; hour <= 19; hour += 1) {
    times.push(`${hour.toString().padStart(2, '0')}:00`);
    times.push(`${hour.toString().padStart(2, '0')}:30`);
  }

  return times;
};

const timeOptions = buildTimeOptions();

export default function ContactModal({
  isOpen,
  onClose,
  recipientEmail = 'contato@dotstudio.com.br',
}: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);

  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const mailtoHref = useMemo(() => {
    const subject = formData.name.trim() || 'Novo contato via site';
    const body = [
      `Nome: ${formData.name.trim() || '-'}`,
      `Email: ${formData.email.trim() || '-'}`,
      `Telefone: ${formData.phone.trim() || '-'}`,
      `Data: ${formData.date || '-'}`,
      `Horário: ${formData.time || '-'}`,
      '',
      'Projeto / Mensagem:',
      formData.message.trim() || '-',
    ].join('\n');

    return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formData, recipientEmail]);

  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.date || !formData.time) {
      return;
    }

    window.location.href = mailtoHref;
    setFormData(INITIAL_FORM);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <div className="contact-modal__backdrop" onClick={onClose} />

      <article className="contact-modal__panel">
        <button className="contact-modal__close" type="button" onClick={onClose} aria-label="Fechar modal">
          <X size={18} />
        </button>

        <header className="contact-modal__header">
          <h2 id="contact-modal-title" className="contact-modal__title">
            <Calendar size={20} /> Agendar contato
          </h2>
          <p className="contact-modal__subtitle">
            Preencha os dados abaixo para receber nosso retorno com uma proposta alinhada ao seu projeto.
          </p>
        </header>

        <form className="contact-modal__form" onSubmit={handleSubmit}>
          <section className="contact-modal__section">
            <h3>
              <User size={15} /> Seus dados
            </h3>

            <div className="contact-modal__grid">
              <label className="contact-modal__field" htmlFor="contact-modal-name">
                Nome *
                <input
                  id="contact-modal-name"
                  type="text"
                  value={formData.name}
                  onChange={(event) => handleFieldChange('name', event.target.value)}
                  placeholder="Nome completo"
                  required
                />
              </label>

              <label className="contact-modal__field" htmlFor="contact-modal-email">
                E-mail *
                <input
                  id="contact-modal-email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => handleFieldChange('email', event.target.value)}
                  placeholder="voce@empresa.com"
                  required
                />
              </label>
            </div>

            <label className="contact-modal__field" htmlFor="contact-modal-phone">
              Telefone (opcional)
              <input
                id="contact-modal-phone"
                type="tel"
                value={formData.phone}
                onChange={(event) => handleFieldChange('phone', event.target.value)}
                placeholder="(00) 00000-0000"
              />
            </label>
          </section>

          <section className="contact-modal__section">
            <h3>
              <Clock size={15} /> Data e hora
            </h3>

            <div className="contact-modal__grid">
              <label className="contact-modal__field" htmlFor="contact-modal-date">
                Data *
                <input
                  id="contact-modal-date"
                  type="date"
                  min={minDate}
                  value={formData.date}
                  onChange={(event) => handleFieldChange('date', event.target.value)}
                  required
                />
              </label>

              <label className="contact-modal__field" htmlFor="contact-modal-time">
                Horário *
                <select
                  id="contact-modal-time"
                  value={formData.time}
                  onChange={(event) => handleFieldChange('time', event.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </section>

          <section className="contact-modal__section">
            <h3>
              <MessageSquare size={15} /> Projeto / mensagem
            </h3>

            <label className="contact-modal__field" htmlFor="contact-modal-message">
              Conte mais sobre seu objetivo
              <textarea
                id="contact-modal-message"
                rows={4}
                value={formData.message}
                onChange={(event) => handleFieldChange('message', event.target.value)}
                placeholder="Contexto do projeto, prazo e resultado esperado"
              />
            </label>
          </section>

          <div className="contact-modal__actions">
            <button type="button" className="contact-modal__btn contact-modal__btn--ghost" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="contact-modal__btn contact-modal__btn--primary">
              Solicitar contato
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}
