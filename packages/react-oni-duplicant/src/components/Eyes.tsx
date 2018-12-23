import * as React from "react";

import classnames from "classnames";

import { requireEyes, getEyeFrame } from "../assets/eyes";
import { DuplicantDirection } from "../types";

export interface EyesProps {
  className?: string;
  // direction?: DuplicantDirection;
  ordinal: number;
}

const Eyes: React.SFC<EyesProps> = ({
  className,
  ordinal
  // direction = DuplicantDirection.Forward
}) => {
  const frame = getEyeFrame(ordinal, DuplicantDirection.Forward);
  return (
    <img
      style={{
        marginLeft: frame ? -frame.width / 2 + frame.origin.x : 0,
        marginTop: frame ? -frame.height / 2 + frame.origin.y : 0,
        width: frame ? frame.width : 0,
        height: frame ? frame.height : 0
      }}
      className={classnames(className, "duplicant-eyes")}
      src={requireEyes(ordinal)}
    />
  );
};
export default Eyes;
