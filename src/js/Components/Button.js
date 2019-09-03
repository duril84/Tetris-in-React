import React, { Component } from 'react';

class Button extends Component {
  state = {  }
  render() { 
    const code = this.props.code;
   // console.log(code);
    if ( Number(code) ) {
      return <div  className={this.props.className} onClick={e => this.buttonFN(code)}>{ this.props.children }</div>;
    } else {
      return <div className={this.props.className} onClick={e => this.buttonFN(e)}>{ this.props.children }</div>;
    }
  }
  buttonFN = e => {
    if ( typeof this.props.buttonFN === 'function' ) {
      this.props.buttonFN(e);
    }
  }
}
 
export default Button;