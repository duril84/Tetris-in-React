import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import Game from './Components/Game'

class App extends Component {
  render() { 
    return (
      <>
        <h1>Tetris-in-React</h1>
        <Game className="game"/>
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);