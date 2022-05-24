import React from "react";
import { useIndex } from "../../hooks/indexContext";

const Pagination = () => {
  const [currentPosition, setCurrentPosition] = useIndex();

  return (
    <div className="pagination">
      <h1>{currentPosition}</h1>
      <button onClick={() => setCurrentPosition(0)}>0</button>
      <button onClick={() => setCurrentPosition(1)}>1</button>
      <button onClick={() => setCurrentPosition(2)}>2</button>
    </div>
  );
};

export { Pagination };
