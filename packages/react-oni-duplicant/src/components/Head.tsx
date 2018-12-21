import * as React from "react";

import classnames from "classnames";

import { DuplicantDirection } from "../types";

import { requireHead } from "../assets/headshape";

export interface HeadProps {
  className?: string;
  ordinal: number;
  direction?: DuplicantDirection;
}

const Head: React.SFC<HeadProps> = ({
  className,
  ordinal,
  direction = DuplicantDirection.Forward
}) => (
  <img
    className={classnames(className, "duplicant-head")}
    src={requireHead(ordinal, direction)}
  />
);
export default Head;
