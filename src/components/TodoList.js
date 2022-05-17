import React, { useEffect, useState } from 'react';
import { useContext } from 'react'

//Components
import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';
import { ThemeContext } from './ThemeContext'
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import Scroll from './Scroll';
import axios from "axios";
import { toast } from 'react-toastify';



const filterItem = (items, filter) => {
    switch (filter) {
        case actions.setShow.SHOW_ALL:
            return items
        case actions.setShow.SHOW_ACTIVE:
            return items.filter(t => !t.complete)
        case actions.setShow.SHOW_COMPLETED:
            return items.filter(t => t.complete)
        default:
            return items
    }
}

const TodoList = ({ page, todo, toggle, onDeleteTodo, toggleAllTodo, removeComplete, fetchAllTodo, onGetTodo }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])


    useEffect(() => {
        setTimeout(() => {
            fetchAllTodo()
            setIsLoading(false)
        }, 1500)
    }, [])

    useEffect(() => {
        const types = {
            id: 'id'
        }
        const sorted = [...todo].sort((a, b) => b[types.id] - a[types.id])
        console.log('...', sorted);
        setData(sorted)
    }, [todo])

    const theme = useContext(ThemeContext)

    let removeCompleted = [...todo].some((todo) => todo.complete)
    let countActive = [...todo].filter((todo) => !todo.complete).length


    return (
        <div className={theme}>
            <Header
                checkAll={toggleAllTodo}
                isLoading={isLoading}
            />

            <section className='main'>
                <ul className='todo-list'>
                    {data.slice(0, page * 3).map((todo, index) => (
                        <Todo
                            key={todo.id}
                            onClick={() => toggle(todo.id)}
                            onGet={() => onGetTodo(todo.id)}
                            onDel={() => { onDeleteTodo(todo.id); toast.success('Delete success!') }}
                            index={index}
                            todo={todo}
                            isLoading={isLoading}
                        />
                    ))}
                </ul>
            </section>

            <Footer
                countActive={countActive}
                removeCompleted={removeCompleted}
                removeComplete={removeComplete}
                isLoading={isLoading}
            />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchAllTodo: () => {
        dispatch(actions.actFetchTodoRequest())
    },
    onDeleteTodo: (id) => {
        dispatch(actions.actDelTodoRequest(id))
    },
    onGetTodo: (id) => {
        dispatch(actions.actGetTodoRequest(id))
    }
})



export default Scroll(connect(mapStateToProps, mapDispatchToProps)(TodoList))