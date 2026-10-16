import pokemon from '../img/pokefight.png';
import rocketcoder from '../img/rocketcoder.png';
import hackernews from '../img/hackernews.png';
import weather from '../img/weather.png';
import takenote from '../img/takenote.png';

export const projects = [
  {
    problem: 'Trip preferences need to become a practical day-by-day plan.',
    approach: 'A conversational interface connects itinerary generation with weather, currency and budget tools through FastAPI.',
    id: 'safarai', title: 'SafarAI', subtitle: 'A more personal way to plan a trip.',
    category: 'AI engineering', kind: 'travel', featured: true,
    description: 'Personalised itineraries with estimated budgets and optional destination images.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'JavaScript'],
    demo: 'https://ai-travel-advisor-mu.vercel.app/',
    repository: 'https://github.com/zinaelnahel/ai_travel_advisor',
  },
  {
    problem: 'Large volumes of reviews make sentiment and recurring themes hard to spot.',
    approach: 'Classify sentiment with DistilBERT, cluster semantic embeddings with K-means, and use category evidence to draft articles with Qwen.',
    id: 'reviews', title: 'Automated Customer Reviews', subtitle: 'From customer feedback to useful insights.',
    category: 'AI engineering', kind: 'reviews', featured: true,
    description: 'An NLP workflow turning customer feedback into insights, with model comparisons and a Streamlit demo.',
    tags: ['Python', 'Transformers', 'K-means', 'Streamlit'],
    demo: 'https://nlp-automated-customer-reviews-7jbb8pzrk6libeae7frbyo.streamlit.app/',
    repository: 'https://github.com/zinaelnahel/NLP-automated-customer-reviews',
    note: 'The hosted demo may need a moment to wake up.',
  },
  {
    id: 'accessibility', title: 'Playwright Accessibility Testing Framework', subtitle: 'Making accessibility testing part of everyday development.',
    category: 'Quality engineering', kind: 'quality',
    description: 'Repeatable accessibility checks against WCAG 2.1 AA requirements.',
    problem: 'Manual accessibility checks make consistent coverage difficult as application interfaces evolve.',
    approach: 'Built Playwright and Axe-core checks with the team to complement manual accessibility testing.',
    tags: ['Playwright', 'TypeScript', 'Axe-core', 'WCAG 2.1 AA'],
    note: 'Professional case study at IU IT Services · Source code private.',
  },
  {
    id: 'performance', title: 'K6 Performance Testing Framework', subtitle: 'A repeatable foundation for performance testing.',
    category: 'Quality engineering', kind: 'quality',
    description: 'Performance testing for frontend applications and backend services.',
    problem: 'Teams need a consistent way to assess application performance before releases.',
    approach: 'Built a reusable k6 framework from scratch, tailoring coverage with engineering teams.',
    tags: ['K6', 'Performance testing', 'Load testing'],
    note: 'Professional case study at IU IT Services · Source code private.',
  },
  {
    id: 'visual-regression', title: 'Playwright Visual Regression Framework', subtitle: 'Making unintended UI changes easier to spot.',
    category: 'Quality engineering', kind: 'quality',
    description: 'Automated checks for unintended UI changes.',
    problem: 'Functional tests alone can miss unintended changes in how an interface looks.',
    approach: 'Built a Playwright visual regression framework from scratch with coverage shaped by team needs.',
    tags: ['Playwright', 'Visual regression', 'Test automation'],
    note: 'Professional case study at IU IT Services · Source code private.',
  },
  {id: 'pokefight', title: 'PokeFight', category: 'Web development', image: pokemon, description: 'A Pokémon battle game built with a React interface and a Node.js and MongoDB stack.', tags: ['React', 'Node.js', 'MongoDB'], demo: 'https://blissful-mccarthy-be71d3.netlify.app/', repository: 'https://github.com/zinaelnahel/pokefight_front_end'},
  {id: 'rocket', title: 'The Rocket Coder', category: 'Web development', image: rocketcoder, description: 'A full-stack web application built with React, Material UI, Node.js and MongoDB.', tags: ['React', 'Material UI', 'MongoDB'], demo: 'https://rocketcoder.netlify.app/', repository: 'https://github.com/zinaelnahel/the_rocket_coder_frontend'},
  {problem: 'Forecast data needs to be easy to read across screen sizes.', approach: 'Present weather API data in a responsive React interface styled with Bootstrap.', id: 'weather', title: 'Ra Weather', category: 'Web development', image: weather, description: 'A responsive weather application that brings forecast data into a simple React interface.', tags: ['React', 'REST API', 'Bootstrap'], demo: 'https://quizzical-knuth-c2fd31.netlify.app/', repository: 'https://github.com/zinaelnahel/weather-react'},
  {id: 'hackernews', title: 'Hacker News Reader', category: 'Web development', image: hackernews, description: 'An API-powered news reader with search, pagination and regularly refreshed stories.', tags: ['React', 'JavaScript', 'REST API'], demo: 'https://vigilant-beaver-b8a4d8.netlify.app/', repository: 'https://github.com/zinaelnahel/hackernews'},
  {problem: 'Everyday tasks should remain available after the browser is refreshed.', approach: 'Build a lightweight JavaScript task list and persist notes in browser local storage.', id: 'takenote', title: 'Take Note', category: 'Web development', image: takenote, description: 'A lightweight task list with browser storage to keep everyday notes and to-dos close at hand.', tags: ['JavaScript', 'Local storage', 'Bootstrap'], demo: 'https://adoring-montalcini-5db999.netlify.app/', repository: 'https://github.com/zinaelnahel/takenote'},
];
