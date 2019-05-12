import React, {useState} from 'react'

const defaultItems = {
  treeData: [
    {
      title: 'todo 1',
      estimated: 3,
      completed: 0,
    },
    {
      title: 'todo 2',
      estimated: 2,
      completed: 1,
      expanded: true,
      children: [
        {
          title: 'todo 2.1',
          estimated: 4,
          completed: 0,
        },
      ],
    },
  ],
  addAsFirstChild: false,
}

export const ItemContext = React.createContext()

export default function Store({children}) {
  const [items, setItems] = useState(defaultItems)
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {children}
    </ItemContext.Provider>
  )
}
