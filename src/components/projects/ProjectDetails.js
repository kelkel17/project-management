import React from 'react';

// Components
import ProjectTask from '../tasks/ProjectTask'
import RecentUpdates from '../tasks/RecentUpdates'

const ProjectDetails = (props) => {
  return (
  	<div className="container section project-details">
	    <div className="card z-depth-0">
	  		<div className="card-content">
	  			<span className="card-title">Project Title - {props.match.params.id}</span>
	  			<p>Test contentTest contentTest contentTest contentTest contentTest content.</p>
	  		</div>
  			<div className="card-action grey lighten-4 grey-text">
	  			<div>Posted by Micmic</div>
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
}

export default ProjectDetails;