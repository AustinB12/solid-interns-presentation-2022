import React, { useState } from "react";
import { Header } from "./comps/header/header";
import { IndexContext } from "./hooks/indexContext";
import { Slides } from "./comps/slides/slides";

import "./App.css";

function App() {
  const [currentPosition, setCurrentPosition] = useState(0); // 0 is the first position
  const [numOfSlides, setNumOfSlides] = useState(0);

  document.addEventListener("keydown", function (e) {
    switch (e.code) {
      case "ArrowUp":
      case "ArrowLeft":
        setCurrentPosition(currentPosition - 1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        setCurrentPosition(currentPosition + 1);
        break;
      default:
        break;
    }
  });

  return (
    <div className="App">
      <IndexContext.Provider value={[currentPosition, setCurrentPosition]}>
        <Header numOfSlides={numOfSlides} />
        <Slides
          currentPosition={currentPosition}
          setNumOfSlides={setNumOfSlides}
        />
      </IndexContext.Provider>
    </div>
  );
}

export default App;
