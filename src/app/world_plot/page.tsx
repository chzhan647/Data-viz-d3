"use client";

import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useData } from "./useData";

import { Marks } from "./Marks";

const width = 960;
const height = 500;

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <div className="bg-white h-screen w-full">
      <svg width={width} height={height}>
        <Marks data={data} />
      </svg>
    </div>
  );
};

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
