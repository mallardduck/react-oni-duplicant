import { pad } from "../utils";

const eyesContext = require.context(
  "../../assets/duplicant/eyes",
  true,
  /\.png$/
);

export function requireEyes(ordinal: number) {
  const path = `./eyes_${pad(ordinal, 3)}/eyes_${pad(ordinal, 3)}_0.png`;
  return eyesContext(path);
}
