export const dataIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'DATA_IS_LOADING':
      return 0;
    default:
      return state;
  }
}
