import constants from '../constants';
import api from '../api'

// sync action creators
function taskListsLoad_request(bool) {
  return {
    type: constants.TASK_LISTS_LOAD_REQUEST,
    items: bool
  }
}

function taskListsLoad_success(items) {
  return {
    type: constants.TASK_LISTS_LOAD_SUCCESS,
    items: items
  }
}

function taskListsLoad_fail(bool) {
  return {
    type: constants.TASK_LISTS_LOAD_FAIL,
    hasFailed: bool
  }
}

function taskListCreate_success(items) {
  return {
    type: constants.TASK_LIST_CREATE_SUCCESS,
    items: items
  }
}

function taskListCreate_fail(bool) {
  return {
    type: constants.TASK_LIST_CREATE_FAIL,
    hasFailed: bool
  }
}

function taskListTitleUpdate_success(items) {
  return {
    type: constants.TASK_LIST_UPDATE_SUCCESS,
    items: items
  }
}

function taskListTitleUpdate_fail(bool) {
  return {
    type: constants.TASK_LIST_UPDATE_FAIL,
    hasFailed: bool
  }
}

function taskListDelete_success(items) {
  return {
    type: constants.TASK_LIST_DELETE_SUCCESS,
    items: items
  }
}

function taskListDelete_fail(bool) {
  return {
    type: constants.TASK_LIST_DELETE_FAIL,
    hasFailed: bool
  }
}

// async action creators
export function taskListsLoad() {
  return dispatch => {
    dispatch(taskListsLoad_request(true))

    api.taskListsLoad()
      .then(response => {
        dispatch(taskListsLoad_request(false))
        return response.items
      })
      .then(items => dispatch(taskListsLoad_success(items)))
      .catch((error) => dispatch(taskListsLoad_fail(error)))
  };
}

export function taskListCreate(title) {
  return dispatch => {
    api.taskListCreate({ title })
      .then(items => dispatch(taskListCreate_success(items)))
      .catch((error) => dispatch(taskListCreate_fail(error)))
  }
}

export function taskListTitleUpdate(params) {
  return dispatch => {
    api.taskListUpdate({
      taskListId: params.taskListId,
      title: params.title
    })
      .then(items => dispatch(taskListTitleUpdate_success(items)))
      .catch((error) => dispatch(taskListTitleUpdate_fail(error)))
  }
}

export function taskListDelete(params) {
  return dispatch => {
    api.taskListDelete({
      taskListId: params.taskListId
    })
      .then(() => dispatch(taskListDelete_success(params)))
      .catch((error) => dispatch(taskListDelete_fail(error)))
  }
}