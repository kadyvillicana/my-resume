import React from 'react';
import { NavLink } from 'react-router-dom';

import './button-link.scss';

const ButtonLink = (props) => {
    const {route, name} = props;
    return(
        <NavLink className='button-link' to={route}>{name}</NavLink>
    );
}

export default ButtonLink;