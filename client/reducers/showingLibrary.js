export const showingLibrary = (state = 'show', action) => {
  switch (action.type) {
    case 'SHOW_LIBRARY':
      if(state === 'show') {
        return 'hide';
      } else {
        return 'show';
      }
    default:
      return state;
  }
}
