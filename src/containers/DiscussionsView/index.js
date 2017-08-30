import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ChatView from '../ChatView';
import DiscussionsList from './DiscussionsList';

class DiscussionsView extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/discussion' render={(props) => (
            <DiscussionsList db={this.props.db} />
        )}/>
        <Route path='/discussion/:name' render={(props) => (
            <ChatView {...props} db={this.props.db}/>
        )}/>
      </Switch>
    );
  }
}

export default DiscussionsView;