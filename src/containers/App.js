import { connect } from 'react-redux'

// my components
import App from '../components/App'

function mapStateToProps(state) {
  return {
    isLoggedIn: state.sessionReducer
  }
}

export default connect(mapStateToProps)(App)