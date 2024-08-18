import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

// const projection = geoNaturalEarth1();
// const path = geoPath(projection);
// const graticules = geoGraticule();

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
}) =>
  data.map((d) => (
    <rect
      className="marks"
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ));
