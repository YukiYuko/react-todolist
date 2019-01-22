import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/actionCreators'
import Link from '../components/Link'

const mapStateToProps = (state) => ({
    active: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (filter) => dispatch(setVisibilityFilter(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
