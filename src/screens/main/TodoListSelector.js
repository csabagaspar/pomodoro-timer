import React, {useContext, useState} from 'react'
import {SelectionContext} from './SelectionContext'
import {ActiveContext} from './ActiveContext'
import {TodoListContext} from './TodoListContext'

export function TodoListSelector(props) {
  const [selection, setSelection] = useContext(SelectionContext)
  const [lists, setLists] = useContext(TodoListContext)

  const todoLists = Object.keys(lists)

  const submit = e => {
    e.preventDefault()
    const {name} = e.target.elements
    setLists(lists => ({
      ...lists,
      [name.value]: [],
    }))
  }

  return (
    <div>
      <div>
        <form onSubmit={submit}>
          <label htmlFor="name-id">Add to list</label>
          <input name="name" placeholder="Name of the list" id="name-id" />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        <select
          name="list"
          value={selection['list']}
          onChange={e =>
            setSelection(selection => ({
              list: e.target.value,
              item: '',
            }))
          }
        >
          {todoLists &&
            todoLists.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}
