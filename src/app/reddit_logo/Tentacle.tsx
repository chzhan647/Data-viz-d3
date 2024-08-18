import * as d3 from "d3";

export const Tentacle = ({ tentacleX, tentacleY }) => {
  const tentacleArc = d3
    .arc()
    .innerRadius(90)
    .outerRadius(100)
    .startAngle(7)
    .endAngle(5);
  return (
    <path
      d={tentacleArc()}
      transform={`translate(${tentacleX}, ${tentacleY})`}
    />
  );
};
