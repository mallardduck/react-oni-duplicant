import * as React from "react";

import injectSheet from "react-jss";

const styles: any = {
  root: {
    position: "relative",
    "& .duplicant-hair": {
      position: "absolute",
      left: 7,
      top: -120
    },
    "& .duplicant-head": {
      position: "absolute",
      left: 0,
      top: 0
    },
    "& .duplicant-eyes": {
      position: "absolute",
      left: 10,
      top: -80,
      transform: "rotate(-12deg)"
    },
    "& .duplicant-body": {
      position: "absolute",
      left: 0,
      top: 95
    }
  },
  testDot: {
    position: "absolute",
    left: -2,
    top: -2,
    height: 4,
    width: 4,
    backgroundColor: "red",
    borderRadius: "50%"
  }
};

type Props = StyleProps<typeof styles>;
const DuplicantContainer: React.SFC<Props> = ({ classes, children }) => (
  <div className={classes.root}>
    {children}
    <div className={classes.testDot} />
  </div>
);
export default injectSheet(styles)(DuplicantContainer);
