import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import { FaceContainer } from "./FaceContainer";
export const Face = ({
  width,
  height,
  centerX,
  centerY,
  tentacleX,
  tentacleY,
  eyeoffsetX,
  eyeoffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth,
}) => (
  <FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
    tentacleX={tentacleX}
    tentacleY={tentacleY}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "lightblue", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <BackgroundCircle radius={centerY - 2 / 2} />
    <Eyes
      eyeoffsetX={eyeoffsetX}
      eyeoffsetY={eyeoffsetY}
      eyeRadius={eyeRadius}
    />

    <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
  </FaceContainer>
);
