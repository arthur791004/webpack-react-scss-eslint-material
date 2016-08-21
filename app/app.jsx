import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ActionHome from 'material-ui/svg-icons/action/home';
import { red500, greenA200 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Hello from './components/Hello';
import styles from './app.scss';
import imgPikachu from './images/pikachu.jpg';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Hello />
          <RaisedButton label="Default" />
          <ActionHome color={ red500 } hoverColor={ greenA200 } />
          <img className="pikachu" src={ imgPikachu } />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
