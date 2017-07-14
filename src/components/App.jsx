import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Quiz from './quiz/Quiz'

export default class App extends React.Component{
  render() {
    const questions = this.props.questions;
      return (
        <Quiz questions={questions}/>
      )
  }
}
