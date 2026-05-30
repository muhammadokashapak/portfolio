interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-media">
        <img src={image} alt={`Client testimonial by ${author}`} loading="lazy" />
      </div>
      <p>“{quote}”</p>
      <footer>
        <strong>{author}</strong>
        <span>{role}</span>
      </footer>
    </article>
  );
}
