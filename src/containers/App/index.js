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


export default class App extends React.Component {
    constructor() {
        super();
        this.setUser = this.setUser.bind(this);
        this.state = {
            user: this.getUser()
        };
    }

    setUser(user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.setState({user: user});
    }

    getUser() {
        return JSON.parse(sessionStorage.getItem('user'));
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <Wrapper>
                    { this.state.user
                        ? <div>
                            <Header title={"myUEK"}/>
                            <div style={{height: '100%'}} id="dupa">
                                <Switch>
                                    <Route path='/discussion' component={DiscussionsView}/>
                                    <Route path='/event' component={EventsView}/>
                                    <Route path='/stream' component={StreamView}/>
                                    <Route path='/schedule' component={ScheduleView}/>
                                    <Route path='/profile' component={ProfileView}/>
                                    <Route render={() => (
                                        <Redirect to="/discussion"/>
                                    )}/>
                                </Switch>
                            </div>
                            <Navigation location={this.props.location}/>
                        </div>
                        : <Login setUser={this.setUser}/>
                    }
                </Wrapper>
            </MuiThemeProvider>
        );

    }
}
