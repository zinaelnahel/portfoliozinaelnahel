# Zina El Nahel — Portfolio

A personal React portfolio with projects, QA engineering experience, education,
and contact details. The design uses warm colours, handwritten accents and Zina's
portrait. It includes current Ironhack AI Engineering studies, running from
31 August to 13 November 2026, alongside professional skills from the CV.

## Featured projects

- **SafarAI:** a conversational travel planner with a stateless FastAPI backend,
  weather and currency tools, itinerary budgets, and optional destination images.
- **Automated Customer Reviews:** sentiment classification, semantic product
  clustering, and evidence-based review article drafts, with a Streamlit demo.
- Ten earlier web projects, including PokeFight, Rocket Coder, and Ra Weather App.

Project titles, descriptions, images, and links live in `src/data/projects.js`.
Only add a demo URL when its public address is confirmed; otherwise use a source
code link. Five selected projects appear first; visitors can expand the full
gallery or filter by AI engineering and web development. The unavailable Bouquet
demo was replaced with the verified Heschek Beschek repository; the Hosn Shah
entry now correctly describes the Arabic-learning website it links to.

Profile details, skills, experience, education, and languages live in
`src/data/profile.js`. The compact Ironhack section highlights core project skills.
Recent tech roles are visible; earlier roles and degrees are expandable. The CV PDF
and private phone number are not included in the site.

## Run locally

Use Node.js 22:

```sh
npm ci
npm start
```

Open http://localhost:3000. To build and test:

```sh
npm run build
npm test -- --watchAll=false --runInBand
```

The build script enables the OpenSSL compatibility option needed by this
project's existing Create React App 4 / webpack 4 tooling on Node.js 22.

## Deploy on Vercel

Import `zinaelnahel/portfoliozinaelnahel` as a new Vercel project. Use the
repository root (`./`); `vercel.json` selects Create React App, `npm run build`,
and the `build` output directory. No API keys or environment variables are
needed for this static portfolio. Keep Node.js set to 22.x.

After connecting the repository, pushes to `main` trigger production deployments.
Add the public production URL here once the deployment is confirmed.

## Files

- `src/App.js`: page sections, filters and accessible navigation.
- `src/App.css`: responsive visual design, focus states and contrast styles.
- `src/components/`: project cards, bootcamp learning section and icons.
- `src/data/`: project destinations and CV-based content.
- `src/App.test.js`: seven interaction and content checks.
- `public/images/zina-el-nahel.jpg`: supplied portrait.
- `public/index.html`: page title and social metadata.
- `ACCESSIBILITY.md`: completed accessibility checks and their scope.
- `vercel.json`: hosting configuration.
