import React from 'react'
import {CountDownTimer} from '../views/CountDownTimer'
import {TodoTree} from '../views/TodoTree'
import {TodoListSelector} from '../views/TodoListSelector'
import {Title, Title1, ClassTitle} from '../views/Title'

import ListsProvider from '../contexts/ListsContext'
import ActiveListProvider from '../contexts/ActiveListContext'
import ActiveListNameProvider from '../contexts/ActiveListNameContext'
import ActiveListItemIdProvider from '../contexts/ActiveListItemIdContext'


export default function Main(){
  return (
    <ActiveListNameProvider>
      <ActiveListItemIdProvider>
        <ListsProvider>
          <ActiveListProvider>
            <div style={{textAlign: 'center'}}>
              <Title />
              <Title1 />
              <ClassTitle />
              <CountDownTimer />
              <TodoListSelector />
              <div style={{height: 400}}>
                <TodoTree />
              </div>
            </div>
          </ActiveListProvider>
        </ListsProvider>
      </ActiveListItemIdProvider>
    </ActiveListNameProvider>
  )
}

