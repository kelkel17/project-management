import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

// Components
import ProjectTask from '../tasks/ProjectTask'
import RecentUpdates from '../tasks/RecentUpdates'

const ProjectDetails = (props) => {
	const { project, auth } = props;

	// Redirect to Login page user if not login
	if (!auth.uid) return <Redirect to="/signin" />

	if (project) {
		return (
  		<div className="container section project-details">
		    <div className="card z-depth-0">
		  		<div className="card-content">
		  			<span className="card-title">{ project.title }</span>
		  			<p>{ project.content }</p>
		  		</div>
	  			<div className="card-action grey lighten-4 grey-text">
		  			<div>Posted by { project.authorFirstName } { project.authorLastName }</div>
		  			<div>31st of May, 12pm</div>
		  		</div>
		  	</div>

				<div className="row task-list">
					<h5 className="grey-text center">Tasks List</h5>
					<div className="col s12 m6">
						<ProjectTask />
					</div>
					<div className="col s12 m5 offset-m1">
						<RecentUpdates />
					</div>
				</div>
		  </div>
	  )
	} else {
		return (
			<div className="container center">
				<p>Loading project....</p>
			</div>
		)
	}

}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;

	return {
		project: project,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects' }
	])
)(ProjectDetails)