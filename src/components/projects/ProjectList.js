import React from 'react';
import { Link } from 'react-router-dom'

// Components
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
	console.log(projects);
  return (
    <div className="project-list section">
    	{ projects && projects.map(project => {
    		return (
    			<Link to={'/project/' + project.id}>
    				<ProjectSummary project={project} key={project.id} />
    			</Link>
    		)
    	}) }
    </div>
  )
}

export default ProjectList;