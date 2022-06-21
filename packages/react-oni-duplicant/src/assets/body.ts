import { DuplicantDirection } from "../types";

import { pad } from "../utils";
import { getSymbolFrame, KAnimBuildSymbolFrame } from "./build";

import bodySwap from "./_body_swap_build";

const bodyContext = require.context(
  "../../assets/duplicant/body",
  true,
  /\.png$/
);

export function isValidBody(ordinal: number) {
  return ordinal >= 1 && ordinal <= 4;
}

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

export function getBodyFrame(ordinal: number): KAnimBuildSymbolFrame | null {
  const frame = getSymbolFrame(`body_${pad(ordinal, 3)}`, 0, bodySwap);
  return frame;
}
