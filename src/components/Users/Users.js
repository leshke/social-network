import React from 'react';
import User from './User/User';
import PaginationContainer from './Pagination';
import Preloader from '../common/Preloader';
import s from './Users.module.css';

const Users = (props) => {
    return <>
        <PaginationContainer totalUsers={props.totalUsers}
            pageSize={props.pageSize}
            onPageChange={props.onPageChange}
            currentPage={props.currentPage} />

        <div className={s.preloader}>
            {props.isFetching ? <Preloader /> : null}
        </div>

        <User usersState={props.usersState}
            totalUsers={props.totalUsers}
            followingProgress={props.followingProgress}
            follow={props.follow}
            unfollow={props.unfollow} />
    </>
}
export default Users;