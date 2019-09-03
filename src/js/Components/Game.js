import React, { Component } from 'react';
import { Tetris } from './Tetris';

class Game extends Component {
  state = {  }
  render() { 
    return (
      <div className="game">
        <Tetris />
      </div>
    );
  }
}
 
export default Game;