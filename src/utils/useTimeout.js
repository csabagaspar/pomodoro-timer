import {useContext} from 'react'
import {ActiveContext} from '../contexts/ActiveContext'
import {SelectionContext} from '../contexts/SelectionContext'

import {find, changeNodeAtPath} from 'react-sortable-tree'
export function useTimeout() {
  const [selection, setSelection] = useContext(SelectionContext)
  const [activeList, setActiveList] = useContext(ActiveContext)

  const getNodeKey = ({node}) => node.id

  function update() {
    const selectedItem = selection.item
    const result = find({
      getNodeKey: getNodeKey,
      treeData: activeList,
      searchMethod: item => item.node.id === selectedItem,
    })
    const matches = result.matches[0]

    const modifiedTreeData = changeNodeAtPath({
      treeData: activeList,
      path: matches.path,
      getNodeKey,
      newNode: {...matches.node, completed: matches.node.completed + 1},
    })

    setActiveList(activeList => [...modifiedTreeData])
  }

  return {update}
}
