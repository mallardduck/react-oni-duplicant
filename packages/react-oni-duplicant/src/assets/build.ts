export interface Vector2 {
  x: number;
  y: number;
}

export interface KAnimBuildSymbolFrame {
  frameNum: number;
  duration: number;
  imageIndex: number;
  origin: Vector2;
  width: number;
  height: number;
  uvMin: Vector2;
  uvMax: Vector2;
}

export function getSymbolFrame(
  symbolName: string,
  frameNum: number,
  data: any
): KAnimBuildSymbolFrame | null {
  const symbol = findSymbols(symbolName, data);
  if (!symbol) {
    return null;
  }
  const frame = findFrame(frameNum, symbol);
  if (!frame) {
    return null;
  }
  return frame;
}

function findSymbols(name: string, data: any): any {
  for (let i = 0; i < data.symbols.length; i++) {
    const symbol = data.symbols[i];
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
