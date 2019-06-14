import React, {useContext, useState, useEffect} from 'react'
import {SelectionContext} from '../contexts/SelectionContext'
import {TodoListContext} from '../contexts/TodoListContext'

export function TodoListSelector(props) {
  const [selection, setSelection] = useContext(SelectionContext)
  const [lists, setLists] = useContext(TodoListContext)
  const [active, setActive] = useContext(TodoListContext)
  const [todoListName, setTodoListName] = useState('')

  const todoLists = Object.keys(lists)

  const submit = e => {
    e.preventDefault()
    if (!todoListName) return

    setLists(lists => ({
      ...lists,
      [todoListName.trim()]: [],
    }))
    setTodoListName('')
  }

  const handleRemove = e => {
    e.preventDefault()
    if (Object.keys(lists).length === 1) {
      alert('cannot remove last list')
      return
    }

    setLists(lists => {
      let {[selection['list']]: omit, ...rest} = lists
      return rest
    })
    setSelection(selection => ({
      list: Object.keys(lists)[0],
      item: '',
    }))
  }

  return (
    <div>
      <div>
        <form onSubmit={submit}>
          <label htmlFor="name-id">Add new list</label>
          <input
            name="name"
            value={todoListName}
            onChange={e => setTodoListName(e.target.value)}
            placeholder="Name of the list"
            id="name-id"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleRemove}>
          <label htmlFor="name-id">Remove a list</label>
          <select
            name="list"
            value={selection['list']}
            onChange={e => {
              const listName = e.target.value

              setSelection(selection => ({
                list: listName,
                item: '',
              }))
            }}
          >
            {todoLists &&
              todoLists.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
          <button type="submit">Remove</button>
        </form>
      </div>
    </div>
  )
}
