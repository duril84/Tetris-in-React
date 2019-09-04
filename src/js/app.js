import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../sass/style.scss';
import Game from './Components/Game'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight, faArrowDown, faRedo, faPlay, faPause, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faArrowLeft, faArrowRight, faArrowDown, faRedo,  faPlay, faPause, faBars)


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