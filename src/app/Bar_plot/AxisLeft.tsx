export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(0,${yScale(tickValue) + yScale.bandwidth() / 2})`}
    >
      <text key={tickValue} style={{ textAnchor: "end" }} x={-3} dy=".32em">
        {tickValue}
      </text>
    </g>
  ));

// https://www.youtube.com/watch?v=yVxnQQpBg-Q&list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV&index=27&ab_channel=CurranKelleher
