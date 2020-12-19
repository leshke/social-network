import React from 'react';
import User from './User/User';
import PaginationContainer from './Pagination';
import Preloader from '../common/Preloader';
import s from './Users.module.css';
import SearchUser from './SearchUser';

const Users = React.memo((props) => {
    return <>
        <PaginationContainer totalUsers={props.totalUsers}
            pageSize={props.pageSize}
            onPageChange={props.onPageChange}
            currentPage={props.currentPage} />
        <div className={s.preloader}>
            {props.isFetching ? <Preloader /> : null}
        </div>
        <SearchUser totalUsers={props.totalUsers}
            pageSize={props.pageSize}
            getSearchUser={props.getSearchUser} />
        <User usersState={props.usersState}
            pageSize={props.pageSize}
            totalUsers={props.totalUsers}
            followingProgress={props.followingProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            getSearchUser={props.getSearchUser} />
    </>
})
export default Users;