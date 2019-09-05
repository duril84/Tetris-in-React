import React, { Component } from 'react';
import Results from './Results';
import Title from './Title';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";

class Options extends Component {

  render() {
    // console.log(this.state.data,'dfd');
    return (
      <div tabIndex="0" onKeyUp={e => this.moveTetromino(e)} className="tetris">
        <Title />
        <div className="board">
          <Results />  
        </div>
        <div className="optiotns-buttons">
          {/* <div className="left-section">
            <div>
              <Button className="button small" code={38}><FontAwesomeIcon icon="arrow-up" /></Button>
              <br/>
              <Button className="button small" buttonFN={this.scrollDown} code={40}><FontAwesomeIcon icon="arrow-down" /></Button>
            </div>
          </div> */}
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