import React, { Component } from 'react';
import { Tetris } from './Tetris';

class Game extends Component {
  state = {  }
  render() { 
    return (
      <div style={{
        display: 'table',
        margin: '0 auto',
      }}>
        <Tetris />
      </div>
    );
  }
}
 
export default Game;