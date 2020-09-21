import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
mouseCoor = (e) =>{
  let X = e.clientX;
  let Y = e.clientY;
 this.props.onReceiveCoordinates([X,Y])
}
render() {
    return (
    <div >
    <button onClick= {this.mouseCoor}>Clikc here</button>
    </div>
    )
}
}
