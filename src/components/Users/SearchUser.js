import React, { useState } from 'react';
import s from './Users.module.css';

const SearchUser = React.memo(({ getSearchUser, pageSize, totalUsers }) => {
    const [value, onChange] = useState('')
    const [result, setResult] = useState('')

    const handlerOnChange = (e) => {
        onChange(e.currentTarget.value)
    }

    const onSubmit = () => {
        getSearchUser((value.trim()), pageSize)
        setResult(value)
    }

    return <div className={s.searchWrapper}>
        <form className={s.searchForm}>
            <label>Search user</label>
            <input value={value} onChange={handlerOnChange}></input>
            <button onClick={onSubmit}>search</button>
        </form>
        {result ? <span>Matches found : {totalUsers}</span> : ''}
    </div>
})
export default SearchUser;