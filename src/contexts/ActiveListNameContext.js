import React, {useState} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const defaultActiveListName = 'list2'

export const ActiveListNameContext = React.createContext()

export default function ActiveListNameProvider({children}) {
  const [activeListName, setActiveListName] = useLocalStorage(
    'activeListName',
    defaultActiveListName,
  )
  return (
    <ActiveListNameContext.Provider value={[activeListName, setActiveListName]}>
      {children}
    </ActiveListNameContext.Provider>
  )
}
