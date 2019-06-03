import M from 'materialize-css';

export const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(() => {
			dispatch({ type: 'LOGIN_SUCCESS' });
			 M.toast({html: 'Succesfully Login!', classes: 'rounded'});
		}).catch((error) => {
			dispatch({ type: 'LOGIN_ERROR', error });
		});
	}
};


export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().signOut().then(() => {
			dispatch({ type: 'SIGNOUT_SUCCESS' })
		});
	}
}