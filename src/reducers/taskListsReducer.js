import constants from '../constants';

export default function taskListsReducer(state = [], action) {
	let newState

	switch (action.type) {
		case constants.TASK_LISTS_LOAD_SUCCESS:
      newState = action.items ? action.items.map(formatTaskList) : [] // если нет ни одного списка - возвращает пустой массив
      return newState

    case constants.TASK_LIST_CREATE_SUCCESS:
      newState = [...state]
      let newTaskList = formatTaskList(action.items)
      newState.push(newTaskList)
      return newState

    case constants.TASK_LIST_UPDATE_SUCCESS:
      newState = [...state]
      let updatedTaskListIndex = newState.findIndex(taskList => taskList.id === action.items.id)
			newState[updatedTaskListIndex] = formatTaskList(action.items)
      return newState

    case constants.TASK_LIST_DELETE_SUCCESS:
      newState = [...state]
      let deletedTaskListIndex = newState.findIndex(taskList => taskList.id === action.items.taskListId)
      newState.splice(deletedTaskListIndex, 1)
      console.log(newState);
      return newState

		default:
			return state
	}
}

function formatTaskList(taskList) {
  return {
    id: taskList.id,
    title: taskList.title
  }
}