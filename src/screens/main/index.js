import React, {useState, useContext} from 'react'
import {CountDownTimer} from './countdown'
import {TodoTree} from './todo'
import {TodoListSelector} from './TodoListSelector'
import TodoListProvider from './TodoListContext'
import SelectionProvider from './SelectionContext'

function Main() {
  return (
    <SelectionProvider>
      <TodoListProvider>
        <div style={{textAlign: 'center'}}>
          <CountDownTimer />
          <TodoListSelector />
          <div style={{height: 400}}>
            <TodoTree />
          </div>
        </div>
      </TodoListProvider>
    </SelectionProvider>
  )
}

export default Main
