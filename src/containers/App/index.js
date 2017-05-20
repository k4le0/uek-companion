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
  render() {
    return (
      <MuiThemeProvider muiTheme={AppTheme}>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/discussion" />
            )} />
            <Route path='/discussion' component={DiscussionView} />
            <Route path='/event' component={EventsView} />
            <Route path='/stream' component={StreamView} />
            <Route path='/schedule' component={ScheduleView} />
            <Route path='/profile' component={ProfileView} />
            <Route path='/chat' component={ChatView} />
          </Switch>
          <Navigation />
          {
            console.log(this.props.location)
          }
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}