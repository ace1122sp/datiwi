export const dayEfficiency = (state = [], action) => {
  switch (action.type) {
    case 'TODAY_EFFICIENCY':
      return [...state, action.todayEfficiency];
    case 'RESET_DAY_EFFICIENCY':
      return [];
    case 'INIT_EFFICIENCY':
      return action.efficiencyArr;
    default:
      return state;
  }
}
