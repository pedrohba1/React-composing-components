import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {};
  render() {
    var { counters } = this.props;
    return (
      <div>
        {counters.map(counter => (
          <Counter key={counter.id}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
