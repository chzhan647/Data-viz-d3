import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

// https://www.youtube.com/watch?v=2LhoCfjm8R4
console.log(d3.version);

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokewidth = 10;
const eyeoffsetX = 90;
const eyeoffsetY = 90;
const eyeRadius = 50;
const tentacleX = 600; // Adjust as needed for the tentacle's x-position
const tentacleY = 100; // Adjust as needed for the tentacle's y-position

const mouthArc = d3
  .arc()
  .innerRadius(0)
  .outerRadius(90)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

const tentacleArc = d3
  .arc()
  .innerRadius(90)
  .outerRadius(100)
  .startAngle(7)
  .endAngle(5);

const App = () => {
  return (
    <div className="bg-white h-screen w-full">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "lightblue", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "white", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <circle
            r={centerY - strokewidth / 2}
            fill="url(#grad1)"
            transform={`scale(1, 0.7)`}
          />
          <circle cx={-eyeoffsetX} cy={-eyeoffsetY} r={eyeRadius} fill="red" />
          <circle cx={eyeoffsetX} cy={-eyeoffsetY} r={eyeRadius} fill="red" />
          <path d={mouthArc()} />
        </g>
        <path
          d={tentacleArc()}
          transform={`translate(${tentacleX}, ${tentacleY})`}
        />
        <circle r="50" fill="url(#grad1)" cx={centerX + 225} cy={60} />
      </svg>
    </div>
  );
};

export default App;
