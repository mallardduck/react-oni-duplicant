import * as React from "react";
import { render } from "react-dom";

import {
  DuplicantContainer,
  Hair,
  Head,
  Eyes,
  Body
} from "react-oni-duplicant";

type Props = {};
interface State {
  hair: number;
  head: number;
  eyes: number;
  body: number;
}
class Root extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hair: 1,
      head: 1,
      eyes: 1,
      body: 1
    };
  }

  render() {
    const { hair, head, eyes, body } = this.state;
    return (
      <div>
        <div style={{ height: "300px", paddingLeft: 200, paddingTop: 200 }}>
          <DuplicantContainer>
            <Hair ordinal={hair} />
            <Head ordinal={head} />
            <Eyes ordinal={eyes} />
            <Body ordinal={body} />
          </DuplicantContainer>
        </div>
        <input
          type="number"
          value={hair}
          onChange={e => this.setState({ hair: e.target.valueAsNumber })}
        />
        <input
          type="number"
          value={head}
          onChange={e => this.setState({ head: e.target.valueAsNumber })}
        />
        <input
          type="number"
          value={eyes}
          onChange={e => this.setState({ eyes: e.target.valueAsNumber })}
        />
        <input
          type="number"
          value={body}
          onChange={e => this.setState({ body: e.target.valueAsNumber })}
        />
      </div>
    );
  }
}

render(<Root />, document.getElementById("root"));
