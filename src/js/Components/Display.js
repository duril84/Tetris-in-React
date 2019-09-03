import React, { Component } from 'react';

class Display extends Component {
  state = {  }
  render() { 
    const { title, value } = this.props;
    return (
      <div>
        <h1>{ title }</h1>
        <h2>{ value }</h2>
      </div>
    );
  }
}
 
export default Display;