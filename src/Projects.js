import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import pokemon from "./img/pokefight.png";
import rocketcoder from "./img/rocketcoder.png";
import cooking from "./img/cooking.png";
import hackernews from "./img/hackernews.png";
import weather from "./img/weather.png";
import takenote from "./img/takenote.png";
import tajam from "./img/tajam.png";
import musicinstruments from "./img/musicinstruments.png";
import bouquet from "./img/bouquet.png";
import hosnshah from "./img/hosnshah.png";

export const projects = [
  {
    title: "SafarAI: AI Travel Advisor",
    category: "AI & machine learning",
    description: "A conversational travel planner that turns trip preferences into daily itineraries with budgets, weather and currency tools, and optional destination illustrations. A stateless FastAPI API serves the browser interface.",
    technologies: "Python / FastAPI / OpenAI / JavaScript / Vercel",
    repository: "https://github.com/zinaelnahel/ai_travel_advisor",
    symbol: "TRIP",
    color: "#efe4ff",
  },
  {
    title: "Automated Customer Reviews",
    category: "AI & machine learning",
    description: "An NLP workflow for customer reviews: DistilBERT sentiment classification, product-category clustering with sentence embeddings and K-means, and evidence-based category article drafts with Qwen. Includes a Streamlit sentiment demo.",
    technologies: "Python / Transformers / Sentence Transformers / K-means / Streamlit",
    repository: "https://github.com/zinaelnahel/NLP-automated-customer-reviews",
    demo: "https://nlp-automated-customer-reviews-7jbb8pzrk6libeae7frbyo.streamlit.app/",
    symbol: "Aa",
    color: "#e0f1ed",
  },
  {title: "PokeFight", image: pokemon, description: "A Pokémon game built with React, MongoDB, Mongoose, Node.js and Material UI.", demo: "https://blissful-mccarthy-be71d3.netlify.app/"},
  {title: "Rocket Coder", image: rocketcoder, description: "A web application built with React, MongoDB, Node.js and Material UI.", demo: "https://the-rocket-coder.netlify.app/"},
  {title: "Bouquet Café", image: bouquet, description: "A café website built with JavaScript, HTML and Bootstrap.", demo: "https://bouquet.netlify.app/"},
  {title: "Hacker News", image: hackernews, description: "A news reader built with JavaScript, HTML, CSS and an API.", demo: "https://vigilant-beaver-b8a4d8.netlify.app/"},
  {title: "Ra Weather App", image: weather, description: "A weather app built with React, JavaScript and Bootstrap.", demo: "https://quizzical-knuth-c2fd31.netlify.app/"},
  {title: "Take Note", image: takenote, description: "A to-do list with local storage, built with JavaScript and Bootstrap.", demo: "https://adoring-montalcini-5db999.netlify.app/"},
  {title: "Tajam", image: tajam, description: "A website recreation built with HTML, CSS and JavaScript.", demo: "https://gallant-kepler-937e2f.netlify.app/"},
  {title: "Museum of Instruments", image: musicinstruments, description: "An instrument museum website built with HTML, JavaScript, CSS and Bootstrap.", demo: "https://orientalinstruments.netlify.app/"},
  {title: "Cooking Blog", image: cooking, description: "Cooking with Friends: a blog built with JavaScript, HTML and CSS.", demo: "https://tuttiamore.github.io/cookbook-zfc/index.html"},
  {title: "Portfolio Website", image: hosnshah, description: "A portfolio website built with HTML, JavaScript, CSS and Bootstrap.", demo: "https://hosnshah.netlify.app/"},
];

const useStyles = makeStyles({
  section: {maxWidth: 1320, margin: "0 auto", padding: "32px 20px"},
  heading: {color: "#6F69AC", marginBottom: 12},
  introduction: {maxWidth: 720, margin: "0 auto 32px", color: "#514a61"},
  card: {height: "100%", display: "flex", flexDirection: "column", textAlign: "left", borderRadius: 12},
  media: {height: 200, objectFit: "cover"},
  artwork: {height: 200, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 76, color: "#514580"},
  content: {flexGrow: 1},
  category: {color: "#6F69AC", fontWeight: 700, marginBottom: 8},
  technologies: {marginTop: 16, lineHeight: 1.7},
  actions: {padding: "8px 16px 16px", flexWrap: "wrap", gap: 8},
});

export default function Projects() {
  const classes = useStyles();
  return (
    <section className={classes.section} aria-labelledby="projects-heading">
      <Typography id="projects-heading" variant="h4" component="h1" className={classes.heading}>
        My Projects
      </Typography>
      <Typography className={classes.introduction}>
        My latest AI and machine learning work, alongside the web applications I have built.
      </Typography>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Card component="article" className={classes.card}>
              {project.image ? (
                <CardMedia component="img" className={classes.media} image={project.image} alt={`${project.title} screenshot`} />
              ) : (
                <div className={classes.artwork} style={{background: project.color}} aria-hidden="true">{project.symbol}</div>
              )}
              <CardContent className={classes.content}>
                {project.category && <Typography variant="overline" component="p" className={classes.category}>{project.category}</Typography>}
                <Typography gutterBottom variant="h5" component="h2">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{project.description}</Typography>
                {project.technologies && <Typography variant="caption" component="p" className={classes.technologies}>{project.technologies}</Typography>}
              </CardContent>
              <CardActions className={classes.actions}>
                {project.demo && <Button href={project.demo} target="_blank" rel="noopener noreferrer" size="small" color="primary" aria-label={`Open ${project.title} demo`}>Open demo</Button>}
                {project.repository && <Button href={project.repository} target="_blank" rel="noopener noreferrer" size="small" color="primary" aria-label={`View ${project.title} source code`}>Source code</Button>}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
