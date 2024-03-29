import React, { Component } from 'react';
import Tetris from './Tetris';
import Options from './Options';
import AddResult from './AddResult';
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
            <Route exact path={`/`} component={Tetris}/>
            <Route path={`/options/`} component={Options}/>
            <Route path={`/addResult/:points`} component={AddResult}/>
          </Switch>
        </>
      </HashRouter>
    );
  }
}
 
export default Game;