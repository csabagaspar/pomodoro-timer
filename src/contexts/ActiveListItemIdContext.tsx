import React, {useState} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const defaultActiveListItemId = 4


type ActiveListItemType = [
  number,
  (value: number) => void
] |[]
export const ActiveListItemIdContext = React.createContext<ActiveListItemType>([])

const ActiveListItemIdProvider: React.FC<{}> = ({children}) => {
  const [activeListItemId, setActiveListItemId] = useLocalStorage<number>(
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
export default ActiveListItemIdProvider
