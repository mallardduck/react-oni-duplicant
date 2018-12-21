import * as React from "react";

import injectSheet from "react-jss";

const styles: any = {
  root: {
    position: "relative",
    "& .duplicant-hair": {
      position: "absolute",
      left: 50,
      top: 50
    },
    "& .duplicant-head": {
      position: "absolute",
      left: 50,
      top: 60,
      zIndex: -1
    },
    "& .duplicant-eyes": {
      position: "absolute",
      left: 70,
      top: 86,
      zIndex: -1
    }
  }
};

type Props = StyleProps<typeof styles>;
const DuplicantContainer: React.SFC<Props> = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);
export default injectSheet(styles)(DuplicantContainer);
