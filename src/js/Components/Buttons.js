import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {
  state = {  }
  render() { 
    return (
      <div className="buttons"> 
        <div>
          <Button className="button options" buttonFN={this.newGame}>NEW GAME</Button>
          <Button className="button options" >PAUSE</Button>
        </div>
        <div>
          <div className="move">
            <div>
              <Button className="button small" buttonFN={this.moveTetromino} code={37}></Button>
              <Button className="button small" buttonFN={this.moveTetromino} code={39}></Button>
            </div>
            <div>
              <Button className="button small" buttonFN={this.moveTetromino} code={40}></Button>
            </div> 
          </div>
          <div>
            <Button className="button big" buttonFN={this.moveTetromino} code={38}></Button>
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
