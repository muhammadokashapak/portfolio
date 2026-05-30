interface ResumeCardProps {
  label: string;
  file: string;
  description: string;
}

export function ResumeCard({ label, file, description }: ResumeCardProps) {
  return (
    <article className="resume-card">
      <div>
        <h3>{label}</h3>
        <p>{description}</p>
      </div>
      <div className="resume-actions">
        <a href={file} download className="button secondary resume-button">
          Download
        </a>
        <a href={file} target="_blank" rel="noreferrer" className="button outline resume-button">
          View
        </a>
      </div>
    </article>
  );
}
