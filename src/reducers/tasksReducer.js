import constants from '../constants';

export default function tasksReducer(state = [], action) {
  let newState

  switch (action.type) {
    case constants.TASKS_LOAD_REQUEST:
      newState = []
      return newState

    case constants.TASKS_LOAD_SUCCESS:
      newState = action.items ? action.items.map(formatTask) : [] // если нет ни одной задачи - возвращает пустой массив
      return newState

    case constants.TASK_CREATE_SUCCESS:
      newState = [...state]
      let newTask = formatTask(action.task)      
      newState.unshift(newTask)
      return newState

    case constants.TASK_UPDATE_SUCCESS:
      newState = [...state]
      let updatedTaskIndex = newState.findIndex(task => task.id === action.task.id)      
      newState[updatedTaskIndex] = formatTask(action.task)
      return newState

    case constants.TASK_DELETE_SUCCESS:
      newState = [...state]
      let deletedTaskIndex = newState.findIndex(task => task.id === action.task.taskId)
      newState.splice(deletedTaskIndex, 1)
      return newState

    default:
      return state
  }
}

function formatTask(task) {
  return {
    id: task.id,
    title: task.title,
    notes: task.notes,
    due: task.due ? new Date(task.due) : undefined,
    isCompleted: task.status === 'completed', // returns 'true' if 'status === 'completed', else - returns 'false'
    position: task.position
  }
}