import React, {useState, useContext} from 'react'
import {CountDownTimer} from '../views/CountDownTimer'
import {TodoTree} from '../views/TodoTree'
import {TodoListSelector} from '../views/TodoListSelector'

import ListsProvider from '../contexts/ListsContext'
import ActiveListProvider from '../contexts/ActiveListContext'
import ActiveListNameProvider from '../contexts/ActiveListNameContext'
import ActiveListItemIdProvider from '../contexts/ActiveListItemIdContext'

function Main() {
  return (
    <ActiveListNameProvider>
      <ActiveListItemIdProvider>
        <ListsProvider>
          <ActiveListProvider>
            <div style={{textAlign: 'center'}}>
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

export default Main
