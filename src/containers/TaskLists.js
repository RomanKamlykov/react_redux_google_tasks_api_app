import { connect } from 'react-redux'
import { taskListsLoad, taskListCreate } from '../actions/taskListsActions'

// my components
import TaskLists from '../components/TaskLists'

function mapStateToProps(state) {
  return {
    taskLists: state.taskListsReducer
  }
}

export default connect(mapStateToProps, { taskListsLoad, taskListCreate })(TaskLists)