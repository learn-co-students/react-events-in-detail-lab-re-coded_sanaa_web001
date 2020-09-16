// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    render() {
        return (
            <div>
                <button type="" onClick={(event)=>
                    setTimeout(()=>{event.persist(); this.props.onDelayedClick(event)},this.props.delay)}></button>
            </div>
        )
    }
}

