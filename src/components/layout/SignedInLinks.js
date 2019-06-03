import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
    	<li><NavLink to="/project/create">New Project</NavLink></li>
    	<li><NavLink to="/">Logout</NavLink></li>
    	<li><NavLink to="/" className="btn btn-floating pink lighten-1">MS</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;