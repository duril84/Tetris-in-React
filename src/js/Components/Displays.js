import React, { Component } from 'react';
import Display from './Display';

class Displays extends Component {
  state = {  }
  render() { 
    return (
      <>
       <Display title="RECORD" value={this.props.record}/>
       <Display title="POINTS" value={this.props.points}/>
       <Display title="LEVEL" value={this.props.level}/>
      </>
    );
  }
}
 
export default Displays;