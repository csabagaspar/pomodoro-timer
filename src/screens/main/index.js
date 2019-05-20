import React, {useState, useContext} from 'react'
import {CountDownTimer} from './countdown'
import {TodoTree} from './todo'
import {TodoListSelector} from './TodoListSelector'
import TodoListProvider from './TodoListContext'
import SelectionProvider from './SelectionContext'
import ActiveProvider from './ActiveContext'

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
