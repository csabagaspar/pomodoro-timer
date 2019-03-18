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
      seconds: 25*60,
    },
  )

  const timerRef = useRef(null)

  useEffect(() => {
    Notification.requestPermission()
    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {

    const [m,s] = format(seconds)
    document.title = `${m}:${s} - Pomodoro Timer`

  }, [seconds])

  function handleRunClick() {
    if (running) {
      clearInterval(timerRef.current)
    } else {
      let currentTime = seconds - 1
      setState({seconds: currentTime})

      timerRef.current = setInterval(() => {
        if (currentTime === 0) {
          clearInterval(timerRef.current)
          alert()
        } else {
          setState({seconds: --currentTime})
        }
      }, 1000)
    }
    setState({running: !running})
  }

  function alert(){
    new Notification("The time is over!", {
    })
  }

  function handleSetClick(seconds) {
    clearInterval(timerRef.current)
    setState({seconds, running: false})
  }

  function format(seconds) {
    const m = Math.floor(seconds % 3600 / 60)
    const s = Math.floor(seconds % 3600 % 60)
    return [`${m < 10 ? '0': ''}${m}`,`${s < 10 ? '0': ''}${s}`]
  }

  const [m,s] = format(seconds)
  const remainingTime = `${m}m:${s}s`

  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={() => handleSetClick(25*60)} style={buttonStyles}>
        Pomodoro
      </button>
      <button onClick={() => handleSetClick(10)} style={buttonStyles}>
        Short break
      </button>
      <button onClick={() => handleSetClick(15*60)} style={buttonStyles}>
        Long break
      </button>
      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {remainingTime}
      </label>
      <button onClick={handleRunClick} style={buttonStyles}>
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}

export default CountDownTimer
