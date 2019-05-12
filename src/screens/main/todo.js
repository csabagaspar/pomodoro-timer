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
    setItems(items =>
      changeNodeAtPath({
        treeData: items,
        path,
        getNodeKey,
        newNode: {...node, [field]: value},
      }),
    )
  }

  return (
    <>
      <button
        onClick={() =>
          setItems(items => [
            ...items,
            {
              title: `new title`,
              subtitle: 'new subtitle',
              estimated: 0,
              completed: 0,
            },
          ])
        }
      >
        Add
      </button>
      <SortableTree
        treeData={items}
        onChange={treeData => setItems(treeData)}
        generateNodeProps={({node, path}) => ({
          title: (
            <>
              <input
                value={node.title}
                onChange={event =>
                  update('title', event.target.value, node, path)
                }
              />
              <input
                value={node.estimated}
                type="number"
                onChange={event =>
                  update('estimated', event.target.value, node, path)
                }
              />
              <label>{node.completed}</label>
              {!node.children && <label>"selectable"</label>}
            </>
          ),
          subtitle: (
            <input
              value={node.subtitle}
              onChange={event =>
                update('subtitle', event.target.value, node, path)
              }
            />
          ),
          buttons: [
            <button
              onClick={() =>
                setItems(
                  items =>
                    addNodeUnderParent({
                      treeData: items,
                      parentKey: path[path.length - 1],
                      expandParent: true,
                      getNodeKey,
                      newNode: {
                        title: `new`,
                        estimated: 0,
                      },
                    }).treeData,
                )
              }
            >
              Add Child
            </button>,
            <button
              onClick={() =>
                setItems(items =>
                  removeNodeAtPath({
                    treeData: items,
                    path,
                    getNodeKey,
                  }),
                )
              }
            >
              Remove
            </button>,
          ],
        })}
      />
    </>
  )
}
