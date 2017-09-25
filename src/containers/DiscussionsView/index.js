import React from "react";
import {Route, Switch} from "react-router-dom";

import ChatView from "../ChatView";
import DiscussionsList from "./DiscussionsList";
import {Attendance, Information, Polls, Questions} from "../../components/Chat/index";

class DiscussionsView extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/discussion' component={DiscussionsList}/>
                <Route path='/discussion/:name/chat' render={(props) => (<ChatView {...props}/>)}/>
                <Route path='/discussion/:name/questions' render={(props) => (<Questions {...props}/>)}/>
                <Route path='/discussion/:name/information' render={(props) => (<Information {...props}/>)}/>
                <Route path='/discussion/:name/attendance' render={(props) => (<Attendance {...props}/>)}/>
                <Route path='/discussion/:name/polls' render={(props) => (<Polls {...props}/>)}/>
            </Switch>
        );
    }
}

export default DiscussionsView;