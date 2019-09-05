import React, { Component } from 'react';

class Inputs extends Component {

  render() { 
    const { name, age, email, errors } = this.props;
    return (
      <form className="add">
        <div className="add">
          <div className="add-container">
            <div className="title">Enter a name</div>
            <input className="name" name="name" value={ name } onChange = { e => this.getValues(e) } max={14}></input>
            { !(errors[0]==='') && <div className="error">{errors[0]}</div> }
          </div>
          <div className="add-container">
            <div className="title">age</div>
            <input className="name" name="age" value={ age } onChange = { e => this.getValues(e) }  type="number" min="1"></input>
            { !(errors[2]==='') && <div className="error">{errors[2]}</div> }
          </div>
            <div className="add-container">
            <div className="title">e-mail</div>
            <input className="name" name="email" value={ email } onChange = { e => this.getValues(e) } type='email'></input>
            { !(errors[1]==='') && <div className="error">{errors[1]}</div> }
          </div>
        </div>
      </form>
    );
  }
  getValues = e => {
    if ( typeof this.props.getValues === 'function' ) {
      this.props.getValues(e);
    }
  }


}
 
export default Inputs;