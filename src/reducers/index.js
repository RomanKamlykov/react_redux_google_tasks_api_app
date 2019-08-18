import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import taskListsReducer from './taskListsReducer'
import tasksReducer from './tasksReducer'

const appReducer = combineReducers({
	sessionReducer,
    taskListsReducer,
    tasksReducer
})

export default appReducer