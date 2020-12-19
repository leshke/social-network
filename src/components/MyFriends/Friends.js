import React from 'react';
import Preloader from '../common/Preloader';
import PaginationContainer from '../Users/Pagination';
import User from '../Users/User/User';
import s from '../Users/Users.module.css'

const Friends = React.memo((props) => {
    return <>
        <PaginationContainer totalUsers={props.totalFriends}
            pageSize={props.pageSize}
            onPageChange={props.onPageChange}
            currentPage={props.currentPage} />
        <div className={s.preloader}>
            {
                props.isFetching ? <Preloader /> : null
            }
        </div>
        <User usersState={props.friends}
            followingProgress={props.followingProgress}
            unfollow={props.unfollow}
            totalFriends={props.totalFriends}
            getSearchUser={props.getSearchUser} />
    </>
})

export default Friends