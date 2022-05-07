import { ref, computed, watch } from 'vue'

import { getRawJson } from '@/net'

import { setCurrentDictionary } from './dictionaries.hook'
import {
  languages,
  getInitialLangShortName,
  setInitialLangShortName,
} from '../helpers'

const html = document.querySelector('html') as HTMLHtmlElement

export const currentShortName = ref(getInitialLangShortName())

export const isSelectorDisabled = ref(false)

const currentLanguage = computed(() => {
  const foundLang = languages.find(
    lang => lang.shortName === currentShortName.value
  )

  return foundLang || languages[0]
})

export const loadCurrentLang = async () => {
  const { shortName, isRtl } = currentLanguage.value

  const dictionary = await getRawJson(`dictionaries/${shortName}.json`)

  setCurrentDictionary(shortName, dictionary)

  html.setAttribute('lang', shortName)
  html.setAttribute('dir', isRtl ? 'rtl' : 'ltr')
}

watch(currentLanguage, async ({ shortName }) => {
  setInitialLangShortName(shortName)

  isSelectorDisabled.value = true

  await loadCurrentLang()

  isSelectorDisabled.value = false
})
