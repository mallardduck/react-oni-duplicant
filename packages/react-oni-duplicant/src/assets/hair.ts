import { DuplicantDirection } from "../types";

import { pad } from "../utils";

const hairContext = require.context(
  "../../assets/duplicant/hair",
  true,
  /\.png$/
);

export function requireHair(ordinal: number, direction: DuplicantDirection) {
  let frame;
  switch (direction) {
    default:
      frame = "0";
      break;
    case DuplicantDirection.Away:
      frame = "1";
      break;
    case DuplicantDirection.Right:
      frame = "2";
      break;
  }
  const path = `./hair_${pad(ordinal, 3)}/hair_${pad(ordinal, 3)}_${frame}.png`;
  return hairContext(path);
}
