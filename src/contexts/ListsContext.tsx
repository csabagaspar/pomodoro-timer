import React from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const defaultLists = {
  list1: [
    {
      id: 1,
      title: 'todo1',
      subtitle: 'subtitle',
      estimated: 3,
      completed: 0,
    },
    {
      id: 2,
      title: 'todo2',
      subtitle: 'subtitle',
      estimated: 2,
      completed: 1,
      expanded: true,
      children: [
        {
          id: 3,
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
      id: 4,
      title: 'todo1',
      subtitle: 'subtitle',
      estimated: 4,
      completed: 0,
    },
  ],
}
type StringKeyRecordType = Record<keyof any, any>[]
 type ListType =
    Record<keyof any, any | StringKeyRecordType >[]

type ListsType =  Record<keyof any, ListType>

type ListsContextType = [
  ListsType,
  React.Dispatch<React.SetStateAction<ListsType>>
] | []


export const ListsContext = React.createContext<ListsContextType>([])

const ListsProvider: React.FC<{}> = ({children}) => {
  const [lists, setLists] = useLocalStorage<ListsType>('items', defaultLists)

  return (
    <ListsContext.Provider value={[lists, setLists]}>
      {children}
    </ListsContext.Provider>
  )
}
export default ListsProvider
