import { DuplicantDirection } from "../types";

import { pad } from "../utils";
import { getSymbolFrame, KAnimBuildSymbolFrame } from "./build";

import swapBuild from "./_head_swap_build";

const hairContext = require.context(
  "../../assets/duplicant/hair",
  true,
  /\.png$/
);

export function isValidHair(ordinal: number) {
  return ordinal >= 1 && ordinal <= 33;
}

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

export function getHairFrame(
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

  const frame = getSymbolFrame(`hair_${pad(ordinal, 3)}`, frameNum, swapBuild);
  return frame;
}
