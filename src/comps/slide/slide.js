import React from "react";

import "./slide.css";

const Slide = ({ children }) => {
  return (
    <div className="slide-container">
      <div className="slide-content">{children}</div>
    </div>
  );
};

export { Slide };
