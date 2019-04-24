import React, {useReducer, useEffect, useRef} from 'react'
import 'react-sortable-tree/style.css'
import SortableTree, {changeNodeAtPath} from 'react-sortable-tree'

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

function CountDownTimer() {
  const [{seconds, title, running, treeData}, setState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      running: false,
      seconds: 0,
      title: '',
      treeData: [
        {title: 'todo 1', estimated: 3},
        {
          title: 'todo 2',
          estimated: 2,
          expanded: true,
          children: [{title: 'todo 2.1', estimated: 4}],
        },
      ],
    },
  )

  const timerRef = useRef(null)

  useEffect(() => {
    setState({
      seconds: phases.pomodoro.seconds,
      title: phases.pomodoro.title,
    })
    Notification.requestPermission()

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
          alert()
        } else {
          setState({seconds: --currentTime})
        }
      }, 1000)
    }
    setState({running: !running})
  }

  function alert() {
    new Notification(`${title} is over!`, {})
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

  const getNodeKey = ({treeIndex}) => treeIndex
  return (
    <div style={{textAlign: 'center'}}>
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
      <div style={{height: 400}}>
        <SortableTree
          treeData={treeData}
          onChange={treeData => setState({treeData})}
          generateNodeProps={({node, path}) => ({
            title: (
              <>
                <input
                  style={{fontSize: '1.1rem'}}
                  value={node.title}
                  onChange={event => {
                    const title = event.target.value
                    setState({
                      treeData: changeNodeAtPath({
                        treeData: treeData,
                        path,
                        getNodeKey,
                        newNode: {...node, title},
                      }),
                    })
                  }}
                />
                <input
                  style={{fontSize: '1.1rem'}}
                  value={node.estimated}
                  type="number"
                  onChange={event => {
                    const estimated = event.target.value
                    setState({
                      treeData: changeNodeAtPath({
                        treeData: treeData,
                        path,
                        getNodeKey,
                        newNode: {...node, estimated},
                      }),
                    })
                  }}
                />
                <input
                  style={{fontSize: '1.1rem'}}
                  value={node.completed}
                  type="number"
                  onChange={event => {
                    const completed = event.target.value
                    setState({
                      treeData: changeNodeAtPath({
                        treeData: treeData,
                        path,
                        getNodeKey,
                        newNode: {...node, completed},
                      }),
                    })
                  }}
                />
              </>
            ),
          })}
        />
      </div>
    </div>
  )
}

export default CountDownTimer
