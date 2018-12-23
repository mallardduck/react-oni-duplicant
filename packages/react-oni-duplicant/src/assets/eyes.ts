import { pad } from "../utils";
import { DuplicantDirection } from "../types";
import { KAnimBuildSymbolFrame, getSymbolFrame } from "./build";

import swapBuild from "./_head_swap_build";

const eyesContext = require.context(
  "../../assets/duplicant/eyes",
  true,
  /\.png$/
);

export function requireEyes(ordinal: number) {
  const path = `./eyes_${pad(ordinal, 3)}/eyes_${pad(ordinal, 3)}_0.png`;
  return eyesContext(path);
}

export function getEyeFrame(
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

  const frame = getSymbolFrame(`eyes_${pad(ordinal, 3)}`, frameNum, swapBuild);
  return frame;
}
