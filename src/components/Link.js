import React from 'react'
import { connect } from 'react-redux'
import { setFilterShow } from '../actions/actions'


const Link = ({ active, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={active}
        >
            {children}
        </button>
    )

}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.setShowTodo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilterShow(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
