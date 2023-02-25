// source for handeling states with an if else 
// https://blog.logrocket.com/react-conditional-rendering-9-methods/
// lab 5 solution walkthrough used

import React, { Component } from 'react';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import StrengthExercise from './components/StrengthExercise'

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";
const STRENGTH_EXERCISE = "weight";

const exerciseList = [
  {type: DURATION_EXERCISE, name: "Running"},
  {type: STRENGTH_EXERCISE, name: "Chest Press"},
  {type: REPETITION_EXERCISE, name: "Push Ups"}
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: EXERCISE_SCREEN,
      currentExercise: exerciseList[2]
    };
  }

  buttonClick = (exercise) => {
    this.setState({
      currentExercise: exercise,
      currentScreen: EXERCISE_SCREEN
    });
  }

  setMenuScreen = () => {
    this.setState({
      currentScreen: MENU_SCREEN
    });
  }

  render() {
    let screenComponent;

    if (this.state.currentScreen === MENU_SCREEN) {
      screenComponent = (
        <div>
          <h1>Exercise Menu</h1>
          <div>
            {exerciseList.map((exercise)=> {
              return (
                <div key={exercise.name}>
                  <button
                    onClick={() => this.buttonClick(exercise)}
                  >
                    {exercise.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (this.state.currentScreen === EXERCISE_SCREEN) {
      switch(this.state.currentExercise.type) {
        case DURATION_EXERCISE:
          screenComponent = (
            <DurationExercise
              exercise={this.state.currentExercise}
              setMenuScreen={this.setMenuScreen}
            />
          );
          break;
        case REPETITION_EXERCISE:
          screenComponent = (
            <RepetitionExercise
              exercise={this.state.currentExercise}
              setMenuScreen={this.setMenuScreen}
            />
          );
          break;
        case STRENGTH_EXERCISE:
          screenComponent = (
            <StrengthExercise
              exercise={this.state.currentExercise}
              setMenuScreen={this.setMenuScreen}
            />
          );
          break;
        default:
          screenComponent = undefined;
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          {screenComponent}
        </header>
      </div>
    );
  }
}




