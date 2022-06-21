import * as React from "react";

import classnames from "classnames";

import { requireEyes, getEyeFrame, isValidEyes } from "../assets/eyes";

export interface EyesProps {
  className?: string;
  ordinal: number;
}

const Eyes: React.SFC<EyesProps> = ({ className, ordinal }) => {
  if (!isValidEyes(ordinal)) {
    console.warn("Invalid eyes ordinal", ordinal);
    return null;
  }

  const frame = getEyeFrame(ordinal);
  return (
    <img
      style={{
        marginLeft: frame ? -frame.width / 2 + frame.origin.x : 0,
        marginTop: frame ? -frame.height / 2 + frame.origin.y : 0,
        width: frame ? frame.width : 0,
        height: frame ? frame.height : 0,
      }}
      className={classnames(className, "duplicant-eyes")}
      src={requireEyes(ordinal)}
    />
  );
};
export default Eyes;
