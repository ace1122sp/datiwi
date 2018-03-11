export const dayEfficiency = (state = [], action) => {
  switch (action.type) {
    case 'TODAY_EFFICIENCY':
      return [...state, action.todayEfficiency];
    case 'RESET_DAY_EFFICIENCY':
      return [];
    default:
      return state;
  }
}
