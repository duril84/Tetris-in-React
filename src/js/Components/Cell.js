import React, { Component } from 'react';

class Cell extends Component {
  state = {  }

  getCellColor = (sign) => {
    switch ( sign ) {
      case 0:
        return 'E';
      case 'E':
        return 'E';
      case 'I':
        return 'I';
      case 'T':
        return 'T';
      case 'S':
        return 'S';
      case 'Z':
        return 'Z';
      case 'L':
        return 'L';
      case 'J':
        return 'J';
      case 'O':
        return 'O';
      default:
        return 'E';
        console.error('Nie ustalono koloru komórki !');
        break;
    }
  }

  render() { 
      const { sign } = this.props;
      const cellColor = this.getCellColor(sign);
      console.log(cellColor);
      return (
        <div className={`cell ${cellColor}`} >
        </div>
    );
  }
}
 
export default Cell;

// style={{
//   backgroundColor: `${cellColor}`,
//   borderTopColor: `${cellColor}/2`,
// }}