# React Redux + Google API
You can see the working application [here](https://romankamlykov.github.io/react_redux_google_tasks_api_app/).

## Summary
Based on these examples:
- [krambertech/react-essential-course](https://github.com/krambertech/react-essential-course/tree/master/06-real-world)
- [KarafiziArtur/react-google-tasks](https://github.com/KarafiziArtur/react-google-tasks)

To get started, add your CLIENT_ID to the file 'src/api/index.js'.

You can create your CLIENT_ID using the instructions on this [page](https://developers.google.com/tasks/quickstart/js).

## The application uses the following tools:</h3>
- React, React Hooks, React-Router, Create React App
- Redux, React-Redux, Redux-Thunk
- Material-UI
- Google Tasks API

## Application structure:
```
< MyComponent > - Presentational Component
( MyComponent ) - Container Component connected to Redux

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
```
## Application actions:
LogInButton component:
- sessionAuthorize
- sessionLogout

TaskLists component:
- taskListsLoad
- taskListCreate

Tasks component:
- taskListTitleUpdate
- taskListDelete
- tasksLoad
- taskCreate

Task component:
- taskUpdateStatus
- taskUpdate
- taskDelete
