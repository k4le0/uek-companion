import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EventDetails from './EventDetails';
import EventsList from './EventsList';

class EventsView extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/event' component={EventsList} />
        <Route path='/event/:number' component={EventDetails} />
      </Switch>
    );
  }
}

export default EventsView;