import React from "react";
import { Pagination } from "./pagination";
import { ReactComponent as Logo } from "../../assets/SW-Icon.svg";
import { Canvas } from "react-three-fiber";

import "./header.css";

function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </>
  );
};

const Header = () => {
  return (
    <header className="App-header">
      <Logo className="App-logo" />
      <Pagination />
      <Canvas>
        <Scene />
      </Canvas>
    </header>
  );
};

export { Header };
