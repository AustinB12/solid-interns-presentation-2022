import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "./comps/slide/slide";
import { Header } from "./comps/header/header";
import { IndexContext } from "./hooks/indexContext";

import "./App.css";

function App() {
  const [currentPosition, setCurrentPosition] = useState(0); // 0 is the first position

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

  const currentSlide = () => {
    switch (currentPosition) {
      case 0:
        return (
          <motion.div
            key={0}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ x: { duration: 2 } }}
          >
            <Slide>
              <h1 style={{ color: "green" }}>Slide 1</h1>
            </Slide>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key={1}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ x: { duration: 2 } }}
          >
            <Slide>
              <h1 style={{ color: "yellow" }}>Slide 2</h1>
            </Slide>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key={2}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ x: { duration: 2 } }}
          >
            <Slide>
              <h1 style={{ color: "red" }}>Slide 3</h1>
            </Slide>
          </motion.div>
        );
      default:
        return (
          <motion.div
            key={2}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ x: { duration: 2 } }}
          >
            <Slide>
              <h1 style={{ color: "red" }}>Slide 3</h1>
            </Slide>
          </motion.div>
        );
    }
  };

  return (
    <div className="App">
      <IndexContext.Provider value={[currentPosition, setCurrentPosition]}>
        <Header />
        <AnimatePresence>{currentSlide()}</AnimatePresence>
      </IndexContext.Provider>
    </div>
  );
}

export default App;
