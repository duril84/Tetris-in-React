import React, { Component } from 'react';
import Tetris from './Tetris';
import Options from './Options';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";




class Game extends Component {
  state = {  }
  render() { 
    return (
      <HashRouter>
        <>
          <Switch>
            {/* <Route path={`/`} component={Home}/> */}
            <Route exact path={`/`} component={Tetris}/>
            <Route path={`/options`} component={Options}/>
          </Switch>
        </>
      </HashRouter>

      // <div className="game">
      //   {/* <Tetris /> */}
      //   <Options results={RESULTS_LIST}/>
      // </div>
    );
  }
}
 
export default Game;