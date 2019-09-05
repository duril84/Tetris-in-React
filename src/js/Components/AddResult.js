import React, { Component } from 'react';
import Title from './Title';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";
import Inputs from './Inputs';

class AddResult extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    errors: ['','',''],
  }
  render() { 
    const { name, age, email, errors } = this.state;
    return (
      <div tabIndex="0" className="tetris">
        <Title />
        <div className="board">
          <Inputs getValues={this.getValues} name={name} age={age} email={email} errors={errors}/>
        </div>
        <div className="optiotns-buttons">
          <div className="left-section">
            <Button className="button big"  buttonFN={e=>this.send(e)} code={38}><FontAwesomeIcon icon="save" /></Button>
          </div>
          <div className="right-section">
            <NavLink exact to={`/`}>
              <Button className="button big" code={38}><FontAwesomeIcon icon="undo" /></Button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  getValues = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  send = e => {
    // e.preventDefault();
    console.log('save');
    const errors = [];
    const { name, email, age } = this.state;
    if ( name.length < 2 ) {
      errors[0] = ('Name must contain at least 2 characters');
    }
    if ( email.length < 3 || email.indexOf('@') < 0 ) {
      errors[1] = ('E-mail must contain the @ sign and at least 3 characters');
    }
    if ( Number(age) < 1 ) {
      errors[2] = ('Age must be greater than 0');
    }
    this.setState({
      errors,
    })
  }

}
 
export default AddResult;