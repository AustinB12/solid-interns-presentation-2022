import React from "react";
import { useIndex } from "../../hooks/indexContext";

const Pagination = () => {
  const [currentPosition, setCurrentPosition] = useIndex();

  const slides = [
    { id: 0, position: 1 },
    { id: 1, position: 2 },
    { id: 2, position: 3 },
    { id: 3, position: 4 },
    { id: 4, position: 5 },
    { id: 5, position: 6 },
    { id: 6, position: 7 },
  ];

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
        <svg width="200" height="24" viewBox="0 0 200 24">
          {slides.map((slide) => {
            return (
              <circle
                key={slide.id}
                cx={slide.position * 24}
                cy="12"
                r="10"
                fill="#D9D9D9"
                onClick={() => setCurrentPosition(slide.id)}
              />
            );
          })}
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
