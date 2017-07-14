import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Results extends React.Component {
  render(){
    const score = this.props.score;
    const total = this.props.total;
    const percent = score/total*100;
    var message = 'You passed the quiz!';
    var link = <a href="javascript:history.go(0)">Take Again</a>;
    return(
      <div className="well">
        <h4>You Got {score} out of {total} Correct.</h4>
        <hr />
        <h1>{percent}% - {percent > 60 ? message : link }</h1>
      </div>
    );

  }
}
