import React, { useState, useEffect } from 'react'
import './Tasks.css'

// my components
import Task from '../containers/Task'
import DialogTaskCreate from './dialogs/DialogTaskCreate'
import DialogTaskListEditTitle from './dialogs/DialogTaskListEditTitle'

// Material-UI components
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import AddIcon from '@material-ui/icons/Add'

export default function Tasks({ taskListId, taskListTitle, tasks, taskListTitleUpdate, taskListDelete, tasksLoad, taskCreate, history }) {

  // загрузка Tasks при загрузке компонента
  useEffect(() => {
    tasksLoad(taskListId)
  }, [taskListId])

  // обработчики создания Task
  const [isCreatingTask, setIsCreatingTask] = useState(false)
  // открыть TaskCreateModal
  function handleAddTask() {
    setIsCreatingTask(true)
  }
  // закрыть TaskCreateModal
  function handleTaskClose() {
    setIsCreatingTask(false)
  }
  // добавить новый Task
  function handleTaskSubmit(params) {
    //const taskListId = match.params.topicId
    taskCreate({ taskListId, ...params })
    setIsCreatingTask(false)
  }

  // обработчик удаления Task
  function handleDeleteTaskList() {
    const isConfirmed = window.confirm(
      'All tasks in this Task List will be deleted too. Are you sure to delete this Task List?'
    )
    if (isConfirmed) {
      history.replace("/home")
      taskListDelete({
        taskListId
      })
    }
  }

  // обработчики редактирования Task List Title
  const [isEditingTaskList, setIsEditingTaskList] = useState(false)
  function editTaskListTitle() {
    setIsEditingTaskList(true)
  }
  function handleTaskListSubmit(params) {
    console.log({ taskListId, ...params });
    taskListTitleUpdate({ taskListId, ...params })
    setIsEditingTaskList(false)
  }
  function handleTaskListClose() {
    setIsEditingTaskList(false)
  }

  return (
    <div className='Tasks'>
      <div className='Tasks__header'>

        {/* ------------- Task list title --------------- */}
        <h2 className='Tasks__title' onClick={editTaskListTitle}>
          {taskListTitle}
        </h2>

        {/* ------------- Button "Delete task list" --------------- */}
        <div>
          <IconButton onClick={handleDeleteTaskList}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>

      <List className='Tasks__tasks'>

        {/* ------------- Button "Create new task" --------------- */}
        <ListItem className="Tasks__createTask" button onClick={handleAddTask}>
          <ListItemIcon className="Tasks__createTaskIcon"><AddIcon /></ListItemIcon>
          <ListItemText>Create new task</ListItemText>
        </ListItem>

        {/* ------------- Tasks --------------- */}
        {tasks.length > 0 &&
          tasks.map(task =>
            <Task
              key={task.id}
              taskListId={taskListId}
              task={task}
            />
          )
        }
      </List>

      {/* ------------- Dialog "Edit task list title" --------------- */}
      <DialogTaskListEditTitle
        isOpen={isEditingTaskList}
        onSubmit={handleTaskListSubmit}
        onClose={handleTaskListClose}
        initialValue={taskListTitle}
      />

      {/* ------------- Dialog "Create new task" --------------- */}
      <DialogTaskCreate
        isOpen={isCreatingTask}
        onSubmit={handleTaskSubmit}
        onClose={handleTaskClose}
      />
    </div>
  )
}