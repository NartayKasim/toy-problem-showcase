import React, { Component } from 'react'

class EvenAndOdd extends Component {
     constructor() {
          super()

          this.state = {
               evensArray: [],
               oddsArray: [],
               userInput: ''
          };
     }

     userArray(str) {
          this.setState({ userInput: str })
     }

     splitter(userInput) {
          const evensSorted = [];
          const oddsSorted = [];

          for (let idx in userInput) {
               if (!isNaN(userInput[idx])) {
                    if (userInput[idx] % 2 === 0) { 
                         evensSorted.push(parseInt(userInput[idx], 10));
                    }
                    else {
                         oddsSorted.push(parseInt(userInput[idx], 10));
                    };
               };
          };

          this.setState( { evensArray: evensSorted } );
          this.setState( { oddsArray: oddsSorted } );
     }

     render () {
          return (
               <div className="puzzleBox evenAndOddPB">
                    <h4>Evens and Odds</h4>
                    <input className="inputLine" onChange={ (e) => this.userArray(e.target.value) }/>
                    <button className="confirmationButton" onClick={ () => this.splitter(this.state.userInput) }>Split Array</button>
                    <span className="resultsBox">Even Numbers: { JSON.stringify(this.state.evensArray ) }</span>
                    <span className="resultsBox">Odd Numbers: { JSON.stringify(this.state.oddsArray) }</span>
               </div>
          )
     }
}

export default EvenAndOdd;