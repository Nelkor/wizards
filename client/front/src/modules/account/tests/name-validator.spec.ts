import { validateName } from '@src/modules/account/helpers/sync-validators'

describe('name validation', () => {
  test('validateName should be defined', () => {
    expect(validateName).toBeDefined()
  })

  test('"Nelkor" should be a good name', () => {
    expect(validateName('Nelkor')).toBeTruthy()
  })

  test('"Nelk0r" should be a bad name', () => {
    expect(validateName('Nelk0r')).toBeFalsy()
  })

  test('"True Roma" should be a good name', () => {
    expect(validateName('True Roma')).toBeTruthy()
  })

  test('"trueroma" should be a good name', () => {
    expect(validateName('trueroma')).toBeFalsy()
  })

  test('"Root" should be too short', () => {
    expect(validateName('Root')).toBeFalsy()
  })

  test('"Veryverylargepenis" should be too long', () => {
    expect(validateName('Veryverylargepenis')).toBeFalsy()
  })

  test('Multiple spaces should be forbidden', () => {
    expect(validateName('True  Roma')).toBeFalsy()
  })

  test('Spaces around the edges should be forbidden', () => {
    expect(validateName(' Nelkor')).toBeFalsy()
    expect(validateName('Nelkor ')).toBeFalsy()
    expect(validateName(' Nelkor ')).toBeFalsy()
  })
})
