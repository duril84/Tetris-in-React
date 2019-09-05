import React, { Component } from 'react';


class Results extends Component {
  state = { 
    data: null,
  }
  
  render() { 
    const { data } = this.state;
    let resultsList = null;
    if ( data ) {
      data.sort( (a,b)=> b.points-a.points );
      resultsList = data.map( (result,index) => {
      return (
        <li className="results-item" key={result.id} >
          <div className="results-id" >
            {index+1}
          </div>
          <div className="results-name" >
            {result.name}
          </div>
          <div className="results-result">
            {result.points}
          </div>
        </li>
      )
    } )
    }
    return (
      <div className="results">
        <div className="results-title" >RESULTS</div>
        <ul className="results-list" >
          {resultsList}
        </ul>
      </div>
    );
  }
  componentDidMount(){
    fetch(`http://localhost:3000/results`)
    .then(resp => resp.json()) 
    .then(dataFromApi => {
        this.setState({
            data: dataFromApi,
        })
    })
    .catch(err => console.error(err));
  }
}
 
export default Results;