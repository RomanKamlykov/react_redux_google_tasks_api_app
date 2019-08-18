import constants from '../constants';
import api from '../api'

// sync action creators
// Load
function tasksLoad_request(bool) {
  return {
    type: constants.TASKS_LOAD_REQUEST,
    items: bool
  }
}

function tasksLoad_success(items) {
  return {
    type: constants.TASKS_LOAD_SUCCESS,
    items: items
  }
}

function tasksLoad_fail(bool) {
  return {
    type: constants.TASKS_LOAD_FAIL,
    hasFailed: bool
  }
}

// Create
function taskCreate_success(task) {
  return {
    type: constants.TASK_CREATE_SUCCESS,
    task: task
  }
}

function taskCreate_fail(bool) {
  return {
    type: constants.TASK_CREATE_FAIL,
    hasFailed: bool
  }
}

// Update
function taskUpdate_success(task) {
  return {
    type: constants.TASK_UPDATE_SUCCESS,
    task: task
  }
}

function taskUpdate_fail(bool) {
  return {
    type: constants.TASK_UPDATE_FAIL,
    hasFailed: bool
  }
}

// Delete
function taskDelete_success(task) {
  return {
    type: constants.TASK_DELETE_SUCCESS,
    task: task
  }
}

function taskDelete_fail(bool) {
  return {
    type: constants.TASK_DELETE_FAIL,
    hasFailed: bool
  }
}

// async action creators
// Load
export function tasksLoad(taskListId) {
  return dispatch => {
    dispatch(tasksLoad_request(true))

    api.tasksLoad({ taskListId })
      .then(response => {
        dispatch(tasksLoad_request(false))
        return response.items
      })
      .then(items => dispatch(tasksLoad_success(items)))
      .catch((error) => dispatch(tasksLoad_fail(error)))
  }
}

// Create
export function taskCreate(params) {
  const newTask = {
    taskListId: params.taskListId,
    title: params.title,
    notes: params.notes
  }
  if (params.due) {
    newTask.due = (new Date(params.due.getTime() - params.due.getTimezoneOffset() * 60000)).toISOString()
  }

  return dispatch => {
    api.taskCreate(newTask)
      .then(task => dispatch(taskCreate_success(task))) // результат
      .catch((error) => dispatch(taskCreate_fail(error))) // ошибка
  }
}

// Update
export function taskUpdate(params) {
  return dispatch => {
    api.taskUpdate({
      taskListId: params.taskListId,
      taskId: params.taskId,
      title: params.title,
      notes: params.notes,
      due: params.due
    })
      .then(task => dispatch(taskUpdate_success(task))) // успешно
      .catch((error) => dispatch(taskUpdate_fail(error))) // ошибка
  }
}

// Update Status
export function taskUpdateStatus(params) {
  return dispatch => {
    api.taskUpdate({
      taskListId: params.taskListId,
      taskId: params.taskId,
      status: params.isCompleted ? 'completed' : 'needsAction'
    })
      .then(task => dispatch(taskUpdate_success(task))) // тут 'task' - возвращаемое от api значение
      .catch((error) => dispatch(taskUpdate_fail(error))) // ошибка
  }
}

// Delete
export function taskDelete(params) {
  return dispatch => {
    api.taskDelete({
      taskListId: params.taskListId,
      taskId: params.taskId
    })
      .then(() => dispatch(taskDelete_success(params))) // успешно
      .catch((error) => dispatch(taskDelete_fail(error))) // ошибка
  }
}