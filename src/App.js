import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Icon from './components/Icon';
import ProjectCard from './components/ProjectCard';
import BootcampLearning from './components/BootcampLearning';
import {projects} from './data/projects';
import {profile, skills, experience, education, languages} from './data/profile';

const filters = ['All projects', 'AI engineering', 'Quality engineering', 'Web development'];

export default function App() {
  const [filter, setFilter] = useState('All projects');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  function goToSection(id) {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) section.focus({preventScroll: true});
  }

  function handleHeaderKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      menuButtonRef.current.focus();
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 580) setMenuOpen(false);
      if (headerRef.current) document.documentElement.style.scrollPaddingTop = `${headerRef.current.offsetHeight + 16}px`;
    }
    function handleOutsideClick(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) setMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    document.addEventListener('pointerdown', handleOutsideClick);
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(handleResize) : null;
    if (observer && headerRef.current) observer.observe(headerRef.current);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('pointerdown', handleOutsideClick);
      if (observer) observer.disconnect();
      document.documentElement.style.removeProperty('scroll-padding-top');
    };
  }, []);
  const filteredProjects = projects.filter(project => filter === 'All projects' || project.category === filter);
  const visibleProjects = filter === 'All projects' && !showAll ? filteredProjects.slice(0, 5) : filteredProjects;
  return <>
    <a className="skip-link" href="#main" onClick={() => goToSection('main')}>Skip to content</a>
    <header className="site-header" ref={headerRef} onKeyDown={handleHeaderKeyDown} onBlur={event => {if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);}}><div className="container nav-shell">
      <a className="wordmark" href="#home" aria-label="Zina El Nahel home"><svg className="little-sun" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="7" /><path d="M20 2v6m0 24v6M2 20h6m24 0h6M7 7l4 4m18 18 4 4M7 33l4-4m18-18 4-4" /></svg>Zina El Nahel<span className="wordmark-dot">.</span></a>
      <button className="menu-toggle" ref={menuButtonRef} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">{[['work', 'My projects'], ['experience', 'Experience'], ['skills', 'Skills'], ['about', 'My story'], ['contact', 'Contact']].map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => goToSection(id)}>{label}</a>)}<a className="nav-github" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span><Icon name="external" size={15} /></a></nav>
    </div></header>
    <main id="main" tabIndex={-1}>
      <section id="home" className="hero container" aria-labelledby="hero-title" tabIndex={-1}>
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />A LITTLE CORNER OF MY INTERNET</p><h1 id="hero-title">Hi, I’m Zina<span className="hello-dot">.</span></h1><p className="handwritten hero-scribble">A curious mind. A tester’s eye.</p><p className="hero-intro">I&#8217;m a Senior QA Engineer building reliable software through test automation, accessibility, performance testing and production monitoring.</p><p className="hero-description">Now I&#8217;m bringing that same curiosity and focus on quality to AI engineering.</p><div className="hero-actions"><a className="button button-primary" href="#work" onClick={() => goToSection('work')}>Explore my projects<Icon name="arrow" size={18} /></a><a className="button button-outline" href={`mailto:${profile.email}`}>Email me<Icon name="external" size={18} /></a></div><p className="hero-location"><Icon name="pin" size={16} />Based in Berlin, relocating to Spain.<br /><span>Open to Spain-based and EU-remote opportunities.</span></p><a className="text-link hero-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={17} />Find me on LinkedIn<span className="sr-only"> (opens in a new tab)</span><Icon name="external" size={15} /></a></div>
        <div className="portrait-composition"><div className="portrait-outline" /><span className="portrait-plus handwritten" aria-hidden="true">that’s me ↙</span><figure className="portrait"><img src="/images/zina-el-nahel.jpg" alt="Zina El Nahel smiling" width="400" height="400" /></figure></div>
      </section>
      <section id="work" className="section container" aria-labelledby="work-title" tabIndex={-1}>
        <div className="section-heading"><div><p className="eyebrow">the project shelf</p><h2 id="work-title">Things I’ve made<br /><span className="heading-aside">(and learned from).</span></h2></div><p>AI applications, professional quality-engineering case studies and earlier web projects. Each one shows a different side of how I build and test software.</p></div>
        <div className="project-toolbar"><div className="filters" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} className={filter === item ? 'filter active' : 'filter'} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === 'AI engineering' && <span>02</span>}</button>)}</div><span className="project-count" role="status" aria-atomic="true">{visibleProjects.length === filteredProjects.length ? `${visibleProjects.length} projects` : `${visibleProjects.length} selected projects`}</span></div>
        <div className="projects-grid" id="project-gallery">{visibleProjects.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />)}</div><div className="more-projects">{filter === 'All projects' && <button className="show-projects" aria-expanded={showAll} aria-controls="project-gallery" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show selected projects' : `Show all ${projects.length} projects`}</button>}<a className="text-link all-code" href={profile.github} target="_blank" rel="noopener noreferrer">More experiments and code on GitHub<span className="sr-only"> (opens in a new tab)</span><Icon name="external" size={17} /></a></div>
      </section>
      <section id="about" className="about-section" aria-labelledby="about-title" tabIndex={-1}><div className="container about-layout"><div className="about-heading"><p className="eyebrow">a bit of backstory</p><h2 id="about-title">I didn’t take a<br />straight line into tech.</h2><div className="about-signature">Zina El Nahel<span>A few chapters, one curious person.</span></div></div><div className="about-copy"><p className="about-lead">Before test suites and code reviews, there were lab coats and peacebuilding projects.</p><p>I studied pharmacy and biotechnology in Cairo, then public policy in Germany, and worked on peacebuilding projects across the MENA region. Eventually, curiosity led me to coding — and I found a place where asking “what if?” is a useful habit.</p><p>Since then, I have worked across frontend development, test automation, accessibility, performance engineering and production monitoring at Accenture and IU IT Services.</p><p>What I enjoy most is the combination of technical challenges and human questions: who will use this, what could go wrong, and how can we make it better?</p><p>Today, I am expanding into AI engineering at Ironhack, exploring how software quality can help make AI-powered applications more reliable, accessible and responsible.</p><div className="mentoring-note"><Icon name="accessibility" size={25} /><p><strong>Learning is better when it’s shared.</strong> I mentored career changers at ReDI School of Digital Integration in Berlin from November 2022 to March 2025.</p></div></div></div></section>
      <section id="skills" className="section container" aria-labelledby="skills-title" tabIndex={-1}><div className="section-heading"><div><p className="eyebrow">what’s in my toolbox</p><h2 id="skills-title">A few things<br />I know my way around.</h2></div><p>The tools change. The useful habits stay: asking good questions, testing assumptions, and working things out with other people.</p></div><div className="skills-grid">{skills.map(skill => <article className="skill-card" key={skill.title}><span className="skill-icon"><Icon name={skill.icon} size={25} /></span><h3>{skill.title}</h3><p>{skill.description}</p><ul className="skill-tags">{skill.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div><BootcampLearning /></section>
      <section id="experience" className="experience-section" aria-labelledby="experience-title" tabIndex={-1}><div className="container experience-layout"><div className="experience-intro"><p className="eyebrow">the road so far</p><h2 id="experience-title">Where I’ve been.<br />What I’ve worked on.</h2><p>A few stops along the way, from Cairo to Berlin, from manual testing to automation and AI.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn<span className="sr-only"> (opens in a new tab)</span><Icon name="external" size={17} /></a></div><div className="timeline">{experience.slice(0, 3).map((job, index) => <CareerEntry key={`${job.company}-${job.role}`} job={job} current={index === 0} />)}<details className="earlier-career"><summary>Earlier career &amp; education<span>Peacebuilding, software testing &amp; formal degrees</span></summary><div className="earlier-career-content">{experience.slice(3).map(job => <CareerEntry key={`${job.company}-${job.role}`} job={job} />)}<div className="earlier-degrees">{education.slice(2).map(item => <article key={item.title}><p className="education-date">{item.date}</p><h3>{item.title}</h3><p>{item.institution}</p></article>)}</div></div></details></div></div></section>
      <section className="section container education-section" aria-labelledby="education-title" tabIndex={-1}><div className="section-heading compact"><div><p className="eyebrow">Always learning</p><h2 id="education-title">There’s always something to learn.</h2></div><span className="certification"><Icon name="shield" size={17} />ISTQB CTFL · Certified 2013</span></div><div className="education-grid">{education.slice(0, 2).map(item => <article key={item.title}><p className="education-date">{item.date}</p><h3>{item.title}</h3><p>{item.institution}</p></article>)}</div><div className="languages"><h3>Languages I work and connect in</h3><ul>{languages.map(([name, level]) => <li key={name}><strong>{name}</strong><span>{level}</span></li>)}</ul></div></section>
      <section id="contact" className="contact-section" aria-labelledby="contact-title" tabIndex={-1}><div className="container"><div className="contact-top"><p className="eyebrow"><span className="status-dot" />MY INBOX IS OPEN</p><span>BERLIN → SPAIN / REMOTE</span></div><h2 id="contact-title">Have something in mind?<br /><span>Let’s talk about it.</span></h2><div className="contact-bottom"><p>Let&#8217;s talk about Senior QA, Test Automation or AI Quality Engineering roles. Based in Berlin and relocating to Spain, I&#8217;m open to Spain-based and EU-remote opportunities.</p><a className="button button-light" href={`mailto:${profile.email}`}>Write me a note<Icon name="arrow" size={19} /></a></div><div className="contact-direct"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span><Icon name="external" size={16} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span><Icon name="external" size={16} /></a></div></div></section>
    </main>
    <footer className="site-footer container"><a className="footer-name" href="#home">Zina El Nahel<span>QA engineer, builder & always a learner.</span></a><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Zina on GitHub (opens in a new tab)"><Icon name="github" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Zina on LinkedIn (opens in a new tab)"><Icon name="linkedin" /></a><a href={`mailto:${profile.email}`} aria-label="Email Zina"><Icon name="mail" /></a></div><p>Made with care. © {new Date().getFullYear()} Zina El Nahel</p></footer>
  </>;
}

function CareerEntry({job, current = false}) {
  return <article className="timeline-item"><span className={current ? 'timeline-dot current' : 'timeline-dot'} aria-hidden="true" /><p className="job-date">{job.dates}</p><h3>{job.role}</h3><p className="job-company">{job.company}<span>{job.location}</span></p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></article>;
}
