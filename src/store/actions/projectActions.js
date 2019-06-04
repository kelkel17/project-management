import swal from 'sweetalert';

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		firestore.collection('projects').add({
			...project,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
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