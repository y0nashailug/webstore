import { connect } from 'react-redux'
import Success from '../components/Success'

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
)(Success)