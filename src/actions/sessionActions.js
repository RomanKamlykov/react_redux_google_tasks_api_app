import constants from '../constants'
import api from '../api'

// sync action creators
function sessionAuthorize_request(bool) {
  return {
    type: constants.SESSION_AUTHORIZE_REQUEST,
    items: bool
  }
}

function sessionAuthorize_success() {
  return {
    type: constants.SESSION_AUTHORIZE_SUCCESS
  }
}

function sessionAuthorize_fail(error) {
  return {
    type: constants.SESSION_AUTHORIZE_FAIL,
    error: error
  }
}

function sessionLogout_success() {
  return {
    type: constants.SESSION_LOGOUT_SUCCESS
  }
}

// async action creators
export function sessionAuthorize(immediate = false) {
  return dispatch => {
    dispatch(sessionAuthorize_request(true)) // отправлен запрос
    api.authorize({ immediate })
      .then(() => {
        dispatch(sessionAuthorize_request(false)) // получен ответ
        return
      })
      .then(() => dispatch(sessionAuthorize_success())) // данные получены
      .catch((error) => dispatch(sessionAuthorize_fail(error))) // данные не получены
  }
}

export function sessionLogout() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      api.logout()
        .then(() => {
          dispatch(sessionLogout_success())
          resolve()
        })
        .catch((error) => reject(error))
    })
  }
}