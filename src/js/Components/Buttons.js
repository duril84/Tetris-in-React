import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {
  state = {  }
  render() { 
    return (
      <> 
        <Button buttonFN={this.newGame}>NEW GAME</Button>
        <Button buttonFN={this.moveTetromino} code={37}>LEFT</Button>
        <Button buttonFN={this.moveTetromino} code={39}>RIGHT</Button>
        <Button buttonFN={this.moveTetromino} code={38}>ROTATE</Button>
        <Button buttonFN={this.moveTetromino} code={40}>DOWN</Button>
      </>
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
