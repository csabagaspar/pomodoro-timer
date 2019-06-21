import {useContext} from 'react'
import {ActiveListContext} from '../contexts/ActiveListContext'
import {ActiveItemIdContext} from '../contexts/ActiveItemIdContext'

import {find, changeNodeAtPath} from 'react-sortable-tree'

export function useTimeout() {
  const [activeItemId, setActiveItemId] = useContext(ActiveItemIdContext)
  const [activeList, setActiveList] = useContext(ActiveListContext)

  const getNodeKey = ({node}) => node.id

  function update() {
    const selectedItem = activeItemId
    if (!selectedItem) return

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
