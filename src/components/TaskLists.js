import React, { useState, useEffect } from 'react'
import './TaskLists.css'

// my components
import DialogTaskListCreate from './dialogs/DialogTaskListCreate'

// Material-UI components
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import FolderIcon from '@material-ui/icons/Folder'
import AddIcon from '@material-ui/icons/Add'

export default function TaskLists({ taskLists, taskListsLoad, taskListCreate }) {

  // загрузка TaskLists при загрузке компонента
  useEffect(() => {
    taskListsLoad()
  }, [])

  // обработчики открытия и закрытия TaskListCreateModal, создания нового TaskList
  const [isCreatingTaskList, setIsCreatingTaskList] = useState(false)
  // открыть TaskListCreateModal
  function handleAddTaskList() {
    setIsCreatingTaskList(true)
  }
  // закрыть TaskListCreateModal
  function handleClose() {
    setIsCreatingTaskList(false)
  }
  // добавить новый TaskList
  function handleTaskListSubmit(newTaskListName) {
    taskListCreate(newTaskListName)
    setIsCreatingTaskList(false)
  }

  return (
    <List>
      {/* ------------- header --------------- */}
      <ListSubheader>Task Lists</ListSubheader>

      {/* ------------- Button "Create new list" --------------- */}
      <ListItem button onClick={handleAddTaskList}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText>
          Create new list
              </ListItemText>
      </ListItem>

      {/* ------------- Task lists --------------- */}
      {taskLists.length > 0 &&
        taskLists.map(list =>
          <ListItem button component="a" href={`/#list/${list.id}`} key={list.id}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText>
              {list.title}
            </ListItemText>
          </ListItem>
        )
      }

      {/* ------------- Dialog "Create new task list" --------------- */}
      <DialogTaskListCreate
        isOpen={isCreatingTaskList}
        onSubmit={handleTaskListSubmit}
        onClose={handleClose}
      />
    </List>
  )
}