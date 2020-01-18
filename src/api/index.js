const CLIENT_ID = 'process.env.REACT_APP_CLIENT_ID'

const SCOPES = [
  'https://www.googleapis.com/auth/tasks',
  'https://www.googleapis.com/auth/plus.me'
]

export default {
  authorize(params) {
    return new Promise((resolve, reject) => {
      window.gapi.auth.authorize(
        {
          'client_id': CLIENT_ID,
          'scope': SCOPES,
          'immediate': params.immediate,
          'cookie_policy': 'single_host_origin'
        },
        authResult => {
          if (authResult.error) {
            window.location.hash = '/login'
            return reject(authResult.error)
          }

          if (authResult.message === "Missing required parameter 'client_id'") {
            return reject(authResult.message)
          }

          console.log('successfully logged in!')
          return window.gapi.client.load('tasks', 'v1', () => window.gapi.client.load('plus', 'v1', () => resolve()))
        }
      )
    })
  },

  logout() {
    return new Promise((resolve, reject) => {
      const token = window.gapi.auth.getToken()

      if (token) {
        const accessToken = window.gapi.auth.getToken().access_token

        fetch(`https://accounts.google.com/o/oauth2/revoke?token=${accessToken}`, {
          mode: 'no-cors'
        })
          .then(() => {
            window.gapi.auth.signOut()
            resolve()
          })
          .catch((error) => reject(error))
      }
    })
  },

  taskListsLoad() {
    const request = window.gapi.client.tasks.tasklists.list()
    return this.makeRequest(request)
  },

  taskListCreate({ title }) {
    const request = window.gapi.client.tasks.tasklists.insert({
      title
    })
    return this.makeRequest(request)
  },

  taskListUpdate({ taskListId, title }) {
    const request = window.gapi.client.tasks.tasklists.update({
      tasklist: taskListId,
      id: taskListId,
      title
    });

    return this.makeRequest(request);
  },

  tasksLoad({ taskListId }) {
    const request = window.gapi.client.tasks.tasks.list({
      tasklist: taskListId
    })
    return this.makeRequest(request)
  },

  taskCreate({ taskListId, ...params }) {
    const request = window.gapi.client.tasks.tasks.insert({
      tasklist: taskListId,
      ...params
    })
    return this.makeRequest(request)
  },

  taskUpdate({ taskListId, taskId, ...params }) {
    const request = window.gapi.client.tasks.tasks.update({
      tasklist: taskListId,
      task: taskId,
      id: taskId,
      ...params
    })
    return this.makeRequest(request)
  },

  taskDelete({ taskListId, taskId }) {
    const request = window.gapi.client.tasks.tasks.delete({
      tasklist: taskListId,
      task: taskId,
      id: taskId
    })
    return this.makeRequest(request)
  },

  taskListDelete({ taskListId }) {
    const request = window.gapi.client.tasks.tasklists.delete({
      tasklist: taskListId
    })
    return this.makeRequest(request)
  },

  makeRequest(requestObj) {
    return new Promise((resolve, reject) => {
      requestObj.execute(resp =>
        resp.error
          ? reject(resp.error)
          : resolve(resp.result)
      )
    })
  }
}
