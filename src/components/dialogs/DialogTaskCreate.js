import React, { useState } from 'react'

// Material-UI components
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

export default function DialogTaskCreate({ isOpen, onSubmit, onClose }) {
  const [newTitle, setNewTitle] = useState('')
  const [newNotes, setNewNotes] = useState('')
  const [newDue, setNewDue] = useState('')

  // обработчик элементов input
  function handleTitleChange(e) {
    setNewTitle(e.target.value)
  }
  function handleNotesChange(e) {
    setNewNotes(e.target.value)
  }
  function handleDueChange(e, date) {
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
        title: newTitle, 
        notes: newNotes, 
        due: newDue
      })
    }
    resetState()
  }

  function resetState() {
    setNewTitle('')
    setNewNotes('')
    setNewDue('')
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add task</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          label="Enter task title"
          InputLabelProps={{ shrink: true }}
          onChange={handleTitleChange}
        />
      </DialogContent>

      <DialogContent>
        <TextField
          label="Enter task description"
          InputLabelProps={{ shrink: true }}
          onChange={handleNotesChange}
        />
      </DialogContent>

      <DialogContent>
        <TextField
          type="date"
          label="Enter task due"
          InputLabelProps={{ shrink: true }}
          onChange={handleDueChange}
        />
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