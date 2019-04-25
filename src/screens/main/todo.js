import React, {useReducer} from 'react'
import 'react-sortable-tree/style.css'
import SortableTree, {changeNodeAtPath} from 'react-sortable-tree'

export function TodoTree() {
  const [{treeData}, setState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      treeData: [
        {title: 'todo 1', estimated: 3, completed: 0},
        {
          title: 'todo 2',
          estimated: 2,
          completed: 0,
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
    },
  )

  const getNodeKey = ({treeIndex}) => treeIndex

  return (
    <SortableTree
      treeData={treeData}
      onChange={treeData => setState({treeData})}
      generateNodeProps={({node, path}) => ({
        title: (
          <>
            <input
              style={{fontSize: '1.1rem'}}
              value={node.title}
              onChange={event => {
                const title = event.target.value
                setState({
                  treeData: changeNodeAtPath({
                    treeData: treeData,
                    path,
                    getNodeKey,
                    newNode: {...node, title},
                  }),
                })
              }}
            />
            <input
              style={{fontSize: '1.1rem'}}
              value={node.estimated}
              type="number"
              onChange={event => {
                const estimated = event.target.value
                setState({
                  treeData: changeNodeAtPath({
                    treeData: treeData,
                    path,
                    getNodeKey,
                    newNode: {...node, estimated},
                  }),
                })
              }}
            />
            <label style={{fontSize: '1.1rem'}}>{node.completed}</label>
          </>
        ),
      })}
    />
  )
}
