import swal from 'sweetalert';

// Variables
let currentDate = new Date();

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		let latestData = '';

		firestore.collection('projects').add({
			...project,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			status: 'Open',
			createdAt: currentDate,
			updatedAt: currentDate
		}).then(() => {
			dispatch({ type: 'CREATE_PROJECT', project })
			swal({
			  title: "Good job!",
			  text: "You successfully created a new project!",
			  icon: "success",
			}).then(() => {
				latestData = firestore.collection('projects').where('authorId', '==', authorId).orderBy('createdAt', 'desc').limit(1);
				latestData.get().then(function(snapshots) {
					snapshots.forEach(function(doc) {
						window.location.href = "/project/" + doc.id;
					})
				})
			});
		}).catch((response) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', response })
		})
	}
}

export const closeProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();

		swal({
			title: "Closing a project!",
		  text: "Are you sure you want to close this project?",
		  icon: "warning",
		  buttons: true,
  		dangerMode: true,
		}).then((willClose) => {
			if (willClose) {
				console.log('yes');
				firestore.collection('projects').doc(project).update({
					status: 'Close',
					updatedAt: currentDate
				}).then(() => {
					swal({
					  title: "You successfully open this project!",
					  icon: "success",
					}).then(() => {
						window.location.reload();
					})
				});
			}
		})
	}
}

export const openProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();

		swal({
			title: "Re-opening a project!",
		  text: "Are you sure you want to re-open this project?",
		  icon: "warning",
		  buttons: true,
  		dangerMode: true,
		}).then((willClose) => {
			if (willClose) {
				console.log('yes');
				firestore.collection('projects').doc(project).update({
					status: 'Open',
					updatedAt: currentDate
				}).then(() => {
					swal({
					  title: "You successfully close this project!",
					  icon: "success",
					}).then(() => {
						window.location.reload();
					})
				});
			}
		})
	}
}