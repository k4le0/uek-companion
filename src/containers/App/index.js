import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Import and set application theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from './theme.js';

// Import main application's componets 
import Header from './Header';
import Navigation from './Navigation';
import Wrapper from './Wrapper';

// Import aplication views
import EventsView from '../EventsView';
import StreamView from '../StreamView';
import DiscussionView from '../DiscussionView';
import ScheduleView from '../ScheduleView';
import ProfileView from '../ProfileView';
import ChatView from '../ChatView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseView: '/discussion',
      iconLeft: '',
      iconRight: '',
      navigationOption: 0,
      selectedIndex: this.getCurrentIndex(props.location.pathname),
    };
  }

  getCurrentIndex = (path) => {
    if (path == '/event') { return 0; }
    if (path == '/stream') { return 1; }
    if (path == '/discussion') { return 2; }
    if (path == '/schedule') { return 3; }
    if (path == '/profile') { return 4; }
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={AppTheme}>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to={this.state.baseView} />
            )} />
            <Route path='/discussion' component={DiscussionView} />
            <Route path='/event' component={EventsView} />
            <Route path='/stream' component={StreamView} />
            <Route path='/schedule' component={ScheduleView} />
            <Route path='/profile' component={ProfileView} />
            <Route path='/chat' component={ChatView} />
          </Switch>
          <Navigation index={this.state.selectedIndex} option={this.state.navigationOption} />
        </Wrapper>

      </MuiThemeProvider>
    );
  }
}