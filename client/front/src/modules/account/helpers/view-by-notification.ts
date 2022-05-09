import { MaybeNotification } from '../types'

export const viewByNotification = (notification: MaybeNotification) => ({
  className: notification
    ? notification.isPositive
      ? 'success'
      : 'error'
    : 'hidden',
  text: notification?.text || '',
})
