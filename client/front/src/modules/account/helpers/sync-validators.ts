const MIN_NAME_LENGTH = 5
const MAX_NAME_LENGTH = 16
const MIN_PASSWORD_LENGTH = 9

export const validateName = (name: string) => {
  if (name.startsWith(' ') || name.endsWith(' ')) {
    return false
  }

  if (name.length > MAX_NAME_LENGTH || name.length < MIN_NAME_LENGTH) {
    return false
  }

  const chunks = name.split(' ')

  return (
    chunks.length < 3 &&
    chunks.filter(Boolean).every(chunk => /^[A-Z][a-z]{2,}$/.test(chunk))
  )
}

export const validatePassword = (password: string) =>
  password.length >= MIN_PASSWORD_LENGTH
