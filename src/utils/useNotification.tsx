import {useEffect} from 'react'

export function useNotification() {
  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function alert(text) {
    new Notification(`${text} is over!`, {})
  }

  return [alert]
}
