import { DATA_IS_LOADING, DATA_FAILED, DATA_LOADED } from './constants';

export const dataIsLoading = bool => {
  return {
    type: DATA_IS_LOADING,
    isLoading: bool
  }
}

export const dataHasFailedToLoad = bool => {
  return {
    type: DATA_FAILED,
    hasFailedToLoad: bool
  }
}

export const dataLoaded = data => {
  return {
    type: DATA_LOADED,
    data
  }
}
