import React from 'react';
import Icon from './Icon';

function ProjectArtwork({project}) {
  if (project.image) return <img src={project.image} alt={`${project.title} interface`} loading="lazy" width="600" height="360" />;
  if (project.kind === 'travel') return <div className="travel-art" aria-hidden="true"><div className="travel-grid" /><svg className="travel-route" viewBox="0 0 500 260"><path d="M60 200C95 10 360 270 420 55" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 7" /><circle cx="60" cy="200" r="7" fill="currentColor" /><circle cx="420" cy="55" r="7" fill="currentColor" /></svg><span className="art-label">A LITTLE CURIOSITY. A NEW ADVENTURE.</span><span className="travel-wordmark">Safar<span>AI</span><Icon name="external" size={38} /></span><span className="art-caption">Your next adventure starts with a conversation.</span><span className="travel-stamp">PLAN<br />EXPLORE<br />DISCOVER</span></div>;
  if (project.kind === 'reviews') return <div className="reviews-art" aria-hidden="true"><div className="review-paper"><span className="mini-label">CUSTOMER REVIEWS</span><span className="review-line long" /><span className="review-line" /><span className="review-line medium" /><div className="review-sentiments"><span>Positive</span><span>Neutral</span><span>Negative</span></div></div><div className="review-mark">Aa<span>Language. Patterns. Insight.</span></div><span className="art-label">MAKING SENSE OF WHAT PEOPLE SAY.</span></div>;
  return <div className="community-art" aria-hidden="true"><span>CULTURE / COMMUNITY / BERLIN</span><strong>Heschek<br /><em>Beschek.</em></strong><span>A place to come together.</span></div>;
}

export default function ProjectCard({project, index}) {
  const primaryUrl = project.demo || project.repository;
  const Main = primaryUrl ? 'a' : 'div';
  return <article className={`project-card${project.featured ? ' featured' : ''}${project.kind === 'quality' ? ' case-study' : ''}`}>
    <Main className="project-main-link" {...(primaryUrl ? {href: primaryUrl, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Open ${project.title}${project.demo ? ' demo' : ' repository'} (opens in a new tab)`} : {})}>
      {project.kind !== 'quality' && <div className={`project-image ${project.kind || ''}`}><ProjectArtwork project={project} /><span className="project-image-arrow"><Icon name="external" /></span></div>}
      <div className="project-copy"><div className="project-eyebrow"><span>{project.category}</span><span>{String(index + 1).padStart(2, '0')}</span></div><h3>{project.title}</h3>{project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}<p className="project-description">{project.description}</p>{project.problem && <dl className="project-evidence"><dt>Problem</dt><dd>{project.problem}</dd><dt>Approach</dt><dd>{project.approach}</dd></dl>}<ul className="project-tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
    </Main>
    {primaryUrl && <div className="project-footer"><a href={primaryUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.demo ? 'View project' : 'Explore project'}: ${project.title} (opens in a new tab)`}>{project.demo ? 'View project' : 'Explore project'}<Icon name="external" size={16} /></a>{project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`Code: ${project.title} (opens in a new tab)`}><Icon name="github" size={16} />Code</a>}</div>}
    {project.note && <p className="project-note">{project.note}</p>}
  </article>;
}
