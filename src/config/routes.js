import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Async from '../components/async-component/async-component';

const Routes = (props) => (
        <Switch>
            <Route exact path="/" component={() => <Async provider={() => import('../app/pages/home/home')} />} />
            <Route path="/contact" component={() => <Async provider={() => import('../app/pages/contact/contact')} />}/>
            <Route path="/experience" component={() => <Async provider={() => import('../app/pages/experience/experience')} />}/>
            <Route path="/skills" component={() => <Async provider={() => import('../app/pages/skills/skills')} />}/>
            <Route path="/hobbies" component={() => <Async provider={() => import('../app/pages/hobbies/hobbies')} />}/>
            <Redirect from="/**" to="/" />
        </Switch>
);

export default Routes;