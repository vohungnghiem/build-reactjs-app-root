import React from 'react';
import { Route, Link } from 'react-router-dom';

const CustomLink = ({label, to, activeExact}) => {
    return (
        <Route path={to} exact={activeExact} 
            children={( {match}) => {
            var active = match ? 'active' : '';
            return <li className={`nav-item ${active}`}> 
                <Link to={to} className="nav-link">{label}</Link>
            </li>
            }}
        />
    )
}

export default CustomLink
