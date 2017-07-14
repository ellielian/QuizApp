import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var QUESTIONS = [
        {
          id: 1,
          text: '1+1 = ?',
          choices: [
            {
              id: 'a',
              text: '3'
            },
            {
              id: 'b',
              text: '2'
            },
            {
              id: 'c',
              text: '0'
             }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: '5-2 = ?',
          choices: [
            {
              id: 'a',
              text: '3'
            },
            {
              id: 'b',
              text: '1'
            },
            {
              id: 'c',
              text: '5'
             }
          ],
          correct: 'a'
        }
      ];

ReactDOM.render(
  <App questions={QUESTIONS}/>,
  document.getElementById('app')
);
