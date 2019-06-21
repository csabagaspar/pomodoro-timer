import React, {useState} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const defaultActiveListItemId = 4

export const ActiveListItemIdContext = React.createContext()

export default function ActiveListItemIdProvider({children}) {
  const [activeListItemId, setActiveListItemId] = useLocalStorage(
    'activeListItemId',
    defaultActiveListItemId,
  )
  return (
    <ActiveListItemIdContext.Provider
      value={[activeListItemId, setActiveListItemId]}
    >
      {children}
    </ActiveListItemIdContext.Provider>
  )
}
