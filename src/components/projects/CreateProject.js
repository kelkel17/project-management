import React, { Component } from 'react'
import { connect } from 'react-redux'

// Component
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
	state = {
		title: '',
		details: '',
	}

	handleChange = (e) => {
		this.setState({
			// get the id that's being changed
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		// prevent page from being reload
		e.preventDefault();
		this.props.createProject(this.state);
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create New Project</h5>
					<div className="input-field">
						<label htmlFor="title">Project Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<label htmlFor="details">Project Details</label>
						<textarea className="materialize-textarea" id="details" onChange={this.handleChange}></textarea>
					</div>

					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Create Project</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project))
	}
}

export default connect(null, mapDispatchToProps)(CreateProject);
