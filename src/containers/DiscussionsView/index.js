import React from "react";
import {Route, Switch} from "react-router-dom";

import ChatView from "../ChatView";
import DiscussionsList from "./DiscussionsList";

class DiscussionsView extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/discussion' component={DiscussionsList}/>
                <Route path='/discussion/:name' render={(props) => (
                    <ChatView {...props}/>
                )}/>
            </Switch>
        );
    }
}

export default DiscussionsView;