import React, {useContext} from 'react'
import 'react-sortable-tree/style.css'
import SortableTree, {
  changeNodeAtPath,
  addNodeUnderParent,
  removeNodeAtPath,
} from 'react-sortable-tree'
import {ItemContext} from './store'

export function TodoTree() {
  const [items, setItems] = useContext(ItemContext)

  const getNodeKey = ({treeIndex}) => treeIndex

  const update = (field, value, node, path) => {
    setItems(items => ({
      treeData: changeNodeAtPath({
        treeData: items.treeData,
        path,
        getNodeKey,
        newNode: {...node, [field]: value},
      }),
    }))
  }

  return (
    <SortableTree
      treeData={items.treeData}
      onChange={treeData => setItems({treeData})}
      generateNodeProps={({node, path}) => ({
        title: (
          <>
            <input
              style={{fontSize: '1.1rem'}}
              value={node.title}
              onChange={event => {
                const title = event.target.value
                setItems(items => ({
                  treeData: changeNodeAtPath({
                    treeData: items.treeData,
                    path,
                    getNodeKey,
                    newNode: {...node, title},
                  }),
                }))
              }}
            />
            <input
              style={{fontSize: '1.1rem'}}
              value={node.estimated}
              type="number"
              onChange={event => {
                const estimated = event.target.value
                setItems(items => ({
                  treeData: changeNodeAtPath({
                    treeData: items.treeData,
                    path,
                    getNodeKey,
                    newNode: {...node, estimated},
                  }),
                }))
              }}
            />
            <label style={{fontSize: '1.1rem'}}>{node.completed}</label>
            {!node.children && <label>"selectable"</label>}
          </>
        ),
        buttons: [
          <button
            onClick={() =>
              setItems(items => ({
                treeData: addNodeUnderParent({
                  treeData: items.treeData,
                  parentKey: path[path.length - 1],
                  expandParent: true,
                  getNodeKey,
                  newNode: {
                    title: `new`,
                    estimated: 0,
                  },
                  addAsFirstChild: items.addAsFirstChild,
                }).treeData,
              }))
            }
          >
            Add Child
          </button>,
          <button
            onClick={() =>
              setItems(items => ({
                treeData: removeNodeAtPath({
                  treeData: items.treeData,
                  path,
                  getNodeKey,
                }),
              }))
            }
          >
            Remove
          </button>,
        ],
      })}
    />
  )
}
