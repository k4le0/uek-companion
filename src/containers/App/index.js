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
import DiscussionsView from '../DiscussionsView';
import ScheduleView from '../ScheduleView';
import ProfileView from '../ProfileView';

import Firebase from '../../components/Firebase'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseView: '/discussion',
      authorized: false,
    };
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={AppTheme}>
        <Wrapper>
          <Header title={"myUEK"} />
          {this.state.authorized 
            ? <div><Switch>
            <Route exact path="/" render={() => (
              <Redirect to={this.state.baseView} />
            )} />
            <Route path='/discussion' component={DiscussionsView} />
            <Route path='/event' component={EventsView} />
            <Route path='/stream' component={StreamView} />
            <Route path='/schedule' component={ScheduleView} />
            <Route path='/profile' component={ProfileView} />
          </Switch>
          <Navigation location={this.props.location}/></div>
            : <Firebase onAuthorized={(auth) => this.setState({authorized: auth})}/>}
          
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}
