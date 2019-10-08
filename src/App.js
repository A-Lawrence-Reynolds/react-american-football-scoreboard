import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [ramsCount, setRamsCount] = useState(0);
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
          <div className="timer">12:78</div>
          <div className="away">
            <h2 className="away__name">Rams</h2>
            <div className="away__score">{ramsCount}</div>
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
            onClick={() => setRamsCount(ramsCount + 6)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>

          <button
            onClick={() => setRamsCount(ramsCount + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
          <button
            onClick={() => setRamsCount(ramsCount + 2)}
            className="homeButtons__touchdown"
          >
            Away 2 Point Conversion
          </button>
          <button
            onClick={() => setRamsCount(ramsCount + 1)}
            className="homeButtons__touchdown"
          >
            Away Extra Point
          </button>
          <button
            onClick={() => setRamsCount(0)}
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
