import React, { useState, useEffect, Fragment } from 'react';
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { toast } from 'react-toastify';



const Header = ({ onAdd, checkAll, isLoading }) => {

    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const todo = { text }
        if (!text) {
            toast.error('Missing input!')
        } else {
            onAdd(todo)
            setText('')
        }
    }

    const theme = useContext(ThemeContext)

    useEffect(() => {
        const body = document.getElementsByTagName("body");
        body[0].className = theme
    }, [theme])

    // useImperativeHandle(ref, () => ({
    //     setText
    // }))//nhan them setText lam chuc nang



    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {!isLoading ?
                <Fragment>
                    <code className={theme}>todos</code>
                    <div className="input-wrapper">
                        <input className="toggle-all" type="hidden" />
                        <label
                            htmlFor="toggle-all"
                            onClick={checkAll}
                        ></label>
                        <input className='new-todo'
                            style={{ background: theme === 'dark' ? '#FF7BA9' : '#fff' }}
                            name="text"
                            placeholder="What need to be done?"
                            value={text}
                            onChange={handleChange}
                            autoFocus
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    handleSubmit(event);
                                    toast.success('Add success!')
                                }
                            }}
                        />
                    </div>
                </Fragment>
                : <code className={theme}>Loading...</code>}
        </form>
    )

}

// export default Header
export default Header