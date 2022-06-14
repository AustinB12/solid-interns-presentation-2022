import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "../slide/slide";

const Slides = ({ currentPosition, setNumOfSlides }) => {
  let theSlides = [
    <motion.div
      key={0}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1>SOLID Programmming Principles</h1>
      </Slide>
    </motion.div>,
    <motion.div
      key={1}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1 style={{ color: "yellow" }}>Slide 2</h1>
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
