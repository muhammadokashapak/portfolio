import { useEffect, useRef } from 'react';

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

interface ProjectDetailPanelProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailPanel({ project, onClose }: ProjectDetailPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const timeout = window.setTimeout(() => {
      const focusable = panelRef.current?.querySelector<HTMLElement>(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.offsetParent !== null);

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="project-detail-overlay" role="dialog" aria-modal="true" aria-labelledby="project-detail-title" onClick={onClose}>
      <div className="project-detail-panel" ref={panelRef} onClick={(event) => event.stopPropagation()}>
        <div className="project-detail-header">
          <div>
            <span className="panel-eyebrow">Project detail</span>
            <h2 id="project-detail-title">{project.title}</h2>
            <p className="project-detail-subtitle">{project.timeline} · {project.role}</p>
          </div>
          <button type="button" className="project-detail-close" onClick={onClose} aria-label="Close project details">
            ×
          </button>
        </div>

        {project.thumbnail ? (
          <div className="project-detail-media">
            <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
          </div>
        ) : null}

        <div className="project-detail-body">
          <p>{project.description}</p>
          <div className="project-detail-tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-detail-outcome">
            <span className="outcome-label">Outcome</span>
            <p>{project.outcome}</p>
          </div>
        </div>

        <div className="project-detail-actions">
          <a href={project.resumeFile} download className="button primary project-detail-cta">
            Download resume
          </a>
          <a href={project.resumeFile} target="_blank" rel="noreferrer" className="button outline project-detail-cta">
            View resume
          </a>
        </div>
      </div>
    </div>
  );
}
