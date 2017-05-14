import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../../components/AppBar';
import BottomNavigation from '../../components/BottomNavigation';
import Groups from '../../components/Groups';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar />
          <Groups />
          <BottomNavigation />
          
        </div>
      </MuiThemeProvider>
    );
  }
}