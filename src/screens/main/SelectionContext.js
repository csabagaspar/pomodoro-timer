import React, {useState} from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const defaultSelection = {
  list: 'list2',
  item: 4,
}

export const SelectionContext = React.createContext()

export default function SelectionProvider({children}) {
  const [selection, setSelection] = useLocalStorage(
    'selection',
    defaultSelection,
  )
  return (
    <SelectionContext.Provider value={[selection, setSelection]}>
      {children}
    </SelectionContext.Provider>
  )
}
