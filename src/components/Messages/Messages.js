import React from 'react';
import CurrentDialogContainer from './CurrentDialog/CurrentDialogContainer';
import DialogContainer from './Dialog/DialogContainer';
import s from './Messages.module.css'

const Messages = () => {
    return (
        <div className={s.dialogsWrapper}>
            <DialogContainer />
            <CurrentDialogContainer />
        </div>
    )
}

export default Messages;