interface Project {
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  outcome: string;
  timeline: string;
  role: string;
  resumeLabel: string;
  resumeFile: string;
  thumbnail?: string;
}

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      className="project-card-item project-card-button"
      onClick={() => onSelect(project)}
      aria-label={`View project details for ${project.title}`}
    >
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <span className="project-card-role">{project.role}</span>
      </div>
      <p className="project-card-summary">{project.summary}</p>
      <div className="project-card-meta">
        <span>{project.timeline}</span>
        <span>{project.resumeLabel}</span>
      </div>
      <div className="project-tech-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-outcome-box">
        <span className="outcome-label">OUTCOME</span>
        <p>{project.outcome}</p>
      </div>
    </button>
  );
}
