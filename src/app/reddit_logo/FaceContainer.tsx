import { Tentacle } from "./Tentacle";
import { BackgroundCircle, TentacleCircle } from "./BackgroundCircle";

export const FaceContainer = ({
  children,
  width,
  height,
  centerX,
  centerY,
  tentacleX,
  tentacleY,
}) => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>

    <Tentacle tentacleX={tentacleX} tentacleY={tentacleY} />
    <TentacleCircle centerX={centerX} />
  </svg>
);
