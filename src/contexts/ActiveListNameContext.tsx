import React, {useState} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const defaultActiveListName = 'list2'
type ActiveListNameType = [
  string | null,
  (value: string) => void
] |[]

export const ActiveListNameContext = React.createContext<
  ActiveListNameType
  >([])

const ActiveListNameProvider: React.FC<{}> = ({children}) => {

  const [activeListName, setActiveListName] = useLocalStorage(
    'activeListName',
    defaultActiveListName,
  )
  console.log('activeListName',activeListName, setActiveListName)

  return (
    <ActiveListNameContext.Provider value={[activeListName, setActiveListName]}>
      {children}
    </ActiveListNameContext.Provider>
  )
}
export default ActiveListNameProvider
