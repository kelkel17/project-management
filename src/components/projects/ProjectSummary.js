import React from 'react'

const ProjectSummary = ({project}) => {
	return (
		<div className="project-summary card z-depth-0">
  		<div className="card-content grey-text text-darken-3">
  			<span className="card-title">{project.title}</span>
  			<p>Posted by Micmic</p>
  			<p className="grey-text">31st of May, 12pm</p>
  			<a href={"/project/" + project.id}>View More</a>
  		</div>
  	</div>
	)
}

export default ProjectSummary