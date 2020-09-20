// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
  handleClick = (e) =>{
    return this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }
  render() {
    return (
        <button onClick={this.handleClick}></button>
    )
  }
}

export default CoordinatesButton
