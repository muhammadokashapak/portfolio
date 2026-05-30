interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  featured?: boolean;
}

export function PricingCard({ title, price, features, featured }: PricingCardProps) {
  return (
    <article className={`package-card ${featured ? 'featured' : ''}`}>
      <div className="package-card-header">
        <h3>{title}</h3>
        <div className="price-tag">
          <span className="currency">$</span>
          <span className="price-value">{price}</span>
          <span className="period">/month</span>
        </div>
      </div>
      <ul className="features-list">
        {features.map((feature) => (
          <li key={feature} className="feature-item">
            <span className="feature-icon">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button type="button" className="button primary button-glow">
        <span className="button-text">Choose package</span>
        <span className="button-shine"></span>
      </button>
    </article>
  );
}
