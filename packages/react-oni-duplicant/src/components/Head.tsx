import * as React from "react";

import classnames from "classnames";

import { DuplicantDirection } from "../types";

import { requireHead, getHeadFrame, isValidHead } from "../assets/headshape";

export interface HeadProps {
  className?: string;
  ordinal: number;
  direction?: DuplicantDirection;
}

const Head: React.SFC<HeadProps> = ({
  className,
  ordinal,
  direction = DuplicantDirection.Forward,
}) => {
  if (!isValidHead(ordinal)) {
    console.warn("Invalid head ordinal", ordinal);
    return null;
  }

  const frame = getHeadFrame(ordinal, direction);
  return (
    <img
      style={{
        marginLeft: frame ? -frame.width / 2 + frame.origin.x : 0,
        marginTop: frame ? -frame.height / 2 + frame.origin.y : 0,
        width: frame ? frame.width : 0,
        height: frame ? frame.height : 0,
      }}
      className={classnames(className, "duplicant-head")}
      src={requireHead(ordinal, direction)}
    />
  );
};
export default Head;
