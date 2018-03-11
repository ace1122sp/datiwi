export const dataLoaded = (state = false, action) => {
  switch (action.type) {
    case 'DATA_LOADED':
      return 0;
    default:
      return state;
  }
}
