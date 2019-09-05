import React, { Component } from 'react';

class Button extends Component {
  state = {  }
  render() { 
    const code = this.props.code;
   // console.log(code);
    if ( Number(code) ) {
      return (
        <div  className={this.props.className} onClick={e => this.buttonFN(code,e)}>
          <div className="button-inner">
            <div className="button-icon">
              { this.props.children }
            </div>
          </div>
        </div>
        );
    } else {
      return (
        <div className={this.props.className} onClick={e => this.buttonFN(null,e)}>
          <div className="button-inner">
            <div className="button-icon">
              { this.props.children }
            </div>
          </div>
        </div>
      );
    }
  }
  buttonFN = (fn,e) => {
    if ( typeof this.props.buttonFN === 'function' ) {
      this.props.buttonFN(fn,e);
    }
  }
}
 
export default Button;