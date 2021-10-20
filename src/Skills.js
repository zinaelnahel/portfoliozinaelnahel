import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(35),
      height: theme.spacing(20),
    },
  },
}));
function Skills() {
  const classes = useStyles();
  return (
    <header className="App-header">
      <h6 style={{ marginTop: "0" }}>My skills set includes : </h6>
      <div className={classes.root}>
        <Paper style={{ backgroundColor: "#95DAC1", marginLeft: "90px" }}>
          <Typography
            variant="h6"
            style={{ color: "#6F69AC", textAlign: "center" }}
          >
            💻 Front-End
            <ul
              style={{
                listStyleType: "none",
                textAlign: "left",
                fontSize: "15px",
              }}
            >
              <li>HTML / CSS / Git</li>
              <li>JavaScript / React </li>
              <li>Bootstrap / Material UI </li>
              <li>UX / UI / Scrum </li>
            </ul>
          </Typography>
        </Paper>
        <Paper style={{ backgroundColor: "#95DAC1", marginLeft: "90px" }}>
          {" "}
          <Typography
            variant="h6"
            style={{ color: "#6F69AC", textAlign: "center" }}
          >
            👩🏻‍💻 Back-End
            <ul
              style={{
                listStyleType: "none",
                textAlign: "left",
                fontSize: "15px",
              }}
            >
              <li>Node.js / Express.js</li>
              <li>MongoDB / Mongoose</li>
              <li>SQL / PostgreSQL</li>
              <li>API</li>
            </ul>
          </Typography>
        </Paper>
      </div>
    </header>
  );
}

export default Skills;
