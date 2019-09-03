import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import Game from './Components/Game'

class App extends Component {
  render() { 
    return (
      <>
        <h1 className="board">Tetris-in-React</h1>
        <Game />
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);