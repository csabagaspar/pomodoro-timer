import React, {useContext, useState} from 'react'
import {SelectionContext} from './SelectionContext'
import {TodoListContext} from './TodoListContext'

export function TodoListSelector(props) {
  const [selection, setSelection] = useContext(SelectionContext)
  const [items, setItems, lists, setLists] = useContext(TodoListContext)
  const todoLists = Object.keys(lists)
  return (
    <div>
      <div>
        <label>Add to list</label>
        <input placeholder="Name of the list" />
        <button>Add</button>
      </div>
      <div>
        <select
          name="list"
          value={selection['list']}
          onChange={e =>
            setSelection(selection => ({
              ...selection,
              list: e.target.value,
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
