import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

secondsToTime(secs){
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
  };
  return obj;
};




function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [tigerCount, setTigerCount] = useState(0);
  const [lionsCount, setLionsCount] = useState(0);
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsCount}</div>
          </div>
          <div className="timer">{obj}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => setLionsCount(lionsCount + 6)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => setLionsCount(lionsCount + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
          <button
            onClick={() => setLionsCount(lionsCount + 2)}
            className="homeButtons__touchdown"
          >
            Home 2 Point Conversion
          </button>
          <button
            onClick={() => setLionsCount(lionsCount + 1)}
            className="homeButtons__touchdown"
          >
            Home Extra Point
          </button>
          <button
            onClick={() => setLionsCount(0)}
            className="homeButtons__touchdown"
          >
            Home Reset Points
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => setTigerCount(tigerCount + 6)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>

          <button
            onClick={() => setTigerCount(tigerCount + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
          <button
            onClick={() => setTigerCount(tigerCount + 2)}
            className="homeButtons__touchdown"
          >
            Away 2 Point Conversion
          </button>
          <button
            onClick={() => setTigerCount(tigerCount + 1)}
            className="homeButtons__touchdown"
          >
            Away Extra Point
          </button>
          <button
            onClick={() => setLionsCount(0)}
            className="homeButtons__touchdown"
          >
            Away Reset Points
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
