import React, { Component } from 'react';
import Display from './Display';

class Displays extends Component {
  state = {  }
  render() { 
    return (
      <div className="displays">
       <Display title="RECORD" value={this.props.record}/>
       <Display title="POINTS" value={ this.props.points === -1 ? 0 : this.props.points}/>
       <Display title="LEVEL" value={this.props.level}/>
      </div>
    );
  }
}
 
export default Displays;