import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EventDetails from './EventDetails';
import EventsList from './EventsList';

class EventsView extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/event' render={(props) => (
            <EventsList db={this.props.db} />
        )}/>
        <Route path='/event/:name' render={(props) => (
            <EventDetails {...props} db={this.props.db} />
        )}/>
      </Switch>
    );
  }
}

export default EventsView;