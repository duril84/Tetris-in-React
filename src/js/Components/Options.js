import React, { Component } from 'react';
import Results from './Results';
import Title from './Title';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";


const RESULTS_LIST = [
  {
    id: 1,
    name: 'Czeslaw',
    result: 7680,
  },
  {
    id: 2,
    name: 'Alicja',
    result: 1240,
  },
  {
    id: 3,
    name: 'Lukasz',
    result: 1220,
  },
  {
    id: 4,
    name: 'Marek',
    result: 999999,
  },
  {
    id: 5,
    name: 'Kasia',
    result: 4300,
  },
  {
    id: 6,
    name: 'Bartek',
    result: 260,
  },
  {
    id: 7,
    name: 'Michal',
    result: 680,
  },
  {
    id: 8,
    name: 'Tomek',
    result: 1240,
  },
  {
    id: 9,
    name: 'Adam',
    result: 1220,
  },
  {
    id: 10,
    name: 'Monika',
    result: 9999,
  },
  {
    id: 11,
    name: 'Piotr',
    result: 1980,
  },
  {
    id: 12,
    name: 'Kornel',
    result: 23260,
  },
  {
    id: 13,
    name: 'Janusz',
    result: 34580,
  },
  {
    id: 14,
    name: 'Szymon',
    result: 99390,
  },
  {
    id: 15,
    name: 'Piotr',
    result: 19840,
  },
  {
    id: 16,
    name: 'Kornel',
    result: 2260,
  },
]

class Options extends Component {
  state = {  }
  render() {
    
    return (
      <div tabIndex="0" onKeyUp={e => this.moveTetromino(e)} className="tetris">
        <Title />
        <div className="board">
          <Results results={RESULTS_LIST} />  
        </div>
        <div className="optiotns-buttons">
          <div className="left-section">
            <div>
              <Button className="button small" code={38}><FontAwesomeIcon icon="arrow-up" /></Button>
              <br/>
              <Button className="button small" buttonFN={this.scrollDown} code={40}><FontAwesomeIcon icon="arrow-down" /></Button>
            </div>
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
}
 
export default Options;