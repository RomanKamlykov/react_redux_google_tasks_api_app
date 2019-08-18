import React, { useState } from 'react'

// Material-UI components
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

export default function DialogTaskListCreate({ isOpen, onSubmit, onClose }) {
  const [name, setName] = useState('')

  // обработчик элемента TextField
  function handleTextChange(e) {
    setName(e.target.value)
  }

  // обработчик элемента Button Cancel
  function handleClose() {
    setName('')
    if (onClose) {
      onClose()
    }
  }

  // обработчик элемента Button Submit
  function handleSubmit() {
    if (onSubmit) {
      onSubmit(name);
    }
    setName('')
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add task list</DialogTitle>
      
      <DialogContent>
        <TextField
          autoFocus
          label="Enter new task list title"
          InputLabelProps={{ shrink: true }}
          onChange={handleTextChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
          </Button>
        <Button onClick={handleSubmit} color="primary" disabled={!name}>
          Submit
          </Button>
      </DialogActions>
    </Dialog>
  )
}