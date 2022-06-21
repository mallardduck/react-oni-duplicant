import { DuplicantDirection } from "../types";

import { pad } from "../utils";
import { KAnimBuildSymbolFrame, getSymbolFrame } from "./build";

import swapBuild from "./_head_swap_build";

const hairContext = require.context(
  "../../assets/duplicant/headshape",
  true,
  /\.png$/
);

export function isValidHead(ordinal: number) {
  return ordinal >= 1 && ordinal <= 4;
}

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

export function getHeadFrame(
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

  const frame = getSymbolFrame(
    `headshape_${pad(ordinal, 3)}`,
    frameNum,
    swapBuild
  );
  return frame;
}
