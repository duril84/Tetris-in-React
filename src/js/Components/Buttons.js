import React, { Component } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Buttons extends Component {
  state = {  }
  render() { 
    return (
      <div className="buttons">
        <div className="buttons top-section">
          <div className="description">
            <h1>START</h1>
            <Button className="button options" buttonFN={this.newGame}><FontAwesomeIcon icon="play" /></Button>
          </div>
          <div className="description">
            <h1>OPTIONS</h1>
            <Button className="button options" ><FontAwesomeIcon icon="bars" /></Button>
          </div>
          <div className="description">
            <h1>PAUSE</h1>
            <Button className="button options" ><FontAwesomeIcon icon="pause" /></Button>
          </div>


        </div>
        <div className="buttons bottom-section">
          <div className="left-section">
            <div className="move-left-right">
              <Button className="button small" buttonFN={this.moveTetromino} code={37}><FontAwesomeIcon icon="arrow-left" /></Button>
              <Button className="button small" buttonFN={this.moveTetromino} code={39}><FontAwesomeIcon icon="arrow-right" /></Button>
            </div>
            <div className="move-down">
              <Button className="button small" buttonFN={this.moveTetromino} code={40}><FontAwesomeIcon icon="arrow-down" /></Button>
            </div>
          </div>
          <div className="right-section">
            <Button className="button big" buttonFN={this.moveTetromino} code={38}><FontAwesomeIcon icon="redo" /></Button>
          </div>
        </div>
      </div>
    );
  }

  newGame = e => {
    if ( typeof this.props.newGame === 'function' ) {
      this.props.newGame(e);
    }
  }
  moveTetromino = e => {
    if ( typeof this.props.moveTetromino === 'function' ) {
      this.props.moveTetromino(e);
    }
  }
}
 
export default Buttons;
