import React, {useState, useContext, useEffect} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

import {ActiveListNameContext} from './ActiveListNameContext'
import {ListsContext} from './ListsContext'

export const ActiveListContext = React.createContext()

export default function ActiveListProvider({children}) {
  const [lists, setLists] = useContext(ListsContext)
  const [activeListName, setActiveListName] = useContext(ActiveListNameContext)

  const [activeList, setActiveList] = useState(() => lists[activeListName])

  useEffect(() => {
    setLists({
      ...lists,
      [activeListName]: [...activeList],
    })
  }, [activeList])

  return (
    <ActiveListContext.Provider value={[activeList, setActiveList]}>
      {children}
    </ActiveListContext.Provider>
  )
}
