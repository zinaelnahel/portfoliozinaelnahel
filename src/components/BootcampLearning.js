import React from 'react';

export default function BootcampLearning() {
  return (
    <article className="bootcamp-note" aria-labelledby="bootcamp-title">
      <div className="bootcamp-heading">
        <div>
          <h3 id="bootcamp-title">AI Engineering at Ironhack</h3>
          <p className="bootcamp-dates">
            <time dateTime="2026-08-31">31 August 2026</time>
            {' – '}<time dateTime="2026-11-13">13 November 2026</time>
            <span>In progress</span>
          </p>
        </div>
        <a className="text-link" href="#work">See what I’m building</a>
      </div>
      <p className="bootcamp-description">At Ironhack, I put AI engineering into practice through projects in machine learning, NLP and conversational applications, bringing a QA perspective to model evaluation and reliability.</p>
      <ul className="skill-tags bootcamp-core" aria-label="Core AI skills">
        {['Python', 'scikit-learn', 'Hugging Face Transformers', 'OpenAI tool calling', 'FastAPI', 'Model evaluation'].map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </article>
  );
}
