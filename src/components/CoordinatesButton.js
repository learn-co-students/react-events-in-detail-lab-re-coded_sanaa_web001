// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = (e) => {
        let x = e.clientX
        let y = e.clientY
        this.props.onReceiveCoordinates([x, y])
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
