export const BackgroundCircle = ({radius}) => (
    <circle
      r={radius}
      fill="url(#grad1)"
      transform={`scale(1, 0.7)`}
    />
  );

export const TentacleCircle = ({centerX}) =>(
  <circle r="50" fill="url(#grad1)" cx={centerX + 225} cy={60} />

); 
