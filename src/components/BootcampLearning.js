import React from 'react';
import {bootcampPractice, bootcampCurriculum} from '../data/profile';

export default function BootcampLearning() {
  return (
    <article className="bootcamp-note" aria-labelledby="bootcamp-title">
      <div className="bootcamp-heading">
        <div>
          <p className="handwritten">back in student mode</p>
          <h3 id="bootcamp-title">AI Engineering at Ironhack</h3>
          <p className="bootcamp-dates">
            <time dateTime="2026-08-31">31 August 2026</time>
            {' – '}<time dateTime="2026-11-13">13 November 2026</time>
            <span>In progress</span>
          </p>
        </div>
        <a className="text-link" href="#work">See what I’m building</a>
      </div>
      <p className="bootcamp-description">I’m learning AI engineering by building things, testing my assumptions and trying again. Here are the skills I’m putting into practice through the bootcamp, labs and my projects.</p>
      <div className="bootcamp-skills">
        {bootcampPractice.map(group => (
          <section key={group.title} aria-label={group.title}>
            <h4>{group.title}</h4>
            <ul className="skill-tags">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </section>
        ))}
      </div>
      <div className="syllabus-note">
        <h4>Also on my learning path</h4>
        <p>These topics are covered across the full programme. My coursework is still in progress.</p>
        <ul className="skill-tags">{bootcampCurriculum.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    </article>
  );
}
