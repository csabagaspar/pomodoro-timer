import React, {useState, useContext} from 'react'
import {CountDownTimer} from '../views/CountDownTimer'
import {TodoTree} from '../views/TodoTree'
import {TodoListSelector} from '../views/TodoListSelector'

import TodoListProvider from '../contexts/TodoListContext'
import SelectionProvider from '../contexts/SelectionContext'
import ActiveProvider from '../contexts/ActiveContext'

function Main() {
  return (
    <SelectionProvider>
      <TodoListProvider>
        <ActiveProvider>
          <div style={{textAlign: 'center'}}>
            <CountDownTimer />
            <TodoListSelector />
            <div style={{height: 400}}>
              <TodoTree />
            </div>
          </div>
        </ActiveProvider>
      </TodoListProvider>
    </SelectionProvider>
  )
}

export default Main
