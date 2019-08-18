import React, { useState, useEffect } from 'react'

// Material-UI components
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

export default function DialogTaskListEditTitle({ isOpen, onSubmit, onClose, initialValue }) {

  const [value, setValue] = useState('')

  useEffect(
    () => {
      resetState()
    }, [initialValue]
  )

  // обработчик элемента TextField
  function handleTextChange(e) {
    setValue(e.target.value)
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
        title: value
      })
    }
  }

  function resetState() {
    setValue(initialValue)
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Edit task list</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          value={value}
          label="Enter task list new title"
          InputLabelProps={{ shrink: true }}
          onChange={handleTextChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={!value}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}