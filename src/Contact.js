import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import github from "./img/github.png";
import linkedin from "./img/linked.png";

import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));
function Contact() {
  const classes = useStyles();
  return (
    <header className="App-header">
      <h6 style={{ marginTop: "0" }}>👋 Get in Touch </h6>
      <div className={classes.root}>
        <Paper style={{ backgroundColor: "#95DAC1" }}>
          <Typography
            variant="h6"
            style={{ color: "#6F69AC", textAlign: "center" }}
          >
            <ul
              style={{
                listStyleType: "none",
                textAlign: "left",
                fontSize: "15px",
              }}
            >
              <li>
                <img
                  src={linkedin}
                  alt={linkedin}
                  style={{ height: "20px", marginRight: "10px" }}
                />
                <a
                  href="https://www.linkedin.com/in/zina-el-nahel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <br />
              <li>
                <img
                  src={github}
                  alt={github}
                  style={{ height: "20px", marginRight: "10px" }}
                />
                <a
                  href="https://github.com/zinaelnahel"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <br />
              <li>
                📧{" "}
                <a
                  href="mailto:zinamahmoud1989@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "10px" }}
                >
                  Email{" "}
                </a>
              </li>
            </ul>
          </Typography>
        </Paper>
      </div>
    </header>
  );
}

export default Contact;
