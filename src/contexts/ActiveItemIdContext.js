import React, {useState} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const defaultActiveItemId = 4

export const ActiveItemIdContext = React.createContext()

export default function ActiveItemIdProvider({children}) {
  const [activeItemId, setActiveItemId] = useLocalStorage(
    'activeItemId',
    defaultActiveItemId,
  )
  return (
    <ActiveItemIdContext.Provider value={[activeItemId, setActiveItemId]}>
      {children}
    </ActiveItemIdContext.Provider>
  )
}
