import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
// Import and set application theme
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppTheme from "./theme.js";
// Import main application's componets
import Header from "./Header";
import Navigation from "./Navigation";
import Wrapper from "./Wrapper";
// Import aplication views
import EventsView from "../EventsView";
import StreamView from "../StreamView";
import DiscussionsView from "../DiscussionsView";
import ScheduleView from "../ScheduleView";
import ProfileView from "../ProfileView";

import Login from "./Login";

import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCtSfQcuV5YxTOAw0Yt86yWe6Rniio-9MQ",
    authDomain: "uek-companion.firebaseapp.com",
    databaseURL: "https://uek-companion.firebaseio.com",
    projectId: "uek-companion",
    storageBucket: "uek-companion.appspot.com",
    messagingSenderId: "63240437365"
};

const app = firebase.initializeApp(config);

export default class App extends React.Component {
    constructor() {
        super();
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.state = {
            baseView: '/discussion',
            auth: app.auth(),
            db: app.database(),
            user: JSON.parse(sessionStorage.getItem('user'))
        };
    }

    setCurrentUser(user) {
        sessionStorage.setItem('user', JSON.stringify(user || null));
        this.setState({user: user || null});
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <Wrapper>
                    <Header title={"myUEK"}/>
                    {this.state.user
                        ? <div>
                            <Switch>
                                <Route path='/discussion' render={(props) => (
                                    <DiscussionsView {...props} db={this.state.db} user={this.state.user}/>
                                )}/>
                                <Route path='/event' render={(props) => (
                                    <EventsView {...props} db={this.state.db}/>
                                )}/>
                                <Route path='/stream' component={StreamView}/>
                                <Route path='/schedule' component={ScheduleView}/>
                                <Route path='/profile' component={ProfileView}/>
                                <Route render={() => (
                                    <Redirect to="/discussion"/>
                                )}/>
                            </Switch>
                            <Navigation location={this.props.location}/>
                        </div>
                        : <Login setCurrentUser={this.setCurrentUser} auth={this.state.auth}/>}

                </Wrapper>
            </MuiThemeProvider>
        );

    }
}
