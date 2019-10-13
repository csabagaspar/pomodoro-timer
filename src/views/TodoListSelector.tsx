import React, {useContext, useState} from 'react'
import {ListsContext} from '../contexts/ListsContext'
import {ActiveListContext} from '../contexts/ActiveListContext'
import {ActiveListNameContext} from '../contexts/ActiveListNameContext'

export function TodoListSelector(props) {
  const [lists, setLists] = useContext(ListsContext)
  const [activeList, setActiveList] = useContext(ActiveListContext)
  const [activeListName, setActiveListName] = useContext(ActiveListNameContext)

  const [todoListName, setTodoListName] = useState('')

  const todoLists = Object.keys(lists)

  const handleAdd = e => {
    e.preventDefault()
    if (!todoListName) return

    setLists(lists => ({
      ...lists,
      [todoListName.trim()]: [],
    }))
    setTodoListName('')
  }

  const handleChange = ({target: {value}}) => {
    setActiveListName(value)
    setActiveList(lists[value])
  }

  const handleRemove = e => {
    e.preventDefault()

    if (Object.keys(lists).length === 1) {
      alert('cannot remove last list')
      return
    }

    let {[activeListName]: omit, ...rest} = lists
    setLists(lists => rest)
    setActiveList(lists[Object.keys(rest)[0]])
    setActiveListName(Object.keys(rest)[0])
  }

  return (
    <div>
      <div>
        <form onSubmit={handleAdd}>
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
          <select name="list" value={activeListName} onChange={handleChange}>
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
