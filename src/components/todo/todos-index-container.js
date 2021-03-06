import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listTodos } from '../../actions/todo-actions'
import './todos-index-container.css'
import Todo from './todo-container'
import TodoCreate from './todo-create-container'

class TodosIndex extends Component {
  componentDidMount() {
    this.props.listTodos({ token: this.props.auth.token })
  }

  render() {
    const todoKeys = Object.keys(this.props.todos).sort()
    return (
      <div className='todos-list'>
        <h1>Todos</h1>
        <p>...don't knock out your todo list, mock it out!</p>
        <TodoCreate />
        { todoKeys.map((id) => <Todo key={id} id={id} /> ) }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ todos: state.todos, auth: state.auth })
const mapDispatchToProps = (dispatch) => bindActionCreators({ listTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodosIndex)
