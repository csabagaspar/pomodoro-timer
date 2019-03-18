import React, {useReducer, useEffect, useRef} from 'react'

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}

function CountDownTimer() {
  const [{seconds, running}, setState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      running: false,
      seconds: 25,
    },
  )

  const timerRef = useRef(null)

  useEffect(() => () => clearInterval(timerRef.current), [])

  function handleRunClick() {
    if (running) {
      clearInterval(timerRef.current)
    } else {
      let currentTime = seconds - 1
      setState({seconds: currentTime})

      timerRef.current = setInterval(() => {
        if (currentTime === 0) {
          clearInterval(timerRef.current)
        } else {
          setState({seconds: --currentTime})
        }
      }, 1000)
    }
    setState({running: !running})
  }

  function handleSetClick(sec) {
    clearInterval(timerRef.current)
    setState({seconds: sec, running: false})
  }

  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={() => handleSetClick(25)} style={buttonStyles}>
        Pomodoro
      </button>
      <button onClick={() => handleSetClick(5)} style={buttonStyles}>
        Short break
      </button>
      <button onClick={() => handleSetClick(15)} style={buttonStyles}>
        Long break
      </button>
      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {seconds} sec
      </label>
      <button onClick={handleRunClick} style={buttonStyles}>
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}

export default CountDownTimer
