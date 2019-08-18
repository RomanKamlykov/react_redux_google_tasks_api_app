import React from 'react'

// Material-UI components
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'

export default function HomeButton() {
  return (
    <ListItem button component="a" href={`/#home`}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText>
        Home
      </ListItemText>
    </ListItem>
  )
}