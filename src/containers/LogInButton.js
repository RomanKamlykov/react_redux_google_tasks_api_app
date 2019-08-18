import { connect } from 'react-redux'
import { sessionAuthorize, sessionLogout } from '../actions/sessionActions'

// my components
import LogInButton from '../components/LogInButton'

function mapStateToProps(state) {
  return {
    isLoggedIn: state.sessionReducer
  }
}

export default connect(mapStateToProps, { sessionAuthorize, sessionLogout })(LogInButton)