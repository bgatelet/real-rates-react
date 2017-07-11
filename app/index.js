import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { hashHistory, Router } from 'react-router';
import routes from './config/routes';
import './main.css';

// Necessary for MaterialUI to work properly.
injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={hashHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('app')
);
