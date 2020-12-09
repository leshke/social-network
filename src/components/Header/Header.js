import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import noPhoto from "../../assets/img/avatar.png"


const Header = ({ avatar, login, logout, isAuth }) => {
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
                    <button className={s.logout} onClick={logout}><PowerSettingsNewIcon /></button> :
                    <NavLink to="/login">
                        <button className={s.login}><ExitToAppIcon /></button>
                    </NavLink>}
            </div>
        </header >
    )
}

export default Header;