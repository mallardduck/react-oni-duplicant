import * as React from "react";

import classnames from "classnames";

import { requireEyes } from "../assets/eyes";

export interface EyesProps {
  className?: string;
  ordinal: number;
}

const Eyes: React.SFC<EyesProps> = ({ className, ordinal }) => (
  <img
    className={classnames(className, "duplicant-eyes")}
    src={requireEyes(ordinal)}
  />
);
export default Eyes;
