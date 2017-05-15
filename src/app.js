// Import all required modules
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter } from 'react-router-dom'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Import main application container
import App from './containers/App'

render((
    <HashRouter>
        <App/>
    </HashRouter>
), document.getElementById('app'));