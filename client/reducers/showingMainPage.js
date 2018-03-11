export const showingMainPage = (state = 'A', action) => {
  switch (action.type) {
    case 'SWITCH_MAIN_PAGE':
      return action.page;
    default:
      return state;
  }
}
