import React,{ Component } from "react"
// Code DelayedButton Component Here
export default class DelayedButton extends Component{
    handleClick=(event)=> {
        event.persist();
        window.setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
      };
    
      render() {
        return <button onClick={this.handleClick}>Delayed</button>;
      }
    
}
// <DelayedButton />
// 4) should have one button
// 5) should call the callback prop after the delay
// 6) should pass the event to the callback prop
