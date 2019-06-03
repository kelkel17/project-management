import React from 'react';

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
	  </div>
  )
}

export default ProjectDetails;