import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';


const Todo = ({ todo: { complete, id }, todo, index, isLoading, onDel, onEdit/*, onClick */ }) => {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState('');

    const handleEnter = (event) => {
        const todo = { id, text }
        if (event.key === 'Enter') {
            onEdit(todo)
            setOpen(!open)
            toast.success('Edit success!')
        }
    }

    const handleEdit = () => {
        setOpen(true)
    }

    const handleDelete = () => {
        onDel(todo.id)
        toast.success('Delete success!')
    }

    return (
        <Fragment>
            {!isLoading &&
                <li>
                    <div className='first'
                        style={{ textDecoration: complete ? 'line-through' : '' }}

                    >
                        <input type='checkbox'
                            checked={complete}
                            // onClick={onClick}
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


export default Todo