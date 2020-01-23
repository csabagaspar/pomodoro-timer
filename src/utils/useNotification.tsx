import {useEffect} from 'react'

export function useNotification(): [(value: string) => void] {

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function alert(text: string): void {
    new Notification(`${text} is over!`, {})
  }

  return [alert]
}
