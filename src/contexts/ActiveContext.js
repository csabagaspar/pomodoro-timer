import React, {useState, useContext, useEffect} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

import {SelectionContext} from './SelectionContext'
import {TodoListContext} from './TodoListContext'

export const ActiveContext = React.createContext()

export default function ActiveProvider({children}) {
  const [lists, setLists] = useContext(TodoListContext)
  const [selection, setSelection] = useContext(SelectionContext)
  const [activeItems, setActiveItems] = useState(() => lists[selection.list])

  useEffect(() => {
    console.log('activeItems', activeItems)
    setLists({
      //TODO merge professinal
      ...lists,
      [selection.list]: [...activeItems],
    })
  }, [activeItems])

  useEffect(() => {
    console.log('selection changed')
    setActiveItems(items => [...lists[selection.list]])
  }, [selection.list, selection.item])

  return (
    <ActiveContext.Provider value={[activeItems, setActiveItems]}>
      {children}
    </ActiveContext.Provider>
  )
}
