// Code DelayedButton Component Here
import React, { Component } from "react";

export class DelayedButton extends Component {
  handleClick = (e) => {
    e.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };
  render() {
    return <button onClick={this.handleClick}></button>;
  }
}

export default DelayedButton;
