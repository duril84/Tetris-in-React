import React, { Component } from 'react';
import { Board } from './Board';

class Game extends Component {
  state = {  }
  render() { 
    return (
      <div style={{
        display: 'table',
        margin: '0 auto',
      }}>
        <Board />
      </div>
    );
  }
}
 
export default Game;