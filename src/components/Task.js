import React, { useState } from 'react'
import './Task.css'

// my components
import DialogTaskEdit from './dialogs/DialogTaskEdit'

// Material-UI components
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

export default function Task({ task, taskListId, taskUpdateStatus, taskUpdate, taskDelete }) {

  const { title, notes, due, id, isCompleted } = task

  // обработчик Checkbox
  function handleCheckbox() {
    taskUpdateStatus({
      taskListId: taskListId,
      taskId: id,
      isCompleted: !isCompleted
    })
  }

  // обработчик Delete
  function handleDelete() {
    const isConfirmed = window.confirm(
      'Are you sure to delete this Task?'
    )
    if (isConfirmed) {
      taskDelete({
        taskListId: taskListId,
        taskId: id
      })
    }
  }

  // обработчики Dialog "Edit task"
  const [isDialogEditTask, setIsDialogEditTask] = useState(false)
  // открыть Dialog "Edit task"
  function openDialogTaskEdit() {
    setIsDialogEditTask(true)
  }
  // закрыть Dialog "Edit task"
  function closeDialogTaskEdit() {
    setIsDialogEditTask(false)
  }
  // submit Dialog "Edit task"
  function submitDialogTaskEdit(params) {
    taskUpdate({ taskListId, ...params })
    setIsDialogEditTask(false)
  }

  return (
    <div>
      <ListItem className='Task'>

        {/* ------------- Checkbox "Completed task" --------------- */}
        <ListItemIcon>
          <Checkbox
            className='Task__checkbox'
            checked={isCompleted}
            onChange={handleCheckbox}
          />
        </ListItemIcon>

        {/* ------------- Text "Task" --------------- */}
        <ListItemText onClick={openDialogTaskEdit} primary={title} secondary={notes} />
        
        <ListItemIcon onClick={openDialogTaskEdit}>
          <span>{due ? due.toDateString() : null}</span>        
        </ListItemIcon>
        
        {/* ------------- Button "Delete task" --------------- */}
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>

      {/* ------------- Dialog "Edit task" --------------- */}
      <DialogTaskEdit
        isOpen={isDialogEditTask}        
        onSubmit={submitDialogTaskEdit}
        onClose={closeDialogTaskEdit}        
        task={task}
        taskListId={taskListId}
      />
    </div>
  )
}