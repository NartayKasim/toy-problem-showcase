import React, { Component } from 'react'

class Sum extends Component {

     constructor() {
          super();

          this.state = {
               num1: 0,
               num2: 0,
               solution: 0
          }
     }

     handleOne = (num) => {
          this.setState( { num1: parseInt(num, 10) } );
     };

     handleTwo = (num) => {
          this.setState( { num2: parseInt(num, 10) } );
     };

     sum = () => {
          const total = this.state.num1 + this.state.num2;

          this.setState( { solution: total })
     }

     render () {
          return (
               <div className="puzzleBox sumPB">
                    
                    <h4>Sum</h4>
                    <input className="inputLine" type="number" onChange={ (e) => this.handleOne(e.target.value) }/>
                    <input className="inputLine" type="number" onChange={ (e) => this.handleTwo(e.target.value) }/>
                    <button className="confirmationButton" onClick={ this.sum }>Add</button>
                    <span className="resultsBox">Sum: { this.state.solution }</span>

               </div>
          )
     }
}

export default Sum;