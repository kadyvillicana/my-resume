import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Firebase, { FirebaseContext } from './config/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Router>
            <Route component={App} />
        </Router>
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

serviceWorker.register();
