import { DuplicantDirection } from "../types";

import { pad } from "../utils";
import { getSymbolFrame, KAnimBuildSymbolFrame } from "./build";

import bodySwap from "./_body_swap_build";

const bodyContext = require.context(
  "../../assets/duplicant/body",
  true,
  /\.png$/
);

export function requireBody(ordinal: number, direction: DuplicantDirection) {
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
  const path = `./body_${pad(ordinal, 3)}/body_${pad(ordinal, 3)}_${frame}.png`;
  return bodyContext(path);
}

export function getBodyFrame(
  ordinal: number,
  direction: DuplicantDirection
): KAnimBuildSymbolFrame | null {
  let frameNum: number;
  switch (direction) {
    default:
      frameNum = 0;
      break;
    case DuplicantDirection.Away:
      frameNum = 1;
      break;
    case DuplicantDirection.Right:
      frameNum = 2;
      break;
  }

  const frame = getSymbolFrame(`body_${pad(ordinal, 3)}`, frameNum, bodySwap);
  return frame;
}
