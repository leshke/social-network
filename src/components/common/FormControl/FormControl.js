import React from 'react';
import { Field } from 'react-final-form';
import s from './FormControl.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    const error = meta.error && meta.touched;
    return <div className={s.formControl}>
        <textarea {...input} {...props} />
        {error && <span>{meta.error}</span>}
    </div>
}

export const Input = ({ input, meta, ...props }) => {
    const error = meta.error && meta.touched;
    return <div className={s.formControl}>
        <input {...input} {...props} />
        {error && <span className={s.error}>{meta.error}</span>}
    </div>
}

export const CreateField = (labelText, fieldName, validate,
    renderComponent, initialValue,placeholder,type, ...props) => {
    return <div className={s.mainItem}>
        {labelText ? <label>{labelText}</label> : null}
        <Field name={fieldName} validate={validate}
            render={renderComponent} initialValue={initialValue} placeholder={placeholder} type={type} {...props} />
    </div>
}