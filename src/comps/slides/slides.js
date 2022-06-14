import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "../slide/slide";
import ReactEmbedGist from "react-embed-gist";

import wiresImage from "../../assets/cleanVsClutter.png";
import SRPExample from "../../assets/srp.jpeg";
import Thanks from "../../assets/thanks.svg";
import Barb from "../../assets/BarbaraLiskov.png";
import ISP from "../../assets/ISP.png";
import Board from "../../assets/board_thumb.png";

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
        <ReactEmbedGist
          wrapperClass="gistWrapper"
          gist="AustinB12/ea49821801cdae5d51e3a5911d9a226f"
        ></ReactEmbedGist>
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <div className="pageBreak">
          <h1>Open/Closed Principle</h1>
          <p>
            <i>
              A (well-defined and well-tested) class should be open to
              extension, not modification.
            </i>
          </p>
        </div>
        <ReactEmbedGist
          wrapperClass="gistWrapper"
          gist="AustinB12/53ab411ef5fb2373c2a0e6fcb1f39265"
        ></ReactEmbedGist>
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <div className="pageBreak">
          <h1>Liskov Substitution Principle</h1>
          <p>This one is a little harder to conceptualize.</p>
          <p>
            This principle says that every derived class should be able to be
            replaced with its{" "}
          </p>
        </div>
        <div className="pageBreak">
          <img src={Board} alt="Board Game Example" />
        </div>
        <div className="pageBreak">
          <p>
            Fun Fact! This is Barbara Liskov, I.E. where this principle comes
            from.
          </p>
          <img src={Barb} alt="Barbara Liskov" />
        </div>
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1>Interface Substitution Principle</h1>
        <p>
          It is better to have many smaller more specific interfaces than just a
          few very broad interfaces.
        </p>
        <img src={ISP} alt="Interface Segregation Principle" />
        <script src="https://gist.github.com/AustinB12/0cf0ea1b868f8ae5b656bc5cef714f7c.js"></script>
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1>Dependency Inversion Principle</h1>
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1>Conclusion</h1>
        <p>
          These are actually kinda important. You will use them in your career.
        </p>
        <p>
          You don't need to memorize these, but you should try to keep them in
          mind.
        </p>
      </Slide>
    </motion.div>,
    <motion.div
      key={2}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: 0.5 } }}
    >
      <Slide>
        <h1>Questions? Comments?</h1>
        <img style={{ marginTop: "50px" }} src={Thanks} alt="Thanks" />
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
