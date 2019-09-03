import React, { Component } from 'react';

class Display extends Component {
  state = {  }
  render() { 
    const { title, value } = this.props;
    return (
      <div className="display">
        <h1 className="title">{ title }</h1>
        <div className="value">{ value }</div>
      </div>
    );
  }
}
 
export default Display;