import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withRedirect';
import { unfollow, setCurrentPage } from '../../redux/reducer-users';
import { getFriends } from '../../redux/reducer-friends';
import Friends from './Friends';

const MyFriendsContainer = React.memo((props) => {
    useEffect(() => {
        props.getFriends(props.currentPage, props.pageSize)
    }, [])

    const onPageChange = (page) => {
        props.getFriends(page, props.pageSize)
        props.setCurrentPage(page)
    }

    return <Friends onPageChange={onPageChange} {...props} />
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
}),
    withAuthRedirect
)(MyFriendsContainer)