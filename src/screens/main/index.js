import React from 'react'
import {CountDownTimer} from './countdown'
import {TodoTree} from './todo'

function Main() {
  return (
    <div style={{textAlign: 'center'}}>
      <CountDownTimer />
      <div style={{height: 400}}>
        <TodoTree />
      </div>
    </div>
  )
}

export default Main
