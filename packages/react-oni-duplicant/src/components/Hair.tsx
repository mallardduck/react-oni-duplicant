import * as React from "react";

import classnames from "classnames";

import { DuplicantDirection } from "../types";

import { requireHair } from "../assets/hair";

export interface HairProps {
  className?: string;
  ordinal: number;
  direction?: DuplicantDirection;
}

const Hair: React.SFC<HairProps> = ({
  className,
  ordinal,
  direction = DuplicantDirection.Forward
}) => (
  <img
    className={classnames(className, "duplicant-hair")}
    src={requireHair(ordinal, direction)}
  />
);
export default Hair;
