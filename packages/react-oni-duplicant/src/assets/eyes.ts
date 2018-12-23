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

export function getEyeFrame(ordinal: number): KAnimBuildSymbolFrame | null {
  const frame = getSymbolFrame(`eyes_${pad(ordinal, 3)}`, 0, swapBuild);
  return frame;
}
