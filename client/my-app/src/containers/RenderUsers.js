import { connect } from 'react-redux'
import UsersField from '../components/UsersField'
import { fetchUsers } from '../actions';

const mapStateToProps = state => {
    return {
        users: state.usersApp.users
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        }
    }
};

const RenderUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersField);

export default RenderUsers;