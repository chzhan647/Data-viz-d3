"use client";

import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useData } from "./useData";
import {
  csv,
  scaleBand,
  scaleLinear,
  scaleOrdinal,
  max,
  format,
  extent,
} from "d3";
import { Marks } from "./Marks";
import { ColorLegend } from "./ColorLegend";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Dropdown } from "./Dropdown";
import ReactDropdown from "react-dropdown";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
const width = 960;
const menuHeight = 75;
const height = 500 - menuHeight;
const margin = {
  top: 20,
  right: 200,
  bottom: 70,
  left: 200,
};
const xAxisLabelOffset = 40;
const yAxisLabelOffset = 40;
const attributes = [
  { value: "sepal_length", label: "Sepal length" },
  { value: "sepal_width", label: "Sepal Width" },
  { value: "petal_length", label: "Petal Length" },
  { value: "petal_width", label: "Petal Width" },
  { values: "species", label: "Specials" },
];

const get_label = (value) => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value == value) {
      return attributes[i].label;
    }
  }
};

const siFormat = format(".2s");
const xAxisTickFormat = (n) => siFormat(n).replace("G", "B");

const App = () => {
  const initialXAttribute = "petal_width";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];
  const xAxisLabel = get_label(xAttribute);

  const initialYAttribute = "petal_width";
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = (d) => d[yAttribute];
  const yAxisLabel = get_label(yAttribute);

  const colorValue = (d) => d.species;

  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(["#E6842A", "#137B80", "#8E6C8A"]);

  return (
    <div className="py-10 px-8">
      <span className="font-semibold mr-2">X:</span>
      <DropdownMenu>
        <DropdownMenuTrigger className="border rounded-md border-neutral-300 px-5 py-1">
          {xAttribute}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {attributes.map((attr) => (
            <DropdownMenuItem
              className="cursor-pointer hover:bg-neutral-200"
              onClick={() => {
                if (!attr.value) return;

                setXAttribute(attr.value);
              }}
              key={attr.label}
            >
              {attr.value}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <span className="font-semibold mr-2">Y:</span>
      <DropdownMenu>
        <DropdownMenuTrigger className="border rounded-md border-neutral-300 px-5 py-1">
          {yAttribute}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {attributes.map((attr) => (
            <DropdownMenuItem
              className="cursor-pointer hover:bg-neutral-200 bg-white"
              onClick={() => {
                if (!attr.value) return;

                setYAttribute(attr.value);
              }}
              key={attr.label}
            >
              {attr.value}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <label for="x-select">X:</label>

      <Dropdown
        options={attributes}
        id="x-select"
        selectedValue={xAttribute}
        onSelectedValueChange={setXAttribute}
      /> */}

      {/* <label for="y-select">Y:</label> */}
      {/* <Dropdown
        options={attributes}
        id="y-select"
        selectedValue={yAttribute}
        onSelectedValueChange={setYAttribute}
      /> */}

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

            <g transform={`translate(${innerWidth + 50})`}>
              <ColorLegend
                colorScale={colorScale}
                tickspacing={25}
                ticksize={10}
                tickTextOffset={20}
              />
            </g>

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
              colorScale={colorScale}
              colorValue={colorValue}
              tooltipFormat={xAxisTickFormat}
            />
          </g>

          {/* <Marks data={data}/> */}
        </svg>
      </div>
    </div>
  );
};

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
