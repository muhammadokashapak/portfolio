interface ProcessBoxProps {
  step: number;
  title: string;
  description: string;
}

function getStepIllustration(step: number) {
  switch (step) {
    case 1:
      // Discovery — magnifying glass over document with exploration nodes
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Discovery: magnifying glass exploring a document"
        >
          <defs>
            <linearGradient id="lensGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb703" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00f5d4" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Document */}
          <rect x="8" y="10" width="24" height="32" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="13" y1="18" x2="27" y2="18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="13" y1="23" x2="25" y2="23" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="13" y1="28" x2="22" y2="28" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="13" y1="33" x2="20" y2="33" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Magnifying glass */}
          <circle cx="37" cy="26" r="10" fill="url(#lensGrad1)" fillOpacity="0.15" stroke="url(#lensGrad1)" strokeWidth="2" />
          <line x1="44" y1="33" x2="50" y2="39" stroke="#ffb703" strokeWidth="2.5" strokeLinecap="round" />
          {/* Exploration nodes */}
          <circle cx="37" cy="26" r="2" fill="#ffb703" opacity="0.6" />
          <circle cx="48" cy="12" r="2.5" fill="#00f5d4" opacity="0.5" />
          <circle cx="6" cy="46" r="2" fill="#ffb703" opacity="0.4" />
          <circle cx="44" cy="48" r="1.5" fill="#00f5d4" opacity="0.3" />
        </svg>
      );

    case 2:
      // Creation — document with pen and sparkle
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Creation: pen drafting a polished document"
        >
          <defs>
            <linearGradient id="penGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb703" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          {/* Document */}
          <rect x="10" y="6" width="26" height="36" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="15" y1="14" x2="31" y2="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="15" y1="19" x2="29" y2="19" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="15" y1="24" x2="26" y2="24" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="15" y1="29" x2="23" y2="29" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Pen */}
          <path d="M38 16 L48 6 L52 10 L42 20 Z" fill="url(#penGrad2)" opacity="0.9" />
          <path d="M38 16 L36 22 L42 20" fill="#f59e0b" opacity="0.7" />
          <line x1="48" y1="6" x2="52" y2="10" stroke="#ffb703" strokeWidth="1" />
          {/* Sparkle */}
          <path d="M46 30 L47.5 34 L51.5 35.5 L47.5 37 L46 41 L44.5 37 L40.5 35.5 L44.5 34 Z" fill="#00f5d4" opacity="0.7" />
          {/* Small sparkle */}
          <path d="M8 48 L9 50 L11 51 L9 52 L8 54 L7 52 L5 51 L7 50 Z" fill="#ffb703" opacity="0.5" />
        </svg>
      );

    case 3:
      // Review — overlapping chat bubbles with checkmarks
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Review: collaborative feedback with checkmarks"
        >
          {/* Back bubble (teal) */}
          <rect x="18" y="8" width="30" height="22" rx="6" fill="rgba(0,245,212,0.12)" stroke="#00f5d4" strokeWidth="1" strokeOpacity="0.4" />
          <polygon points="24,30 28,30 22,36" fill="rgba(0,245,212,0.12)" />
          {/* Checkmark in back bubble */}
          <polyline points="28,17 32,21 40,13" fill="none" stroke="#00f5d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          {/* Front bubble (amber) */}
          <rect x="4" y="20" width="30" height="22" rx="6" fill="rgba(255,183,3,0.12)" stroke="#ffb703" strokeWidth="1" strokeOpacity="0.4" />
          <polygon points="30,42 26,42 32,48" fill="rgba(255,183,3,0.12)" />
          {/* Checkmark in front bubble */}
          <polyline points="12,29 16,33 24,25" fill="none" stroke="#ffb703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          {/* Collaboration dots */}
          <circle cx="48" cy="44" r="2" fill="#00f5d4" opacity="0.4" />
          <circle cx="52" cy="38" r="1.5" fill="#ffb703" opacity="0.35" />
          <circle cx="4" cy="12" r="1.5" fill="#ffb703" opacity="0.3" />
        </svg>
      );

    case 4:
      // Delivery — rocket launching from platform
      return (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Delivery: rocket launching with final deliverables"
        >
          <defs>
            <linearGradient id="rocketGrad4" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ffb703" />
            </linearGradient>
            <linearGradient id="flameGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffb703" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00f5d4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Platform */}
          <rect x="12" y="46" width="32" height="4" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          {/* Rocket body */}
          <path d="M28 8 C28 8 22 18 22 30 L22 40 L34 40 L34 30 C34 18 28 8 28 8Z" fill="url(#rocketGrad4)" opacity="0.85" />
          {/* Rocket window */}
          <circle cx="28" cy="24" r="4" fill="rgba(0,245,212,0.3)" stroke="#00f5d4" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="28" cy="24" r="1.5" fill="#00f5d4" opacity="0.5" />
          {/* Fins */}
          <path d="M22 34 L16 42 L22 40 Z" fill="#f59e0b" opacity="0.6" />
          <path d="M34 34 L40 42 L34 40 Z" fill="#f59e0b" opacity="0.6" />
          {/* Flame */}
          <path d="M24 40 L28 52 L32 40" fill="url(#flameGrad4)" opacity="0.8" />
          <path d="M26 40 L28 48 L30 40" fill="#00f5d4" opacity="0.5" />
          {/* Trail particles */}
          <circle cx="20" cy="50" r="1.5" fill="#ffb703" opacity="0.4" />
          <circle cx="36" cy="52" r="1" fill="#00f5d4" opacity="0.3" />
          <circle cx="14" cy="20" r="2" fill="#00f5d4" opacity="0.25" />
          <circle cx="44" cy="14" r="1.5" fill="#ffb703" opacity="0.3" />
        </svg>
      );

    default:
      return null;
  }
}

export function ProcessBox({ step, title, description }: ProcessBoxProps) {
  return (
    <article className="process-box">
      <div className="process-box-header">
        <div className="process-box-illustration">
          {getStepIllustration(step)}
        </div>
        <span className="step-badge">{step}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </article>
  );
}
