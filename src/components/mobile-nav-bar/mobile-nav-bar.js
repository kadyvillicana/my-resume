import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faUser, faLaptop } from '@fortawesome/free-solid-svg-icons'

import './mobile-nav-bar.scss';

class MobileNavBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            routes: [
                {routeName: 'HOME', routeNameAlias: 'H', route: '/', icon: faHome},
                // {routeName: 'EXPERIENCE', routeNameAlias: 'E', route: '/experience', icon: faCoffee},
                {routeName: 'SKILLS', routeNameAlias: 'S', route: '/skills', icon: faLaptop},
                {routeName: 'HOBBIES', routeNameAlias: 'HO', route: '/hobbies', icon: faUser},
            ]
        }
    }

    render() {
        const { location } = this.props;
        const routes = this.state.routes;
        return (
            <div className='mobilenavbar'>
                <div>
                    {
                        routes.map( (r) => 
                            <div className='mobilenavitem' key={r.routeNameAlias}>
                                <NavLink
                                    exact to={r.route} activeClassName='tabselected'>
                                        {
                                            location.pathname && location.pathname !== r.route 
                                                ? <FontAwesomeIcon icon={r.icon} />
                                                : <span>{r.routeName}</span>
                                        }
                                </NavLink>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

MobileNavBar = withRouter(MobileNavBar);

export default MobileNavBar;