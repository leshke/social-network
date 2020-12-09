import React from 'react';
import s from '../Users.module.css';
import avatar from '../../../assets/img/avatar.png';
import { NavLink } from 'react-router-dom';

const User = React.memo((props) => {
    return <>
        {props.totalUsers ?
            <div className={s.totalUsers}>
                <span>Total users:</span>
                {props.totalUsers}
            </div> :
            <div className={s.totalUsers}>
                <span>All friends:</span>
                {props.totalFriends}
            </div>}

        <div className={s.usersWrapper}>
            {
                props.usersState.map((user) => {
                    return <div key={user.id} className={s.userContainer}>
                        <div className={s.avatarContainer}>
                            <NavLink to={'profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : avatar} alt="avatar" />
                            </NavLink>
                            <div className={s.description}>
                                <h5>{user.name}</h5>
                                <div className={s.status}>{user.status || 'no status :('}</div>
                            </div>
                        </div>
                        {
                            user.followed
                                ? <button className={s.unfollow} disabled={props.followingProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button>
                                : <button className={s.follow} disabled={props.followingProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                        }
                    </div>
                })
            }
        </div>
    </>
})
export default User;