import authReducer from './authReducer'
import projectReducer from './projectReducer'
import taskReducer from './taskReducer'
import { combineReducers } from 'redux'

// Pass this to the store
const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	task: taskReducer
})

export default rootReducer