import { useEffect, useState } from 'react';

const greetings = [
  { text: 'HI' },
  { text: 'HOLA' },
  { text: 'SALĀM' },
  { text: '你好' },
];

export function IntroAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 3600);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-greetings">
        {greetings.map((greeting, index) => (
          <span
            key={greeting.text}
            className="intro-greeting"
            style={{ animationDelay: `${index * 0.6}s` }}
          >
            {greeting.text}
          </span>
        ))}
      </div>
    </div>
  );
}
