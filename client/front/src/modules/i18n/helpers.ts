interface AppLanguage {
  shortName: string
  longName: string
  isRtl: boolean
}

const LS_LANG_KEY = 'lang'

export const languages: AppLanguage[] = [
  {
    shortName: 'en',
    longName: 'English',
    isRtl: false,
  },
  {
    shortName: 'ru',
    longName: 'Русский',
    isRtl: false,
  },
  {
    shortName: 'iw',
    longName: 'עִברִית',
    isRtl: true,
  },
]

export const cutLang = (languageCode: string) =>
  languageCode.split('-')[0].toLowerCase()

export const isValidLanguage = (shortName: string) =>
  languages.some(lang => lang.shortName === shortName)

export const getInitialLangShortName = () => {
  const fromLs = localStorage.getItem(LS_LANG_KEY)

  if (fromLs && isValidLanguage(fromLs)) {
    return fromLs
  }

  const fromNavigator = cutLang(navigator.language)

  return isValidLanguage(fromNavigator) ? fromNavigator : languages[0].shortName
}

export const setInitialLangShortName = (shortName: string) => {
  localStorage.setItem(LS_LANG_KEY, shortName)
}
