// Code DelayedButton Component Here
// Code DelayedButton Component Here

import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handeClick=(event)=>{
        event.persist();
        setTimeout(
            ()=>this.props.onDelayedClick(event)
            ,this.props.delay
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.handeClick}></button>
            </div>
        )
    }
}
// Code CoordinatesButton Component Here
