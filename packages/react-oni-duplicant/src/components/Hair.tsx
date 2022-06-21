import * as React from "react";

import classnames from "classnames";

import { DuplicantDirection } from "../types";

import { requireHair, getHairFrame, isValidHair } from "../assets/hair";

export interface HairProps {
  className?: string;
  ordinal: number;
  direction?: DuplicantDirection;
}

const Hair: React.SFC<HairProps> = ({
  className,
  ordinal,
  direction = DuplicantDirection.Forward,
}) => {
  if (!isValidHair(ordinal)) {
    console.warn("Invalid hair ordinal", ordinal);
    return null;
  }

  const frame = getHairFrame(ordinal, direction);
  return (
    <img
      style={{
        marginLeft: frame ? -frame.width / 2 + frame.origin.x : 0,
        marginTop: frame ? -frame.height / 2 + frame.origin.y : 0,
        width: frame ? frame.width : 0,
        height: frame ? frame.height : 0,
      }}
      className={classnames(className, "duplicant-hair")}
      src={requireHair(ordinal, direction)}
    />
  );
};
export default Hair;
