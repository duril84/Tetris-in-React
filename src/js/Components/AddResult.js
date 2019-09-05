import React, { Component } from 'react';
import Title from './Title';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";
import Inputs from './Inputs';
import Store from "../Store/Store";

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
      this.addUser();
      window.location = '/';
    }
  }

  addUser = () => {
    const { name, age, email } = this.state;
    const points = this.props.match.params.points;
    //Pobieram aktualną listę userów
    //jak jeszcze nie była utworzona, to tworze pustą tablice
    const oldUsers = Store.getValue("users");
    //i dorzucam do nich nowego
    //id tworzone trochę na Janusza :)
    const users = [
      ...oldUsers,
      { name, age, email, points, id: oldUsers.length + 1 }
    ];
    //a teraz zapisuję nową listę do Store'a
    Store.setValue("users", users);
  }

}
 
export default AddResult;