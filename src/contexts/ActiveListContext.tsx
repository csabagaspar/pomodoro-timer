import React, {useState, useContext, useEffect} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

import {ActiveListNameContext} from './ActiveListNameContext'
import {ListsContext} from './ListsContext'

type StringKeyRecordType = Record<keyof any, any>[]
 type ListType =
    Record<keyof any, any | StringKeyRecordType >[]

type ActiveListType  = [
  ListType,
  (value: ListType |  ((prevState: ListType) => ListType)) => void
] | []


export const ActiveListContext = React.createContext<ActiveListType>([])


const ActiveListProvider: React.FC<{}> = ({children}) => {
  const [lists, setLists] = useContext(ListsContext)
  const [activeListName, setActiveListName] = useContext(ActiveListNameContext)

  const [activeList, setActiveList] = useState<ListType>(() => lists[activeListName])

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
export default ActiveListProvider
