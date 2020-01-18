<h2>React Redux + Google API</h2>
<p>
  Ссылка для просмотра приложения <a href='https://romankamlykov.github.io/react_redux_google_tasks_api_app/' target='_blank'>GitHub Pages</a>
</p>
<p>
  Based on these examples:
  <ul>
    <li>
      <a href="https://github.com/krambertech/react-essential-course/tree/master/06-real-world" target="_blank">krambertech/react-essential-course</a>
    </li>
    <li>
      <a href="https://github.com/KarafiziArtur/react-google-tasks" target="_blank">KarafiziArtur/react-google-tasks</a>
    </li>
  </ul>
</p>
<p>
  To get started, add your CLIENT_ID to the file 'src/api/index.js'. <br />
  You can create your CLIENT_ID using the instructions on this <a href="https://developers.google.com/tasks/quickstart/js">page</a>.
</p>
<p>
  <h3>The application uses the following tools:</h3>
  <ul>
    <li>
      React, React Hooks, React-Router, Create React App
    </li>
    <li>
      Redux, React-Redux, Redux-Thunk
    </li>
    <li>
      Material-UI
    </li>
    <li>
      Google Tasks API
    </li>
  </ul>
</p>
<p>
  <h3>Application structure:</h3>
  <pre>
    < MyComponent > - Presentational Component
    ( MyComponent ) - connected to Redux by Container Component

    (App)
    │
    ├── (LogInButton)
    │
    ├── <HomeButton>
    │
    ├── (TaskLists)
    │   │
    │   └── <DialogTaskListCreate>
    │
    └── (Tasks)
        │
        ├── <DialogTaskCreate>
        │
        ├── <DialogTaskListEditTitle>
        │
        └── map (Task)
            │
            └── <DialogTaskEdit>
  </pre>
</p>
<p>
  <h3>Application actions:</h3>

  LogInButton component:
  <ul>
    <li>sessionAuthorize</li>
    <li>sessionLogout</li>
  </ul>

  TaskLists component:
  <ul>
    <li>taskListsLoad</li>
    <li>taskListCreate</li>
  </ul>

  Tasks component:
  <ul>
    <li>taskListTitleUpdate</li>
    <li>taskListDelete</li>
    <li>tasksLoad</li>
    <li>taskCreate</li>
  </ul>

  Task component:
  <ul>
    <li>taskUpdateStatus</li>
    <li>taskUpdate</li>
    <li>taskDelete</li>
  </ul>
</p>