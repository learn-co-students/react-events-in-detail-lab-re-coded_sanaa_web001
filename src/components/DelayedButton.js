// Code DelayedButton Component Here
import React from 'react';
export default class  DelayedButton extends React.Component {
  delayClick = (event) => {
    event.persist()
    const callClick = this.props.onDelayedClick
    const delay = this.props.delay
    setTimeout(() => callClick(event), delay)
  };
  render() {
    return(
      <button onClick={this.delayClick}></button>
    )
  }

}
