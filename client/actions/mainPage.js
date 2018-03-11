import { SWITCH_MAIN_PAGE } from './constants';

export const switchMainPage = page => {
  return {
    type: SWITCH_MAIN_PAGE,
    page
  }
}
