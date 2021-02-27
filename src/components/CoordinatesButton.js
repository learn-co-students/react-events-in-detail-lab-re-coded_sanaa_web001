// Code CoordinatesButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handelClick=(e)=>{
        let a =[e.clientX, e.clientY];
        this.props.onReceiveCoordinates(a)
    }

    render() {
        return (
            <div>
                <button onClick={this.handelClick}></button>

            </div>
        )
    }
}
