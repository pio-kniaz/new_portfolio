import { SWICH_TO_ENG, SWICH_TO_PL } from 'redux/actionTypes';

export const swichLanguageToPl = () => ({
  type: SWICH_TO_PL,
  payload: 'pl',
});
export const swichLanguageToEng = () => ({
  type: SWICH_TO_ENG,
  payload: 'eng',
});
