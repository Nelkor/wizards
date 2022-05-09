const NETWORK_PING = 200

const fakeBooleanRequest = (): Promise<boolean> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() < 0.5)
    }, NETWORK_PING)
  })

export const checkIfNameIsFree = async (name: string) => {
  const result = await fakeBooleanRequest()

  return Boolean(name.length % 2) === result
}

export const checkIfInvitationCodeIsValid = async (code: string) => {
  const result = await fakeBooleanRequest()

  return Boolean(code.length % 2) === result
}

export const checkIfPasswordIsStrong = async (password: string) => {
  const result = await fakeBooleanRequest()

  return Boolean(password.length % 2) === result
}

export const sendRegistration = async (
  code: string,
  name: string,
  password: string
) => {
  const result = await fakeBooleanRequest()

  return Boolean((code.length + name.length + password.length) % 2) === result
}
