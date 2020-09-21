import React from 'react';

export default class  CoordinatesButton extends React.Component {
  onReceiveCoordinatesCallback = (event) => {

    let arr = []
    arr.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(arr)

  }


  render() {
    return(

      <button onClick={ this.onReceiveCoordinatesCallback } >Me</button>
    )
  }

}
