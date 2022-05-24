import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "./comps/slide/slide";
import { Header } from "./comps/header/header";
import { IndexContext } from "./hooks/indexContext";

import "./App.css";

function App() {
  const [currentPosition, setCurrentPosition] = useState(0); // 0 is the first position

  return (
    <div className="App">
      <IndexContext.Provider value={[currentPosition, setCurrentPosition]}>
        <Header />
        <AnimatePresence>
          {currentPosition === 0 && (
            <motion.div
              key={0}
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ x: { duration: 2, delay: 1 } }}
            >
              <Slide>
                <h1 style={{ color: "green" }}>Slide 1</h1>
              </Slide>
            </motion.div>
          )}
          {currentPosition === 1 && (
            <motion.div
              key={1}
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ x: { duration: 2, delay: 1 } }}
            >
              <Slide>
                <h1 style={{ color: "yellow" }}>Slide 2</h1>
              </Slide>
            </motion.div>
          )}
          {currentPosition === 2 && (
            <motion.div
              key={2}
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ x: { duration: 2, delay: 1 } }}
            >
              <Slide>
                <h1 style={{ color: "red" }}>Slide 3</h1>
              </Slide>
            </motion.div>
          )}
        </AnimatePresence>
      </IndexContext.Provider>
    </div>
  );
}

export default App;
