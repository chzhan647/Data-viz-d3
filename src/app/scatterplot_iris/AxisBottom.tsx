export const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
  xScale.ticks().map((tickValue) => (
    <g className="tick" transform={`translate(${xScale(tickValue)},0)`}>
      <line y2={innerHeight} />
      <text y={innerHeight + 5} style={{ textAnchor: "middle" }} dy=".71em">
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
