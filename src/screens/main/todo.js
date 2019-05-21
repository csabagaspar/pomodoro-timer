import React, {useContext} from 'react'
import 'react-sortable-tree/style.css'
import SortableTree, {
  changeNodeAtPath,
  addNodeUnderParent,
  removeNodeAtPath,
} from 'react-sortable-tree'
import {ActiveContext} from './ActiveContext'
import {SelectionContext} from './SelectionContext'

export function TodoTree() {
  const [items, setItems] = useContext(ActiveContext)
  const [selection, setSelection] = useContext(SelectionContext)

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
        style={{
          height: '50rem',
        }}
        treeData={items}
        onChange={treeData => setItems(treeData)}
        generateNodeProps={({node, path}) => ({
          title: (
            <>
              <input
                style={{}}
                value={node.title}
                onChange={event =>
                  update('title', event.target.value, node, path)
                }
              />
              <input
                style={{
                  width: '40px',
                }}
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
              style={{}}
              value={node.subtitle}
              onChange={event =>
                update('subtitle', event.target.value, node, path)
              }
            />
          ),
          buttons: [
            <button
              onClick={() => {
                console.log(path, getNodeKey)
                setItems(
                  items =>
                    addNodeUnderParent({
                      treeData: items,
                      parentKey: path[path.length - 1],
                      expandParent: true,
                      getNodeKey,
                      newNode: {
                        title: `new title`,
                        subtitle: `new subtitle`,
                        estimated: 0,
                        completed: 0,
                      },
                    }).treeData,
                )
              }}
            >
              Add
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
              X
            </button>,
            <input
              type="radio"
              readOnly
              checked={node.title === selection.item}
              onClick={() => {
                setSelection(selection => ({
                  ...selection,
                  item: node.title,
                }))
              }}
            />,
          ],
        })}
      />
    </>
  )
}
