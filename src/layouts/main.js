import React, {useState, useContext} from 'react'
import {CountDownTimer} from '../views/CountDownTimer'
import {TodoTree} from '../views/TodoTree'
import {TodoListSelector} from '../views/TodoListSelector'

import ListsProvider from '../contexts/ListsContext'
import ActiveListProvider from '../contexts/ActiveListContext'
import ActiveListNameProvider from '../contexts/ActiveListNameContext'
import ActiveItemIdProvider from '../contexts/ActiveItemIdContext'

function Main() {
  return (
    <ActiveListNameProvider>
      <ActiveItemIdProvider>
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
      </ActiveItemIdProvider>
    </ActiveListNameProvider>
  )
}

export default Main
