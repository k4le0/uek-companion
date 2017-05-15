import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EventsView from '../EventsView';
import StreamView from '../StreamView';
import DiscussionView from '../DiscussionView';
import ScheduleView from '../ScheduleView';
import ProfileView from '../ProfileView';

const MainView = () => (
  <main>
    <Switch>
      <Route exact path='/' component={DiscussionView}/>
      <Route path='/event' component={EventsView}/>
      <Route path='/stream' component={StreamView}/>
      <Route path='/schedule' component={ScheduleView}/>
      <Route path='/profile' component={ProfileView}/>
    </Switch>
  </main>
);

export default MainView;