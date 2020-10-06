import React,{ Component } from "react"
// Code CoordinatesButton Component Here
export default class CoordinatesButton extends Component{
    handleClick=(event)=>{
this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render() {
        return <button onClick={this.handleClick}>Coords</button>;
      }
}
// <CoordinatesButton />
// 1) should have one button
// 2) should call the callback prop when the button is clicked
// 3) should pass the right coordinates to the callback prop