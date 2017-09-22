// Import all required modules
import React from "react";
import {render} from "react-dom";
// Import react router modules
import {HashRouter as Router, Route} from "react-router-dom";
// Setup redux and react
import configureStore from "./store";
import {Provider} from "react-redux";
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from "react-tap-event-plugin";
// Import main application container
import App from "./containers/App";
//Import momnents modules
import moment from "moment";
const store = configureStore();


injectTapEventPlugin();


moment.updateLocale('pl', null);

render((
    <Provider store={store}>
        <Router>
            <Route component={App}/>
        </Router>
    </Provider>
), document.getElementById('app'));