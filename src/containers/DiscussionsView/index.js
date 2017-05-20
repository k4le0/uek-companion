import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ChatView from '../ChatView';
import DiscussionsList from './DiscussionsList';

class DiscussionsView extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/discussion' component={DiscussionsList} />
        <Route path='/discussion/:number' component={ChatView} />
      </Switch>
    );
  }
}

export default DiscussionsView;