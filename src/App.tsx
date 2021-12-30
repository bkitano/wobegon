import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ReactAudioPlayer from "react-audio-player";

import { showLinks } from "./showLinks";

function getRandomShowLink() {
  const randomShowLink =
    showLinks[Math.floor(Math.random() * showLinks.length)];
  return randomShowLink;
}

function App() {
  return (
    <div className="App">
      <div>
        <h1>Play a random episode of Prarie Home Companion.</h1>
        <ReactAudioPlayer
          src={getRandomShowLink()}
          autoPlay
          controls
          loop
          preload="auto"
        />
      </div>
    </div>
  );
}

export default App;
