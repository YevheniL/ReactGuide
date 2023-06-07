import React from "react";
import "./styles.css";
import "video-react/dist/video-react.css";
import { Epg, Layout } from "planby";

// Import hooks
import { useApp } from "./useApp";

// Import components
import { Timeline, ChannelItem, ProgramItem } from "./components";

import { Player } from "video-react";
import { channels } from "./helpers/channels";
import { epg } from "./helpers/epg";
// 'Inter',system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji', 'Segoe UI Emoji'

function App() {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  const setValueToH1 = (value1) => {
    console.log("value = " + value1);
    document.getElementById("h1elementid").innerHTML = value1;
  };

  return (
    <div>
      <style>{"body { background-color: #171923; }"}</style>
      <div
        style={{
          marginLeft: 100,
          fontFamily:
            "'Inter','system-ui','-apple-system','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji', 'Segoe UI Emoji'"
        }}
      >
        <style>
          {
            "body { background: linear-gradient(0.25turn, black 60%, #171923); }"
          }
        </style>
        <div class="float-child">
          <div class="float-sub-child">
            <img
              src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg"
              alt="Girl in a jacket"
              width="200"
              height="200"
            />
          </div>
          <div class="float-sub-child">
            <h1
              id="h1elementid"
              style={{
                color: "#d1d1d1",
                fontFamily: "Segoe UI Emoji",
                fontSize: 40,
                marginBottom: 0
              }}
            >
              hello
            </h1>
            <h2
              id="h2elementid"
              style={{
                color: "#d1d1d1",
                fontFamily: "Segoe UI Emoji",
                fontSize: 30,
                marginTop: 0
              }}
            >
              Channel: R-tv
            </h2>
            <h3
              id="h3elementid"
              style={{
                color: "#d1d1d1",
                width: 700,
                fontSize: 25,
                fontFamily: "Segoe UI Emoji",
                fontWeight: 10
              }}
            >
              Bounty hunter Boba Fett & mercenary Fennec Shand navigate the
              underworld when they return to Tatooine to claim Jabba the Hutt's
              old turf.
            </h3>
          </div>
        </div>
        <div class="float-child" style={{ backgroundPosition: "right" }}>
          <Player
            autoPlay
            play
            disableDefaultControls={true}
            playsInline
            muted
            fluid={false}
            width={910}
            height={400}
          >
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div>
      </div>

      <div style={{ height: "60vh", width: "110%" }}>
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel }) => (
              setValueToH1("The Book of Boba Fett"),
              (<ChannelItem key={channel.uuid} channel={channel} />)
            )}
          />
        </Epg>
      </div>
    </div>
  );
}

export default App;
