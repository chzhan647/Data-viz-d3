// import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

// const projection = geoNaturalEarth1();
// const path = geoPath(projection);
// const graticules = geoGraticule();

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  colorScale,
  colorValue,
  tooltipFormat,
}) =>
  data.map((d) => (
    <circle
      className="marks"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      fill={colorScale(colorValue(d))}
      r={10}
      // height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
