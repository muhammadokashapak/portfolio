import { useState } from 'react';

interface PlanItem {
  title: string;
  price: number;
  features: string[];
  featured: boolean;
}

interface PlansSectionProps {
  plans: PlanItem[];
  fiverrUrl: string;
  openInNewTab: boolean;
}

export function PlansSection({ plans, fiverrUrl, openInNewTab }: PlansSectionProps) {
  const [error, setError] = useState<string | null>(null);

  const handlePlanClick = () => {
    setError(null);

    try {
      if (openInNewTab) {
        const newWindow = window.open(fiverrUrl, '_blank', 'noopener,noreferrer');
        if (!newWindow) {
          throw new Error('popup blocked');
        }
      } else {
        window.location.assign(fiverrUrl);
      }
    } catch (err) {
      setError('Unable to open Fiverr. Please copy the link below or try again.');
    }
  };

  return (
    <section id="plans" className="section plans-section">
      <div className="section-header">
        <p className="section-eyebrow">Plans</p>
        <h2>Open Fiverr plan pages for your chosen package.</h2>
        <p className="section-subtitle">Click any plan below to open the Fiverr listing in the configured tab.</p>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <article key={plan.title} className={`plan-item ${plan.featured ? 'featured' : ''}`}>
            <div>
              <h3>{plan.title}</h3>
              <p className="plan-item-price">${plan.price}</p>
              <ul className="plan-item-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <button type="button" className="button primary plan-button" onClick={handlePlanClick}>
              View Fiverr plan
            </button>
          </article>
        ))}
      </div>

      {error ? (
        <p className="external-link-error" role="alert">
          {error}{' '}
          <a href={fiverrUrl} target="_blank" rel="noreferrer">
            Open manually
          </a>
        </p>
      ) : null}
    </section>
  );
}
