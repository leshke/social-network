import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, follow, unfollow, getUsers } from '../../redux/reducer-users';
import Users from './Users';
import { compose } from 'redux';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize)
        this.props.setCurrentPage(page)
    }

    render() {
        return <>
            <Users usersState={this.props.usersState}
                isFetching={this.props.isFetching}
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingProgress={this.props.followingProgress}
            />
        </>
    }
}

const MapStateToProps = (state) => {
    return {
        usersState: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    }
}

export default compose(connect(MapStateToProps, {
    setCurrentPage,
    follow,
    unfollow,
    getUsers
}),
)(UsersAPIContainer)