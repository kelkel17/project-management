const initState = {
	authError: null
}

const authReducer = (state = initState, action) => {
	switch(action.type) {
		case 'LOGIN_ERROR':
			let message;

			if (action.error.code === "auth/user-not-found") {
				message = "You're email does not exist. Not register yet? Register now!";
			} else if (action.error.code === "auth/wrong-password") {
				message = "You entered a wrong password please try again!";
			}

			return {
				...state,
				authError: message
			}

		case 'LOGIN_SUCCESS':
			console.log('login success');
			return {
				...state,
				authError: null
			}

		case 'SIGNOUT_SUCCESS':
			console.log('signout success');
			return state;

		default:
			return state;
	}
}

export default authReducer