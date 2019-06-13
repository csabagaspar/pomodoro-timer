import {useContext} from 'react'
import {TodoListContext} from '../contexts/TodoListContext'
import {SelectionContext} from '../contexts/SelectionContext'

import SortableTree, {find} from 'react-sortable-tree'
export function useTimeout() {
  const [selection, setSelection] = useContext(SelectionContext)
  const [lists, setLists] = useContext(TodoListContext)

  const getNodeKey = ({node}) => node.id
  const callback = () => {
    console.log('callback')
  }
  function update() {
    console.log('update')

    const treeData = lists[selection['list']]
    const selectedItem = selection.item
    const result = find({
      getNodeKey: getNodeKey,
      treeData: treeData,
      searchMethod: item => item.node.id === selectedItem,
    })

    setLists(lists => ({
      ...lists,
      //[selection['list']]: lists['list'] //TODO
    }))
  }

  return {update}
}
