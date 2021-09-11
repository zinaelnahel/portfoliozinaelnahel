import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    alignItems: "center",
  },
  media: {
    height: 140,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <h3
        style={{
          color: "#6F69AC",
          textAlign: "center",
          marginTop: "0",
        }}
      >
        My Projects
      </h3>
      <Grid container>
        <Grid item md={4}>
          <Card
            className={classes.root}
            style={{ marginTop: "40px", margin: "40px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project"
                height="400"
                image={pokemon}
                title="Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  PokeFight
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Pokefight is a pokemon game in React , Javascript , MongoDB ,
                  Mongoose, Node.js and Material UI
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://blissful-mccarthy-be71d3.netlify.app/"
                target="_blank"
                size="small"
                color="primary"
              >
                Go to Website
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card
            className={classes.root}
            style={{
              marginTop: "40px",
              margin: "40px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project"
                height="400"
                image={rocketcoder}
                title="Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Rocket Coder
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A web application in React , MongoDB , Node.js and Material UI
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://the-rocket-coder.netlify.app/"
                size="small"
                color="primary"
                target="_blank"
              >
                Go to Website
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card
            className={classes.root}
            style={{ marginTop: "40px", margin: "40px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project"
                height="400"
                image={cooking}
                title="Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cooking Blog
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  "Cooking with friends Blog" is written in Javascript , HTML
                  and CSS
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://tuttiamore.github.io/cookbook-zfc/index.html"
                size="small"
                color="primary"
                target="_blank"
              >
                Go to Website
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card
            className={classes.root}
            style={{ marginTop: "40px", margin: "40px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project"
                height="400"
                image={hackernews}
                title="Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Hacker News
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hackernews in Javascript, HTML , CSS and API
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://vigilant-beaver-b8a4d8.netlify.app/"
                size="small"
                color="primary"
                target="_blank"
              >
                Go to Website
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card
            className={classes.root}
            style={{ marginTop: "40px", margin: "40px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project"
                height="400"
                image={weather}
                title="Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ra Weather App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Weather App in React, Javascript and Bootstrap
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://quizzical-knuth-c2fd31.netlify.app/"
                size="small"
                color="primary"
                target="_blank"
              >
                Go to Website
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card
            className={classes.root}
            style={{ marginTop: "40px", margin: "40px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project"
                height="400"
                image={takenote}
                title="Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Take Note
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A to do list with local storage in Vanilla JS and Bootstrap
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://adoring-montalcini-5db999.netlify.app/"
                size="small"
                color="primary"
                target="_blank"
              >
                Go to Website
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
