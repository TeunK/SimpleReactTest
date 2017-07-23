import { connect } from 'react-redux'
import UsersField from './UserPanelComponent'
import { fetchUsers } from './userPanelActions';

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