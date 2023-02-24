// source for handeling states with an if else 
// https://blog.logrocket.com/react-conditional-rendering-9-methods/ 

import React from "react";
import RepetitionExercise from "./components/RepetionExercise";
import DurationExercise from "./components/DurationExercise";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mode:'menu'};
    this.handleDuration = this.handleDuration.bind(this);
    this.handleRepetion = this.handleRepetion.bind(this);
  }

  handleDuration() {
    this.setState({mode: 'Duration'});
  }

  handleRepetion() {
    this.setState({mode: 'Repetition'});
  }

  render(){
    if(this.state.mode === "menu") {
      return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise App</h1>
        <p>Select an exercise:</p>
      </header>
      <main>
        <div><button onClick={this.handleRepetion}>Push-ups</button></div>
        <div><button onClick={this.handleDuration}>Running</button></div>
      </main>
    </div>
  );
    } else if (this.state.mode === "Duration"){
      return(
        <DurationExercise/>
      )
    } else if (this.state.mode === "Repetition"){
      return(
        <RepetitionExercise/>
      )
    }
  }
}







