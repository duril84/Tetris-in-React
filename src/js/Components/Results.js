import React, { Component } from 'react';


class Results extends Component {
  state = {  }
  
  render() { 

    const { results } = this.props;
    //console.log(results);
    const resultsList = results.map( result => {
      return (
        <li className="results-item" key={result.id} >
          <div className="results-id" >
            {result.id}
          </div>
          <div className="results-name" >
            {result.name}
          </div>
          <div className="results-result">
            {result.result}
          </div>
        </li>
      )
    } )
    return (
      <div className="results">
        <div className="results-title" >RESULTS</div>
        <ul className="results-list" >
          {resultsList}
        </ul>
      </div>
    );
  }
  
}
 
export default Results;