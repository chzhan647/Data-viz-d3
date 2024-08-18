"use client";

import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useData } from "./useData";
import { csv, scaleBand, scaleLinear, max, format, extent } from "d3";
import { Marks } from "./Marks";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
const width = 960;
const height = 500;
const margin = {
  top: 20,
  right: 30,
  bottom: 70,
  left: 200,
};
const xAxisLabelOffset = 40;
const yAxisLabelOffset = 40;

const xAxisLabel = "sepal length";
const yAxisLabel = "sepal width";
const siFormat = format(".2s");
const xAxisTickFormat = (n) => siFormat(n).replace("G", "B");

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d) => d.sepal_length;
  const xValue = (d) => d.sepal_width;

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  return (
    <div className="bg-white h-screen w-full">
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset}, ${
              innerHeight / 2
            }) rotate(-90) `}
          >
            {yAxisLabel}
          </text>

          <AxisLeft yScale={yScale} innerWidth={innerWidth} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            textAnchor="middle"
            y={innerHeight + xAxisLabelOffset}
          >
            {xAxisLabel}
          </text>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={xAxisTickFormat}
          />
        </g>

        {/* <Marks data={data}/> */}
      </svg>
    </div>
  );
};

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
