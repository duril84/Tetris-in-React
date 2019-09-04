import React, { Component } from 'react';

class Button extends Component {
  state = {  }
  render() { 
    const code = this.props.code;
   // console.log(code);
    if ( Number(code) ) {
      return (
        <div  className={this.props.className} onClick={e => this.buttonFN(code)}>
          <div className="button-inner">
            <div className="button-icon">
              { this.props.children }
            </div>
          </div>
        </div>
        );
    } else {
      return (
        <div className={this.props.className} onClick={e => this.buttonFN(e)}>
          <div className="button-inner">
            <div className="button-icon">
              { this.props.children }
            </div>
          </div>
        </div>
      );
    }
  }
  buttonFN = e => {
    if ( typeof this.props.buttonFN === 'function' ) {
      this.props.buttonFN(e);
    }
  }
}
 
export default Button;