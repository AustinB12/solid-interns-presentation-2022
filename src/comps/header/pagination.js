import React from "react";
import { useIndex } from "../../hooks/indexContext";

const Pagination = ({ numOfSlides }) => {
  const [currentPosition, setCurrentPosition] = useIndex();

  const getCircles = () => {
    let circles = [];
    for (let i = 0; i < numOfSlides; i++) {
      circles.push(
        <circle
          key={i}
          cx={(i + 1) * 24}
          cy="12"
          r="10"
          fill="#D9D9D9"
          onClick={() => setCurrentPosition(i)}
          className={i === currentPosition ? "currentPage" : ""}
        />
      );
    }
    return circles;
  };

  const getWidth = () => {
    return (numOfSlides + 1) * 24;
  };

  return (
    <div className="pagination">
      <div className="pages-holder">
        <svg
          width="16"
          height="26"
          viewBox="0 0 16 26"
          fill="none"
          onClick={() => setCurrentPosition(currentPosition - 1)}
        >
          <path
            d="M13 3L3 13L13 23"
            stroke="#D9D9D9"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width={getWidth().toString()}
          height="24"
          viewBox={`0 0 ${getWidth().toString()} 24`}
        >
          {getCircles().map((c) => c)}
        </svg>
        <svg
          width="16"
          height="26"
          viewBox="0 0 16 26"
          fill="none"
          onClick={() => setCurrentPosition(currentPosition + 1)}
        >
          <path
            d="M3 3L13 13L3 23"
            stroke="#D9D9D9"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export { Pagination };
