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

function formatShowLinkToDate(showLink: string) {
  "https://play.publicradio.org/api-2.0.1/o/phc/2015/11/28/phc_20151128_128.mp3";
  const parts = showLink.split("/");
  const year = parts[6];
  const month = parts[7];
  const day = parts[8];

  return `${month}/${day}/${year}`;
}

function App() {
  const [showLink, setShowLink] = React.useState(getRandomShowLink());

  return (
    <div className="App">
      <div>
        <h1>Play a random episode of A Prairie Home Companion.</h1>
        <h2>Here's one from {formatShowLinkToDate(showLink)}.</h2>
        <ReactAudioPlayer
          src={showLink}
          autoPlay
          controls
          loop
          preload="auto"
        />
      </div>
      <div
        style={{
          margin: "5rem",
        }}
      >
        <h1>Why I made this</h1>
        <p>
          I was drinking a lot of coffee and wanted to play a random episode of
          A Prairie Home Companion. It's not on Spotify or Apple Music, but it's
          available on <a href="https://www.prairiehome.org/">this website</a>,
          and it's free, but difficult to navigate.
        </p>
        <p>
          I used BeautifulSoup to scrape the website and find the links to the
          episodes. And then I built this simple front end. Is this illegal? 
          I don't know. If you do, email me at <b>randomlakewobegon at gmail dot com</b>.
        </p>
      </div>
    </div>
  );
}

export default App;
