import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import Game from './Components/Game'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight, faArrowDown, faArrowUp, faRedo, faUndo, faPlay, faPause, faBars, faSave, faStar, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faArrowLeft, faArrowRight, faArrowDown, faArrowUp, faRedo, faUndo,  faPlay, faPause, faBars, faSave, faStar, faVolumeMute)


class App extends Component {
  render() { 
    return (
      <>
        <Game className="game"/>
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);