import React from 'react'

// Material-UI components
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitIcon from '@material-ui/icons/ExitToApp'

export default function LogInButton({ isLoggedIn, sessionAuthorize, sessionLogout }) {
  if (isLoggedIn) {
    return (
      <ListItem button onClick={sessionLogout}>
        <ListItemIcon>
          <ExitIcon />
        </ListItemIcon>
        <ListItemText>
          Log out
        </ListItemText>
      </ListItem>
    )
  } else {
    return (
      <ListItem button onClick={sessionAuthorize}>
        <ListItemIcon>
          <ExitIcon />
        </ListItemIcon>
        <ListItemText>
          Log in
        </ListItemText>
      </ListItem>
    )    
  }
}