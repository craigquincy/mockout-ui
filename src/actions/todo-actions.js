const TODOS_LISTED = 'TODOS_LISTED'
const TODO_DELETED = 'TODO_DELETED'
const TODO_UPDATED = 'TODO_UPDATED'

const listTodos = ({ token }) => {
  const url = `${process.env.REACT_APP_API_URL}/todo`

  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return (dispatch) => {
    fetch(url, opts)
      .then((result) => result.json())
      .then((result) => {
        dispatch({ type: TODOS_LISTED, payload: result })
      })
  }
}

const deleteTodo = ({ id, token }) => {
  const url = `${process.env.REACT_APP_API_URL}/todo/${id}`

  const opts = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return (dispatch) => {
    fetch(url, opts).then(dispatch({ type: TODO_DELETED, payload: id }))
  }
}

const updateTodo = ({ updatedItem, updatedId, token }) => {
  const url = `${process.env.REACT_APP_API_URL}/todo/${updatedId}`

  const opts = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ item: updatedItem })
  }

  return (dispatch) => {
    const payload = { updatedId, updatedItem }
    fetch(url, opts)
      .then(dispatch({ type: TODO_UPDATED, payload }))
  }
}

export {
  listTodos,
  deleteTodo,
  updateTodo,
  TODOS_LISTED,
  TODO_DELETED,
  TODO_UPDATED
}
