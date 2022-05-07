interface SuccessfulJson {
  ok: true
  result: unknown
}

interface FailedJson {
  ok: false
  reason: string
}

export type ResponseJson = SuccessfulJson | FailedJson
