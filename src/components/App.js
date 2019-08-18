import React from 'react'
import { HashRouter, Route, Redirect } from "react-router-dom"
import './App.css'

// my components
import LogInButton from '../containers/LogInButton'
import HomeButton from './HomeButton'
import TaskLists from '../containers/TaskLists'
import Tasks from '../containers/Tasks'
import Home from './Home'

// Material-UI components
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

function TasksRoute({ match }) {
  return (
    <Route path={`${match.path}/:topicId`} component={Tasks} />
  )
}

export default function App({ isLoggedIn }) {
  return (
    <HashRouter hashType='noslash'>
      <div className='App'>

        <div className='App__menu'>
          <h3 className='App__title'>Almost Google Tasks</h3>
          <Divider />

          <List>
            <LogInButton />
            <HomeButton />
          </List>
          <Divider />

          {isLoggedIn ? <Route component={TaskLists} /> : <Redirect to='/home' />}
        </div>

        <div className='App__tasks'>
          <Route path="/home" component={Home} />
          {isLoggedIn ? <Route path="/list" component={TasksRoute} /> : null}
        </div>

      </div>
    </HashRouter>
  )
}