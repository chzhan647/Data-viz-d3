export const ColorLegend = ({
  colorScale,
  tickspacing = 20,
  ticksize = 10,
  tickTextOffset = 20,
}) =>
  colorScale.domain().map((domainValue, i) => {
    return (
      <g transform={`translate(0,${i * tickspacing})`}>
        <circle fill={colorScale(domainValue)} r={ticksize} />
        <text dy=".32em" x={tickTextOffset}>
          {domainValue}
        </text>
      </g>
    );
  });
