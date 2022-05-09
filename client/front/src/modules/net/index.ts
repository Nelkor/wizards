import { ResponseJson } from './types'

export const getRawJson = async (path: string) => {
  try {
    const res = await fetch(path)

    return res.json()
  } catch (e) {
    return {}
  }
}

export const getJson = async <T>(path: string): Promise<ResponseJson> => {
  const json = await getRawJson(path)

  if (json.ok) {
    return {
      ok: true,
      result: json.result as T,
    }
  }

  return {
    ok: false,
    reason: json.reason || 'net',
  }
}
