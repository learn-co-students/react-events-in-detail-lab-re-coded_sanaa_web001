// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
cor = (event) =>{
let X = event.clientX;
let Y = event.clientY;
this.props.onReceiveCoordinates([X,Y]);
}
  render() {
    return (
      <div >
      <button onClick={this.cor}></button>
      </div>
    )
  }
  
}

