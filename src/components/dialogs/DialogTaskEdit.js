import React, { useState, useEffect } from 'react'

// Material-UI components
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

export default function DialogTaskEdit({ isOpen, onSubmit, onClose, task, taskListId }) {
  const { title, notes, due, id } = task

  const [newTitle, setNewTitle] = useState()
  const [newNotes, setNewNotes] = useState()
  const [newDue, setNewDue] = useState()

  useEffect(
    () => {
      resetState()
    }, [title, notes, due]
  )

  // обработчики элементов input
  function handleTitleChange(e) {
    setNewTitle(e.target.value)
  }
  function handleNotesChange(e) {
    setNewNotes(e.target.value)
  }
  function handleDueChange(date) {
    setNewDue(date)
  }

  // обработчик элемента Button Cancel
  function handleClose() {
    resetState()
    if (onClose) {
      onClose()
    }
  }

  // обработчик элемента Button Submit
  function handleSubmit() {
    if (onSubmit) {
      onSubmit({
        taskListId: taskListId,
        taskId: id,
        title: newTitle,
        notes: newNotes || undefined,
        due: newDue || undefined
      })
    }
  }

  function resetState() {
    setNewTitle(title)
    setNewNotes(notes || '')
    setNewDue(due || '')
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Edit task</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          value={newTitle}
          label="Enter task title"
          InputLabelProps={{ shrink: true }}
          onChange={handleTitleChange}
        />
      </DialogContent>

      <DialogContent>
        <TextField
          value={newNotes}
          label="Enter task description"
          InputLabelProps={{ shrink: true }}
          onChange={handleNotesChange}
        />
      </DialogContent>
      <DialogContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            format="dd/MM/yyyy"
            label="Enter task due"
            value={newDue || null} // это для возможности установки пустого значения
            InputLabelProps={{ shrink: true }}
            onChange={handleDueChange}
          />
        </MuiPickersUtilsProvider>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
          </Button>
        <Button onClick={handleSubmit} color="primary" disabled={!newTitle}>
          Submit
          </Button>
      </DialogActions>
    </Dialog>
  )
}