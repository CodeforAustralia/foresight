import React, { Component } from 'react';
import './MessageBox.css';

class MessageBox extends Component {
  render() {
    let messages = this.props.messages || []
    return (
      <div className="c-message-box">
      {
        messages.map((value, i)=>(
          <div className="c-message-box__message" key={"message-" + i}>
            { value }
          </div>
        ))
      }
      </div>
    );
  }
}

export default MessageBox;
