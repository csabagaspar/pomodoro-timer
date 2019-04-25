import React, {useReducer, useEffect, useRef} from 'react'
import {useNotification} from './useNotification'

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}
const phases = {
  pomodoro: {
    seconds: 25 * 60,
    title: 'Pomodoro',
  },
  'short-break': {
    seconds: 5 * 60,
    title: 'Short break',
  },
  'long-break': {
    seconds: 15 * 60,
    title: 'Long break',
  },
}

export function CountDownTimer() {
  const [alert] = useNotification()
  const [{seconds, title, running}, setState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      running: false,
      seconds: 0,
      title: '',
    },
  )

  const timerRef = useRef(null)

  useEffect(() => {
    setState({
      seconds: phases.pomodoro.seconds,
      title: phases.pomodoro.title,
    })

    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    const [m, s] = format(seconds)
    document.title = `${m}:${s} - ${title}`
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
          alert(title)
        } else {
          setState({seconds: --currentTime})
        }
      }, 1000)
    }
    setState({running: !running})
  }

  function handleSetClick(phase) {
    clearInterval(timerRef.current)
    setState({
      seconds: phase.seconds,
      title: phase.title,
      running: false,
    })
  }

  function format(seconds) {
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor((seconds % 3600) % 60)
    return [`${m < 10 ? '0' : ''}${m}`, `${s < 10 ? '0' : ''}${s}`]
  }

  const [m, s] = format(seconds)
  const remainingTime = `${m}m:${s}s`

  return (
    <>
      {Object.keys(phases).map(phase => (
        <button
          key={phase}
          onClick={() => handleSetClick(phases[phase])}
          style={buttonStyles}
        >
          {phases[phase].title}
        </button>
      ))}
      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {remainingTime}
      </label>
      <button
        onClick={handleRunClick}
        style={buttonStyles}
        disabled={seconds === 0}
      >
        {running ? 'Stop' : 'Start'}
      </button>
    </>
  )
}

export default CountDownTimer
