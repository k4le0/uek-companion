// Import all required modules
import React from 'react';
import { render } from 'react-dom';

// Import react router modules
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';

// Setup redux and react
import configureStore from './store';
const store = configureStore();

import { Provider } from 'react-redux';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Import main application container
import App from './containers/App'

//Import firebase modules
import * as firebase from 'firebase';

//Import momnents modules
import moment from "moment";
moment.updateLocale('pl', null);

// Initialize Firebase


render((
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>
), document.getElementById('app'));