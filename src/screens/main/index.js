import React, {useContext} from 'react'
import {CountDownTimer} from './countdown'
import {TodoTree} from './todo'
import Store from './store'

function Main() {
  return (
    <Store>
      <div style={{textAlign: 'center'}}>
        <CountDownTimer />
        <div style={{height: 400}}>
          <TodoTree />
        </div>
      </div>
    </Store>
  )
}

export default Main
