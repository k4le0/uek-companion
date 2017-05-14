import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../../components/AppBar';
import SpecialEvent from '../Discussion/Discussion';
import BottomNavigation from '../../components/BottomNavigation';
import Groups from '../../components/Groups';
import AppTheme from './theme.js';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={AppTheme}>
        <div>
          <AppBar />
          <Groups />
          <SpecialEvent />
          <BottomNavigation />
        </div>
      </MuiThemeProvider>
    );
  }
}