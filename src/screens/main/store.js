import React, {useState} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const defaultItems = [
  {
    title: 'todo 1',
    subtitle: 'subtitle',
    estimated: 3,
    completed: 0,
  },
  {
    title: 'todo 2',
    subtitle: 'subtitle',
    estimated: 2,
    completed: 1,
    expanded: true,
    children: [
      {
        title: 'todo 2.1',
        subtitle: 'subtitle',
        estimated: 4,
        completed: 0,
      },
    ],
  },
]

export const ItemContext = React.createContext()

export default function Store({children}) {
  const [items, setItems] = useLocalStorage('todo-items', defaultItems)
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {children}
    </ItemContext.Provider>
  )
}
