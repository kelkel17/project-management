import swal from 'sweetalert';

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();

		firestore.collection('projects').add({
			...project,
			authorFirstName: 'Micmic',
			authorLastName: 'Saturre',
			authorId: 12345,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_PROJECT', project })
			swal({
			  title: "Good job!",
			  text: "You successfully created a new project!",
			  icon: "success",
			});
		}).catch((response) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', response })
		})
	}
}