import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, follow, unfollow, getUsers,getSearchUser } from '../../redux/reducer-users';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withRedirect';

const UsersAPIContainer = ({ getUsers, currentPage, pageSize, ...props }) => {
    useEffect(() => {
        getUsers(currentPage, pageSize)
    }, [getUsers, currentPage, pageSize])

    const onPageChange = (page) => {
        getUsers(page, pageSize)
        props.setCurrentPage(page)
    }

    return <Users
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        {...props}
    />
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
    getUsers,
    getSearchUser
}),
    withAuthRedirect
)(UsersAPIContainer)