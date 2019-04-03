import { SWICH_TO_ENG, SWICH_TO_PL } from 'redux/actionTypes'

export const swichLanguageToPl = () => {
  return {
    type: SWICH_TO_PL,
    payload: 'PL'
  }
}
export const swichLanguageToEng = () => {
  return {
    type: SWICH_TO_ENG,
    payload: 'ENG'
  }
}
