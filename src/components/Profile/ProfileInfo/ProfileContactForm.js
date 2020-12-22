import React, { useEffect, useState } from 'react'
import s from './ProfileInfo.module.css'
import { Form } from 'react-final-form'
import { CreateField, Input, Textarea } from '../../common/FormControl/FormControl'

const ProfileContactForm = ({ userProfile, toggleEditMode, saveProfileInfo, inputError }) => {
    const [errors, setError] = useState(inputError)

    useEffect(() => {
        setError(inputError)
        return () => errors.length = 0
    }, [inputError, errors])

    const onSubmit = (values) => {
        saveProfileInfo(values).then(
            () => {
                toggleEditMode(false)
            }
        )
    }

    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
                <div className={s.formWrapper}>
                    <div className={s.mainInfoWrapper}>
                        <h3>Main information:</h3>
                        {CreateField('Enter your full name', 'fullName', null, Input, userProfile.fullName)}
                        {CreateField('Write about yourself', 'aboutMe', null, Textarea, userProfile.aboutMe)}
                        {CreateField('Do you looking for a job?', 'lookingForAJob', null, Input, userProfile.lookingForAJob, null, "checkbox")}
                        {CreateField('Job description', 'lookingForAJobDescription', null, Textarea, userProfile.lookingForAJobDescription)}
                    </div>
                    <div className={s.contactInfoWrapper}>
                        <h3>Contacts:</h3>
                        {
                            Object.keys(userProfile.contacts).map(link => <div className={s.contactsItem} key={link}>
                                {CreateField(link, 'contacts.' + link, null, Input, userProfile.contacts[link], 'url')}
                            </div>)
                        }
                    </div>
                </div>
                <button disabled={submitting || pristine}>Submit</button>
                {errors.length ? <span className={s.errors}>{errors}</span> : null}
            </form >
        )}
    />
}

export default ProfileContactForm