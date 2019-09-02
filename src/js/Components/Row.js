import React, { Component } from 'react';
import Cell from './Cell';

export class Row extends Component {
  state = {  }
  render() {
    const { boardLength, row } = this.props; 
    const listOfCells = Array(boardLength).fill(true).map( (e,index) => {
      return <Cell key={index} sign={ row[index][0] } />
    })
    return (
      <div style={{display: 'flex',}}>
        { listOfCells }
      </div>
    );
  }
}
 
export default Row;