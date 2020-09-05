import React from 'react';
import './App.scss';
import Choice from './components/choice';
import Square from './components/square';
import { Allele } from './domain/allele';

class App extends React.Component {
  state = {
    choices: [
      new Allele(true, 'A'),
      new Allele(false, 'a')
    ]
  };

  render() {
    return (
      <div className="App">
        <h2>Interactive Punnet Square</h2>
        <p>Drag an allele to each of the four drop spots. Each parent gets two alleles.</p>
        <div className="wrap">
          <div className="choices">
            {this.state.choices.map((choice, index) => <Choice key={index} allele={choice} />)}
          </div>
          {/* <Square parents={this.state.parents} /> */}
        </div>
      </div>
    )
  }
}

export default App;
