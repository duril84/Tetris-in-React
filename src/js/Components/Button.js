import React, { Component } from 'react';

class Button extends Component {
  state = {  }
  render() { 
    const code = this.props.code;
   // console.log(code);
    if ( isNumber(code) ) {
      return <button onClick={e => this.buttonFN(code)}> { this.props.children } </button>;
    } else {
      return <button onClick={e => this.buttonFN(e)}> { this.props.children } </button>
    }
  }
  buttonFN = e => {
    if ( typeof this.props.buttonFN === 'function' ) {
      this.props.buttonFN(e);
    }
  }
}
 
export default Button;