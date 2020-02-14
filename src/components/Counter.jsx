//Mesmo não sendo usado, preciso importar React pois (linha 8)
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   console.log(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {/* //no final das contas o que renderiza essas tags html 
            //(expressãojsx) é compliada usando React.createElement
            */}
        <span style={styles.font} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;

const styles = {
  font: {
    fontSize: 15,
    fontWeight: "bold"
  }
};
