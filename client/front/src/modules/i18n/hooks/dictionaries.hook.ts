import { ref } from 'vue'

const currentDictionary = ref('')
const dictionaries: Record<string, Record<string, string>> = {}

export const $T = (key: string) => dictionaries[currentDictionary.value][key]

export const setCurrentDictionary = (
  key: string,
  dictionary: Record<string, string>
) => {
  dictionaries[key] = dictionary

  currentDictionary.value = key
}
