import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'

const Dialog = (props) => {

    const dialogsElement = props.dialogsState
        .map((dialog, i) =>
            <NavLink to={"/message/" + dialog.id} key={i} activeClassName={s.selected}>
                {dialog.name}
            </NavLink>)

    return <div className={s.dialogs}>{dialogsElement}</div>
}

export default Dialog;