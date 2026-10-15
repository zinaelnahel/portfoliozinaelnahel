# Zina El Nahel — Portfolio

A React portfolio with projects, skills, and contact details. The project gallery
opens by default and includes recent AI work alongside earlier web applications.

## Featured projects

- **SafarAI:** a conversational travel planner with a stateless FastAPI backend,
  weather and currency tools, itinerary budgets, and optional destination images.
- **Automated Customer Reviews:** sentiment classification, semantic product
  clustering, and evidence-based review article drafts, with a Streamlit demo.
- Ten earlier web projects, including PokeFight, Rocket Coder, and Ra Weather App.

Project titles, descriptions, images, and links live in `src/Projects.js`.
Only add a demo URL when its public address is confirmed; otherwise use a source
code link. Existing demo links are retained from the original portfolio.

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

- `src/Projects.js`: project data and responsive cards.
- `src/Nav.js`: Projects, Skills, and Contact tabs.
- `src/Hello.js`: introduction and profile image.
- `src/App.test.js`: project visibility, source links, and tab navigation tests.
- `public/index.html`: page title and social metadata.
- `vercel.json`: hosting configuration.
