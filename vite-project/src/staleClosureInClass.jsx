import { Component } from "react";

class MultiStateChange extends Component {
  state = {
    counter: 0,
  };

  _handleOnClick = () => {
    
    this.setState({
      counter: this.state.counter + 1,
    });

    console.log("First: ", this.state.counter);
    this.setState({
      counter: this.state.counter + 1,
    });

    console.log("Second: ", this.state.counter);
    this.setState({
      counter: this.state.counter + 1,
    });

    console.log("Third: ", this.state.counter);
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <p>{counter}</p>
        <button onClick={this._handleOnClick}>Increment</button>
      </>
    );
  }
}

export default MultiStateChange;
