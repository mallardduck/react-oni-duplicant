import * as React from "react";
import { render } from "react-dom";

import { DuplicantContainer, Hair, Head, Eyes } from "react-oni-duplicant";

type Props = {};
interface State {
  hair: number;
  head: number;
  eyes: number;
}
class Root extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hair: 1,
      head: 1,
      eyes: 1
    };
  }

  render() {
    const { hair, head, eyes } = this.state;
    return (
      <div>
        <DuplicantContainer>
          <Hair ordinal={hair} />
          <Head ordinal={head} />
          <Eyes ordinal={eyes} />
        </DuplicantContainer>
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
      </div>
    );
  }
}

render(<Root />, document.getElementById("root"));
