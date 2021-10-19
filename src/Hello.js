import React from "react";
import "./App.css";
import { useTypewriter } from "react-simple-typewriter";
import profile from "./img/profilepic.jpeg";

function Hello() {
  const text = useTypewriter({
    words: [
      "< Hello World ! I am Zina El Nahel, a Fullstack Web Developer />  ",
    ],

    // Infinit
  });

  return (
    <header className="App-header">
      <br />

      <img
        className="profile"
        src={profile}
        alt="zina-foto"
        style={{ borderRadius: "350px", height: "120px", marginTop: "40px" }}
      />

      <h5>{text}</h5>
      <img
        src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-coding-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
        alt="coding"
      />

      <br />
    </header>
  );
}

export default Hello;
