import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.scss';

class NavBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            navbarClosed: false,
            routes: [
                {routeName: 'HOME', routeNameAlias: 'H', route: '/'},
                {routeName: 'SKILLS', routeNameAlias: 'S', route: '/skills'},
                {routeName: 'PROJECTS', routeNameAlias: 'E', route: '/projects'},
                // {routeName: 'HOBBIES', routeNameAlias: 'HO', route: '/hobbies'},
                {routeName: 'CONTACT', routeNameAlias: 'S', route: '/contact'},
            ]
        }
    }
    render(){
        const routes = this.state.routes;
        return (
            <div className='main'>
                <div className='topmenu'>
                    <div className='menubutton'>
                        <NavLink exact to='/'>
                            <p>KADY VILLICANA</p>   
                        </NavLink>
                    </div>
                </div>
                <div className='sidenav'>
                    {
                        routes.map( (r, idx) => {
                            return <NavLink key={idx}
                                    exact to={r.route} activeClassName='selected'>
                                        <p>{r.routeName}</p> 
                                </NavLink>
                        })
                    }
                </div>
            </div>
        );
    }

}

export default NavBar;
