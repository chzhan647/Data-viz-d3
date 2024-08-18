export const Eyes = ({ eyeoffsetX, eyeoffsetY, eyeRadius }) => (
  <>
    <circle cx={-eyeoffsetX} cy={-eyeoffsetY} r={eyeRadius} fill="red" />
    <circle cx={eyeoffsetX} cy={-eyeoffsetY} r={eyeRadius} fill="red" />
  </>
);
