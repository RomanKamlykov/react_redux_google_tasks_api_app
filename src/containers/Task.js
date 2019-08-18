import { connect } from 'react-redux'
import { taskUpdateStatus, taskUpdate, taskDelete } from '../actions/tasksActions'

// my components
import Task from '../components/Task'

export default connect(null, { taskUpdateStatus, taskUpdate, taskDelete })(Task)