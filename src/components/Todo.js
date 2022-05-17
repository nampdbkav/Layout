import React, { useState } from 'react';
import { actComplteTodoRequest, actEditTodoRequest } from '../actions/actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

const Todo = ({ todo: { complete, id }, todo, onClick, onDel, index, onUpdateTodo, onGet, isLoading }) => {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState('');

    const handleEnter = (event) => {
        const todo = { id, text }
        if (event.key === 'Enter') {
            onUpdateTodo(todo)
            setOpen(!open)
            toast.success('Edit success!')
        }
    }

    const handleEdit = () => {
        setOpen(true)
        onGet()
    }

    const handleMouseOver = () => {
        setOpen(false)
    }

    return (
        <li
            onMouseOver={handleMouseOver}
        >
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
            <button onClick={onDel}>Delete</button>

        </li >

    )

}

const mapDispatchToProps = (dispatch) => ({
    onUpdateTodo: (todo) => {
        dispatch(actEditTodoRequest(todo))
    },
    onCompleteTodo: (todo) => {
        dispatch(actComplteTodoRequest(todo))
    }
})

export default connect(null, mapDispatchToProps)(Todo)