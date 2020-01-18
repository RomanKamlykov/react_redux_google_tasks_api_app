import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className="Home">
      <h2>React Redux + Google API</h2>
      <h3>
        Based on these examples:
      </h3>
      <ul>
        <li>
          <a href="https://github.com/krambertech/react-essential-course/tree/master/06-real-world" rel="noopener noreferrer" target="_blank">krambertech/react-essential-course</a>
        </li>
        <li>
          <a href="https://github.com/KarafiziArtur/react-google-tasks" rel="noopener noreferrer" target="_blank">KarafiziArtur/react-google-tasks</a>
        </li>
      </ul>      
      <p>
        To get started, add your CLIENT_ID to the file 'src/api/index.js'. <br />
        You can create your CLIENT_ID using the instructions on this <a href="https://developers.google.com/tasks/quickstart/js">page</a>.
      </p>

      <h3>
        The application uses the following tools:
      </h3>
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
      
      <h3>
        Application structure:
      </h3>
      <pre>{`
      <MyComponent> - Presentational Component
      (MyComponent) - connected to Redux by Container Component

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
      `}</pre>
      
      <h3>
        Application actions:
      </h3>

      <p>LogInButton component:</p>
      <ul>
        <li>sessionAuthorize</li>
        <li>sessionLogout</li>
      </ul>

      <p>TaskLists component:</p>
      <ul>
        <li>taskListsLoad</li>
        <li>taskListCreate</li>
      </ul>

      <p>Tasks component:</p>
      <ul>
        <li>taskListTitleUpdate</li>
        <li>taskListDelete</li>
        <li>tasksLoad</li>
        <li>taskCreate</li>
      </ul>

      <p>Task component:</p>
      <ul>
        <li>taskUpdateStatus</li>
        <li>taskUpdate</li>
        <li>taskDelete</li>
      </ul>

    </div>
  )
}