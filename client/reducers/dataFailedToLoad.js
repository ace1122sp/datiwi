export const dataFailedToLoad = (state = false, action) => {
  switch (action.type) {
    case 'DATA_FAILED':
      return 0;
    default:
      return state;
  }
}
