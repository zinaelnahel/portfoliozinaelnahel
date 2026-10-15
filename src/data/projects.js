import pokemon from '../img/pokefight.png';
import rocketcoder from '../img/rocketcoder.png';
import cooking from '../img/cooking.png';
import hackernews from '../img/hackernews.png';
import weather from '../img/weather.png';
import takenote from '../img/takenote.png';
import tajam from '../img/tajam.png';
import instruments from '../img/musicinstruments.png';
import hosnshah from '../img/hosnshah.png';

export const projects = [
  {
    id: 'safarai', title: 'SafarAI', subtitle: 'A more personal way to plan a trip.',
    category: 'AI engineering', kind: 'travel', featured: true,
    description: 'A conversational travel advisor with personalised itineraries, estimated budgets, weather and currency tools, and optional destination images. Served through a stateless FastAPI API.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'JavaScript'],
    demo: 'https://ai-travel-advisor-s51s.vercel.app/',
    repository: 'https://github.com/zinaelnahel/ai_travel_advisor',
  },
  {
    id: 'reviews', title: 'Automated Customer Reviews', subtitle: 'From customer feedback to useful insights.',
    category: 'AI engineering', kind: 'reviews', featured: true,
    description: 'An NLP workflow combining DistilBERT sentiment analysis, semantic product clustering, and evidence-based article drafts with Qwen. Includes model comparisons and a Streamlit demo.',
    tags: ['Python', 'Transformers', 'K-means', 'Streamlit'],
    demo: 'https://nlp-automated-customer-reviews-7jbb8pzrk6libeae7frbyo.streamlit.app/',
    repository: 'https://github.com/zinaelnahel/NLP-automated-customer-reviews',
    note: 'The hosted demo may need a moment to wake up.',
  },
  {id: 'pokefight', title: 'PokeFight', category: 'Web development', image: pokemon, description: 'A Pokémon battle game built with a React interface and a Node.js and MongoDB stack.', tags: ['React', 'Node.js', 'MongoDB'], demo: 'https://blissful-mccarthy-be71d3.netlify.app/', repository: 'https://github.com/zinaelnahel/pokefight_front_end'},
  {id: 'rocket', title: 'The Rocket Coder', category: 'Web development', image: rocketcoder, description: 'A full-stack web application built with React, Material UI, Node.js and MongoDB.', tags: ['React', 'Material UI', 'MongoDB'], demo: 'https://the-rocket-coder.netlify.app/', repository: 'https://github.com/zinaelnahel/the_rocket_coder_frontend'},
  {id: 'weather', title: 'Ra Weather', category: 'Web development', image: weather, description: 'A responsive weather application that brings forecast data into a simple React interface.', tags: ['React', 'REST API', 'Bootstrap'], demo: 'https://quizzical-knuth-c2fd31.netlify.app/', repository: 'https://github.com/zinaelnahel/weather-react'},
  {id: 'hackernews', title: 'Hacker News Reader', category: 'Web development', image: hackernews, description: 'An API-powered news reader with search, pagination and regularly refreshed stories.', tags: ['React', 'JavaScript', 'REST API'], demo: 'https://vigilant-beaver-b8a4d8.netlify.app/', repository: 'https://github.com/zinaelnahel/hackernews'},
  {id: 'takenote', title: 'Take Note', category: 'Web development', image: takenote, description: 'A lightweight task list with browser storage to keep everyday notes and to-dos close at hand.', tags: ['JavaScript', 'Local storage', 'Bootstrap'], demo: 'https://adoring-montalcini-5db999.netlify.app/', repository: 'https://github.com/zinaelnahel/takenote'},
  {id: 'instruments', title: 'Museum of Instruments', category: 'Web development', image: instruments, description: 'A responsive site exploring musical instruments through images and editorial content.', tags: ['HTML', 'CSS', 'JavaScript'], demo: 'https://orientalinstruments.netlify.app/', repository: 'https://github.com/zinaelnahel/orientalinstruments'},
  {id: 'hosnshah', title: 'Hosn Shah', category: 'Web development', image: hosnshah, description: 'A public-facing website for Arabic language learning, with information about lessons and services.', tags: ['HTML', 'CSS', 'Bootstrap'], demo: 'https://hosnshah.netlify.app/', repository: 'https://github.com/zinaelnahel/hosnshah'},
  {id: 'cooking', title: 'Cooking with Friends', category: 'Web development', image: cooking, description: 'A collaborative cooking website created with HTML, CSS and JavaScript.', tags: ['HTML', 'CSS', 'JavaScript'], demo: 'https://tuttiamore.github.io/cookbook-zfc/index.html', repository: 'https://github.com/tuttiamore/cookbook-zfc'},
  {id: 'tajam', title: 'Tajam', category: 'Web development', image: tajam, description: 'A frontend recreation of a creative-agency website, focused on layout and responsive styling.', tags: ['HTML', 'CSS', 'JavaScript'], demo: 'https://gallant-kepler-937e2f.netlify.app/', repository: 'https://github.com/zinaelnahel/tajamzfc'},
  {id: 'heschek', title: 'Heschek Beschek', category: 'Web development', kind: 'community', description: 'A website for a Berlin cultural event, bringing together event information, imagery and a café setting.', tags: ['HTML', 'CSS', 'Bootstrap'], repository: 'https://github.com/zinaelnahel/HeschekBeschek'},
];
