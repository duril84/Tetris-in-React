import React, { Component } from 'react';
import Row from './Row';

class Board extends Component {
  state = {  }
  render() { 
    const { BOARD_HEIGHT, BOARD_LENGTH, board } = this.props;
    const drawBoard = Array(BOARD_HEIGHT).fill('').map( (e,index) => {
      return <Row key={index} boardLength={BOARD_LENGTH} row={board[index]}/>
    })
    return (
      <div className="board-rows">
        {drawBoard}
      </div>
    );
  }
}
 
export default Board;