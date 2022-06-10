import React from "react";
import { Pagination } from "./pagination";
import { ReactComponent as Logo } from "../../assets/SW-Icon.svg";
import { useIndex } from "../../hooks/indexContext";

import "./header.css";

const Header = () => {
  const [currentPosition, setCurrentPosition] = useIndex();

  return (
    <header className="App-header">
      <Logo className="App-logo" onClick={() => setCurrentPosition(0)} />
      <Pagination />
      <div className="current-position-wrapper">{currentPosition}</div>
    </header>
  );
};

export { Header };
