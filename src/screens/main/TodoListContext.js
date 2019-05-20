import React, {useState, useContext, useEffect} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import {SelectionContext} from './SelectionContext'

const defaultTodoLists = {
  list1: [
    {
      title: 'todo1',
      subtitle: 'subtitle',
      estimated: 3,
      completed: 0,
    },
    {
      title: 'todo2',
      subtitle: 'subtitle',
      estimated: 2,
      completed: 1,
      expanded: true,
      children: [
        {
          title: 'todo2.1',
          subtitle: 'subtitle',
          estimated: 4,
          completed: 0,
        },
      ],
    },
  ],
  list2: [
    {
      title: 'todo1',
      subtitle: 'subtitle',
      estimated: 4,
      completed: 0,
    },
  ],
}

export const TodoListContext = React.createContext()

export default function TodoListProvider({children}) {
  const [lists, setLists] = useLocalStorage('todo-lists', defaultTodoLists)

  return (
    <TodoListContext.Provider value={[lists, setLists]}>
      {children}
    </TodoListContext.Provider>
  )
}
