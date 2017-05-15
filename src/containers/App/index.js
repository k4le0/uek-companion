import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../../components/AppBar';
import BottomNavigation from '../../components/BottomNavigation';
import AppTheme from './theme.js';
import MainView from '../MainView';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={AppTheme}>
        <div>
          <AppBar />
          <MainView />
          <BottomNavigation />
        </div>
      </MuiThemeProvider>
    );
  }
}