import React, { Component } from 'react';

class Cell extends Component {
  state = {  }

  getCellColor = (sign) => {
    switch ( sign ) {
      case 0:
        return 'white';
      case 'I':
        return 'red';
      case 'T':
        return 'blue';
      case 'S':
        return 'yellow';
      case 'Z':
        return 'green';
      case 'L':
        return 'magenta';
      case 'J':
        return 'pink';
      case 'O':
        return 'aqua';
      default:
        console.error('Nie ustalono koloru komórki !');
        break;
    }
  }

  render() { 
      const { sign } = this.props;
      const cellColor = this.getCellColor(sign);
      return (
        <div style={{
          width: '20px',
          height: '20px',
          border: '1px solid #ddd',
          padding: '0px',
          borderRadius: '5px',
          boxShadow: '2px 2px 2px #ddd',
          backgroundColor: `${cellColor}`,
          borderTopColor: `${cellColor}/2`,
        }}>
        </div>
    );
  }
}
 
export default Cell;