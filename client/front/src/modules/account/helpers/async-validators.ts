import { AsyncValidationResults } from '../types'
import {
  checkIfNameIsFree,
  checkIfInvitationCodeIsValid,
  checkIfPasswordIsStrong,
} from '../service'

const results: AsyncValidationResults = {
  invitations: {},
  names: {},
  passwords: {},
}

export const checkInvitation = async (invitation: string) => {
  if (results.invitations[invitation] === undefined) {
    results.invitations[invitation] = await checkIfInvitationCodeIsValid(
      invitation
    )
  }

  return results.invitations[invitation]
}

export const checkName = async (name: string) => {
  if (results.names[name] === undefined) {
    results.names[name] = await checkIfNameIsFree(name)
  }

  return results.names[name]
}

export const checkPassword = async (password: string) => {
  if (results.passwords[password] === undefined) {
    results.passwords[password] = await checkIfPasswordIsStrong(password)
  }

  return results.passwords[password]
}
