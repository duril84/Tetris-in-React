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
  send = (fn,e) => {
   // e.preventDefault();
    // console.log('save');
    const errors = [];
    let numbersOferrors = 0;
    const { name, email, age } = this.state;
    if ( name.length < 2 ) {
      errors[0] = ('Name must contain at least 2 characters');
      numbersOferrors++;
    }
    if ( email.length < 3 || email.indexOf('@') < 0 ) {
      errors[1] = ('E-mail must contain the @ sign and at least 3 characters');
      numbersOferrors++;
    }
    if ( Number(age) < 1 ) {
      errors[2] = ('Age must be greater than 0');
      numbersOferrors++;
    }
    this.setState({
      errors,
    })
    if ( numbersOferrors <= 0 ) {
      new Promise((resolve) => {
        this.addResult(resolve);
      }).then(() => {
        window.location = '/';
      });
    }
  }

  addResult = (resolve) => {
    const { name, age, email } = this.state;
    const points = this.props.match.params.points;
   
    const result = {
      name: name,
      age: age,
      email: email,
      points: points,
    }

    fetch("http://localhost:3000/results",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify( result )
    })
    .then(function(res){ 
      if(resolve){
        resolve();
      }
      return res.json();
    })
    .catch(function(res){ 
      console.log(res) 
    })
  }

}
 
export default AddResult;