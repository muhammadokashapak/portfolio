import { useState, type ChangeEvent, type FormEvent } from 'react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
  website: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',
  website: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';
    if (form.website.trim()) nextErrors.website = 'Spam detected.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setForm(initialState);
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-live="polite">
      <div className="form-grid">
        <div className="form-field">
          <label className="field-label" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            className="field-input"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span id="name-error" className="form-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            className="field-input"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className="form-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="subject">
            Subject *
          </label>
          <input
            id="subject"
            name="subject"
            className="field-input"
            type="text"
            value={form.subject}
            onChange={handleChange}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <span id="subject-error" className="form-error">
              {errors.subject}
            </span>
          )}
        </div>

        <div className="form-field">
          <label className="field-label" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            className="field-input"
            type="tel"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-field full-width">
          <label className="field-label" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            className="field-textarea"
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <span id="message-error" className="form-error">
              {errors.message}
            </span>
          )}
        </div>

        <div className="honeypot-field" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" value={form.website} onChange={handleChange} autoComplete="off" />
          {errors.website && <span className="form-error">{errors.website}</span>}
        </div>
      </div>

      {status === 'success' && <div className="form-success form-alert">Your message was sent successfully.</div>}
      {status === 'error' && Object.keys(errors).length === 0 && (
        <div className="form-error form-alert">Unable to submit the form. Please try again.</div>
      )}

      <div className="form-actions">
        <button type="submit" className="button primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
