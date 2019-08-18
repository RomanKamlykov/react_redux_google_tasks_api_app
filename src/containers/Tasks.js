import { connect } from 'react-redux'
import { taskListTitleUpdate, taskListDelete } from '../actions/taskListsActions'
import { tasksLoad, taskCreate } from '../actions/tasksActions'
import { selectTaskListTitle } from '../selectors'

// my components
import Tasks from '../components/Tasks'

function mapStateToProps(state, ownProps) {
  let tasksLists = state.taskListsReducer  
  let tasks = state.tasksReducer
  let taskListId = ownProps.match.params.topicId
  let taskListTitle = selectTaskListTitle(tasksLists, taskListId)

  return {
    tasksLists,
    tasks,
    taskListId,
    taskListTitle
  }
}

export default connect(mapStateToProps, { taskListTitleUpdate, taskListDelete, tasksLoad, taskCreate })(Tasks)