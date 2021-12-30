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
          width: "80%",
          margin: "auto",
        }}
      >
        <h1>Why I made this</h1>
        <div
          style={{
            textAlign: "left",
          }}
        >
          <p>
            I was drinking a lot of coffee and wanted to play a random episode
            of A Prairie Home Companion. It's not on Spotify or Apple Music, but
            it's available on{" "}
            <a href="https://www.prairiehome.org/">this website</a>, and it's
            free, but difficult to navigate. I used BeautifulSoup to scrape the
            website and find the links to the episodes. And then I built this
            simple front end. Is this illegal? I don't know.{" "}
          </p>
          <p>
            {" "}
            If you do, please email me at <b>randomlakewobegon at gmail dot com</b>.
          </p>
          <p>
            The main question I have is,{" "}
            <b>
              is it illegal to build a new frontend for assets owned by someone
              else?
            </b>{" "}
            <a href="https://www.shopify.com/plus/solutions/headless-commerce">
              Headless frontends for Shopify
            </a>{" "}
            and other platforms are a thing, but serving other people's assets
            feels substantively different, especially if I were to profit from
            it. Yet, we can already do this for Youtube videos, if we were to
            simply embed a bunch of other people's videos on a website and throw
            ads on the page.
          </p>
          <p>
            Another question I have, which is less technical, is,{" "}
            <b>
              since this was broadcast on public radio, does that make it free
              for anyone to serve the broadcast?
            </b>{" "}
            I would assume no, since there's probably a licensing situation set
            up, so that Garrison Keillor retains copyright over his work, but I
            wasn't sure.{" "}
          </p>
          <p>
            I could see this website being a violation of{" "}
            <a href="https://www.copyright.gov/fair-use/more-info.html">
              Fair Use
            </a>
            {", "}
            because this website{" "}
            <ul>
              <li>
                substantially uses the original work (since I'm providing the
                every recording), and
              </li>
              <li>
                has an effect on the marketability of the work (since I'm
                providing an alternative to the original distribution site).{" "}
              </li>
            </ul>
            But if the original recordings were free online, then am I really
            violating the marketability?
          </p>
          <p>
            In any case, I'm a big Garrison Keillor fan, and I was merely
            frustrated with his existing website, and wanted to make it easier
            to hear his show. Here are some links you can go to support him, the
            creator of the work:
            <ul>
              <li>
                <a href="https://www.garrisonkeillor.com/">
                  Garrison Keillor's website
                </a>
              </li>
              <li>
                <a href="https://www.prairiehome.org/">
                  The Original Prairie Home Companion website
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
