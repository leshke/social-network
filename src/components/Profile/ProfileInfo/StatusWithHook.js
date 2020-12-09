import React, { useState, useEffect } from 'react'
import s from './ProfileInfo.module.css'
import EditIcon from '@material-ui/icons/Edit';
import PublishIcon from '@material-ui/icons/Publish';

const ProfileStatus = React.memo((props) => {

    let [editMode, toggleEditMode] = useState(false)
    let [status, changeStatus] = useState(props.status)

    useEffect(() => {
        changeStatus(props.status)
    }, [props.status])

    const onToggleEditMode = () => {
        if (!editMode) {
            toggleEditMode(true)
        }
        else {
            toggleEditMode(false)
        }
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
        changeStatus(e.currentTarget.value)
    }

    return <div className={s.wrapper}>
        {
            !editMode ?
                <p >{props.status || 'no status :('}</p> :
                <input onChange={onChangeStatus} autoFocus={true} value={status || ''}></input>
        }
        <div className={s.headerContainer}>
            {!props.isOwner && !editMode ?
                <button onClick={onToggleEditMode}>
                    <span data-tooltip="Edit"><EditIcon fontSize='small' htmlColor="#66bfff" /></span>
                </button> : null}
            {!props.isOwner && editMode ?
                <button onClick={onToggleEditMode}>
                    <span data-tooltip="Save"><PublishIcon fontSize='small' htmlColor="#66bfff" /></span>
                </button> : null}
        </div>
    </div>
})

export default ProfileStatus