import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "../slide/slide";

import wiresImage from "../../assets/cleanVsClutter.png";
import SRPExample from "../../assets/srp.jpeg";

const Slides = ({ currentPosition, setNumOfSlides }) => {
  let theSlides = [
    <motion.div
      key={0}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <div className="pageBreak">
          <h1>SOLID Programmming Principles</h1>
          <p>What are they?</p>
        </div>
        <img
          src={wiresImage}
          alt="Clean vs Cluttered wires"
          width={"40%"}
          height={"40%"}
        />
      </Slide>
    </motion.div>,
    <motion.div
      key={1}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1>Let's Break It Down</h1>
        <h2>S-O-L-I-D</h2>
        <img
          src="https://www.freecodecamp.org/news/content/images/2020/08/solid.png"
          alt="Solid Principles"
        />
        <ul style={{ listStyle: "none", fontSize: "20px" }}>
          <li>Single Responsibility Principle</li>
          <li>Open/Closed Principle</li>
          <li>Liskov Substitution Principle</li>
          <li>Interface Segregation Principle</li>
          <li>Dependency Inversion Principle</li>
        </ul>
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1>Single Responsibility Principle</h1>
        <img src={SRPExample} alt="Fork and Spoon VS a Spork" />
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1 style={{ color: "red" }}>Slide 3</h1>
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1 style={{ color: "red" }}>Slide 3</h1>
      </Slide>
    </motion.div>,
  ];

  useEffect(() => {
    setNumOfSlides(theSlides.length);
  }, [theSlides.length, setNumOfSlides]);

  const currentSlide = () => {
    return theSlides[currentPosition];
  };

  return <AnimatePresence>{currentSlide()}</AnimatePresence>;
};

export { Slides };
