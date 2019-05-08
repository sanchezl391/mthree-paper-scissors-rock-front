import React, { Component } from 'react';
import './App.css';
import Buttons from '../Buttons/Buttons';
import Name from './Name/Name';
import Display from './Display/Display';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-solid-svg-icons'
library.add(faHandPaper, faHandRock, faHandScissors)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', displayMssg: '', isNameSubmitted: false};
  }

  submitName = () => { 
    this.setState({isNameSubmitted: true});
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
      displayMssg: `Welcome ${e.target.value}. Please click one of the buttons below.`
    });
  }

  render() {
    let nameJsx = <Name handler={this.handleNameChange} submit={this.submitName}/>;
    let buttonsJsx = '';
    let displayJsx = '';

    if(this.state.isNameSubmitted) {
      nameJsx = '';
      buttonsJsx = <Buttons />
      displayJsx = <Display mssg={this.state.displayMssg}/>;
    }

    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>
        { nameJsx }
        { displayJsx }
        { buttonsJsx }
      </div>
    );
  }
    
}

export default App;
