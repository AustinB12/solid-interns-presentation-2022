import React from "react";
import { Pagination } from "./pagination";
import { ReactComponent as Logo } from "../../assets/SW-Icon.svg";
import { Canvas } from "react-three-fiber";

import "./header.css";

function Box(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach={"geometry"} />
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
      <Canvas>
        <Scene />
      </Canvas>
      <Pagination />
      <Logo className="App-logo" />
    </header>
  );
};

export { Header };
