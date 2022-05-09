export interface Account {
  id: number
  name: string
}

export interface AsyncValidationResults {
  invitations: Record<string, boolean>
  names: Record<string, boolean>
  passwords: Record<string, boolean>
}

export interface Notification {
  isPositive: boolean
  text: string
}

export interface NotificationView {
  className: string
  text: string
}

export type MaybeNotification = Notification | null

export enum RegistrationFailReasons {
  INVITATION = 'invitation',
  NAME = 'name',
  PASSWORD = 'password',
}
