// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleClick = (e) => {
        setTimeout(()=>{
            this.props.onDelayedClick(e)
            e.persist()
        }, this.props.delay)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
