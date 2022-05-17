import React, { Fragment, useState } from 'react';
import { actEditTodo } from '../actions/actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import apiCaller from '../utils/apiCaller';

const Todo = ({ todo: { complete, id }, todo, onClick, onDel, index, onUpdateTodo, onGet, isLoading }) => {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState('');

    const handleEnter = (event) => {
        const todo = { id, text }
        if (event.key === 'Enter') {
            apiCaller(`todos/${todo.id}`, 'PUT', todo)
                .then(res => {
                    onUpdateTodo(res.data)
                })
            setOpen(!open)
            toast.success('Edit success!')
        }
    }

    const handleEdit = () => {
        setOpen(true)
        onGet(todo.id)
    }

    const handleDelete = () => {
        onDel(todo.id)
        toast.success('Delete success!')
    }

    return (
        <Fragment>
            {isLoading === false &&
                <li>
                    <div className='first'
                        style={{ textDecoration: complete ? 'line-through' : '' }}

                    >
                        <input type='checkbox'
                            checked={complete}
                            onClick={onClick}
                            onChange={() => { }}
                        />
                        <div className='double'>
                            {open ? (
                                <input className='input-edit'
                                    defaultValue={todo.text}
                                    onKeyDown={handleEnter}
                                    type='text'
                                    autoFocus
                                    onChange={(e) => {
                                        console.log('edit');
                                        setText(e.target.value);
                                    }}
                                />
                            ) : ((index + 1) + ' : ' + todo.text)}
                        </div>
                    </div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>

                </li >
            }
        </Fragment>

    )

}

const mapDispatchToProps = (dispatch) => ({
    onUpdateTodo: (todo) => {
        dispatch(actEditTodo(todo))
    },
})

export default connect(null, mapDispatchToProps)(Todo)