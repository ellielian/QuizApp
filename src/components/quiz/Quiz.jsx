import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question'
import Results from './Results'
import Scorebox from './Scorebox'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      current: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(choice) {
    this.setState((prevState, props) => ({
      current: prevState.current + 1,
      score: choice == props.questions[prevState.current-1].correct ? prevState.score+1 : prevState.score
    }));
  }

  render() {
    const questions = this.props.questions;
    return (
      <div>
        {this.state.current > questions.length &&
          <Results total={questions.length} score={this.state.score}/>
        }
        {this.state.current <= questions.length &&
          <Scorebox total={questions.length} current={this.state.current} score={this.state.score} />
        }
        {this.state.current <= questions.length &&
          <Question question={questions[this.state.current-1]} onChoiceChange={this.handleChange} />
        }
      </div>
     )
  }
}
