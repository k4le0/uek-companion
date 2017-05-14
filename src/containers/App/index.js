import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../../components/AppBar';
import SpecialEvent from '../Discussion/Discussion';
import BottomNavigation from '../../components/BottomNavigation';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar/>
          <SpecialEvent/>
          <BottomNavigation/>
        </div>
      </MuiThemeProvider>
    );
  }
}