import React from 'react'
import { Field, Form } from 'react-final-form';
import s from './CurrentDialog.module.css'
import avatar from '../../../assets/img/avatar.png'

const AddNewMessageForm = (props) => {
    const onSubmit = (values, form) => {
        props.sendMessage(values.message);
        setTimeout(() => {
            form.reset();
        }, 200);
    };

    return <Form onSubmit={onSubmit} render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
            <div className={s.messageBox}>
                <Field name="message" component="textarea" placeholder="Write your message..." />
            </div>
            <button disabled={submitting || pristine}>Send</button>
        </form>
    )}
    />
}

const CurrentDialog = (props) => {
    const messagesElements = props.messageState.messages
        .map((message, i) => <div className={s.message} key={i}>
            <img src={props.avatarImg || avatar} alt='ava' />
            <span>{message.name}</span>
        </div>)

    return <div className={s.messages}>
        <div className={s.messageWrapper}>
            {messagesElements}
        </div>
        <div className={s.messageWrapperForm}>
            <AddNewMessageForm sendMessage={props.sendMessage} />
        </div>
    </div>
}

export default CurrentDialog;