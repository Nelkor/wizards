import { ResponseJson } from './types'

export const getRawJson = async (path: string) => {
  const res = await fetch(path)

  return res.json()
}

export const get = async (path: string) => {
  const res = await fetch(path)
  const json: ResponseJson = await res.json()

  if (!json.ok) {
    throw new Error(`get-request has failed: ${json.reason}`)
  }

  return json.result
}
