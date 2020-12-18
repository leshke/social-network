import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import noPhoto from "../../assets/img/avatar.png"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getProfileAvatar } from '../../redux/reducer-profile';
import { logout } from '../../redux/reducer-auth';

const Header = React.memo(() => {
    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.auth.isAuth, shallowEqual)
    const login = useSelector(state => state.auth.login, shallowEqual)
    const avatar = useSelector(state => state.profilePage.avatar, shallowEqual)
    const isOwner = useSelector(state => state.auth.id, shallowEqual)

    if (isAuth) dispatch(getProfileAvatar(isOwner))

    const onLogout = useCallback(() => dispatch(logout()), [dispatch])

    return (
        <header className={s.header}>
            <div className={s.authInfo}>
                {isAuth ? <NavLink to="/profile">
                    <img src={avatar || noPhoto} alt="logo" />
                    <span>{login}</span>
                </NavLink> : null}
            </div>
            <div className={s.login}>
                {isAuth ?
                    <button className={s.logout} onClick={onLogout}><PowerSettingsNewIcon /></button> :
                    <NavLink to="/login">
                        <button className={s.login}><ExitToAppIcon /></button>
                    </NavLink>}
            </div>
        </header >
    )
})

export default Header;