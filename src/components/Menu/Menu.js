import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Menu = () => {
  return (
    <aside className={s.menu}>
      <NavLink to="/profile" activeClassName={s.selected}>
        <span data-tooltip="Profile">
          <AccountCircleIcon />
        </span>
      </NavLink>
      <NavLink to="/users" activeClassName={s.selected}>
        <span data-tooltip="Users">
          <PersonAddIcon />
        </span>
      </NavLink>
      <NavLink to="/friends" activeClassName={s.selected}>
        <span data-tooltip="Friends">
          <GroupIcon />
        </span>
      </NavLink>
      <NavLink to="/message" activeClassName={s.selected}>
        <span data-tooltip="Messages">
          <MailOutlineIcon />
        </span>
      </NavLink>
    </aside>
  )
}

export default Menu;