import { DuplicantDirection } from "../types";

import { pad } from "../utils";

const hairContext = require.context(
  "../../assets/duplicant/headshape",
  true,
  /\.png$/
);

export function requireHead(ordinal: number, direction: DuplicantDirection) {
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
  const path = `./headshape_${pad(ordinal, 3)}/headshape_${pad(
    ordinal,
    3
  )}_${frame}.png`;
  return hairContext(path);
}
