import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
  const { auth } = props;

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
    	<div className="container">
    		<Link to="/" className="brand-logo">Project Management</Link>
    		{ links }
    	</div>
    </nav>
  )
}

const mapStateToProps = (state) => {
	return {
    auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Navbar);