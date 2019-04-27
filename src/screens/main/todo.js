import React, {useContext} from 'react'
import 'react-sortable-tree/style.css'
import SortableTree, {changeNodeAtPath} from 'react-sortable-tree'
import {ItemContext} from './store'

export function TodoTree() {
  const [items, setItems] = useContext(ItemContext)

  const getNodeKey = ({treeIndex}) => treeIndex

  return (
    <SortableTree
      treeData={items}
      onChange={items => setItems(items)}
      generateNodeProps={({node, path}) => ({
        title: (
          <>
            <input
              style={{fontSize: '1.1rem'}}
              value={node.title}
              onChange={event => {
                const title = event.target.value
                setItems(items =>
                  changeNodeAtPath({
                    treeData: items,
                    path,
                    getNodeKey,
                    newNode: {...node, title},
                  }),
                )
              }}
            />
            <input
              style={{fontSize: '1.1rem'}}
              value={node.estimated}
              type="number"
              onChange={event => {
                const estimated = event.target.value
                setItems(items =>
                  changeNodeAtPath({
                    treeData: items,
                    path,
                    getNodeKey,
                    newNode: {...node, estimated},
                  }),
                )
              }}
            />
            <label style={{fontSize: '1.1rem'}}>{node.completed}</label>
          </>
        ),
      })}
    />
  )
}
