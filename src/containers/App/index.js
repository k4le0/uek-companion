// Import all required modules
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="UEK Companion" iconClassNameRight="muidocs-icon-navigation-expand-more" />
      </MuiThemeProvider>
    );
  }
}