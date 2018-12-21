import { DuplicantDirection } from "../types";

import { pad } from "../utils";

import swapBuild from "./_head_swap_build";

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

export function hairOrigin(
  ordinal: number,
  direction: DuplicantDirection
): { x: number; y: number } {
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

  const symbol = findSymbols(`hair_${pad(ordinal, 3)}`);
  if (!symbol) {
    return { x: 0, y: 0 };
  }
  const frame = findFrame(frameNum, symbol);
  if (!frame) {
    return { x: 0, y: 0 };
  }
  return frame.origin;
}

function findSymbols(name: string): any {
  for (let i = 0; i < swapBuild.symbols.length; i++) {
    const symbol = swapBuild.symbols[i];
    if (symbol.decodedName === name) {
      return symbol;
    }
  }
  return null;
}

function findFrame(num: number, symbol: any) {
  for (let i = 0; i < symbol.frames.length; i++) {
    const frame = symbol.frames[0];
    if (frame.frameNum === num) {
      return frame;
    }
  }
  return null;
}
