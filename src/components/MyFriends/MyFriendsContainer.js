import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withRedirect';
import { unfollow, setCurrentPage, getSearchUser } from '../../redux/reducer-users';
import { getFriends } from '../../redux/reducer-friends';
import Friends from './Friends';

const MyFriendsContainer = React.memo(({ currentPage, pageSize, getFriends, ...props }) => {
    useEffect(() => {
        getFriends(currentPage, pageSize)
    }, [getFriends, pageSize, currentPage])

    const onPageChange = (page) => {
        getFriends(page, pageSize)
        props.setCurrentPage(page)
    }

    return <Friends onPageChange={onPageChange}
        currentPage={currentPage}
        pageSize={pageSize}
        {...props} />
})

const mapStateToProps = (state) => {
    return ({
        totalFriends: state.friendsPage.totalFriends,
        friends: state.friendsPage.friends,
        followingProgress: state.usersPage.followingProgress,
        pageSize: state.usersPage.pageSize,
        currentPage: state.friendsPage.currentPageFriends,
    })
}

export default compose(connect(mapStateToProps, {
    getFriends,
    unfollow,
    setCurrentPage,
    getSearchUser
}),
    withAuthRedirect
)(MyFriendsContainer)