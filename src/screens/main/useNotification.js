import {useEffect} from 'react'

export function useNotification() {
  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function alert() {
    new Notification(`${title} is over!`, {})
  }

  return [alert]
}
