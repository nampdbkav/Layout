
import React, { Fragment, useContext } from "react";
import { setShow } from "../actions/actions";
import Link from "./Link";
import { ThemeContext } from './ThemeContext'

const Footer = ({ countActive, isLoading, removeComplete, removeCompleted }) => {
    const theme = useContext(ThemeContext)
    return (
        <Fragment>
            {isLoading === false &&
                <div className='footer'>
                    <div className={theme}>
                        {countActive}
                        <span>: items left</span>
                    </div>
                    <div >
                        <Link filter={setShow.SHOW_ALL}>All</Link>
                        <Link filter={setShow.SHOW_ACTIVE}>Active</Link>
                        <Link filter={setShow.SHOW_COMPLETED}>Complete</Link>
                        {removeCompleted ? (
                            <button className='btn-edit' onClick={removeComplete}>{' '}
                                ClearComplete
                            </button>
                        ) : null}
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Footer