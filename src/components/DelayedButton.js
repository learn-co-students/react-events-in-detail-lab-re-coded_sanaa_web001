import React, { Component } from 'react';

export default class DelayedButton extends Component {
buttonDClicked = (e)=> {
  e.persist();
setTimeout(() => {
  this.props.onDelayedClick(e)}, this.props.delay);
  }
render() {
    return (
    <div >
    <button onClick= {this.buttonDClicked}>Clikc here</button>
    </div>
    )
}
}
