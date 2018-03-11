export const activePlan = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      const i = action.index;
      let newState = [...state];
      let activity = newState[i];
      let status;
      if(activity.status === 'waiting') {
        status = 'failed';
      } else if(activity.status === 'failed') {
        status = 'completed';
      } else if(activity.status === 'completed') {
        status = 'waiting';
      }
      newState[i] = Object.assign({}, newState[i], {status});
      return newState;
    case 'ADD_ACTIVITY':
      let act = Object.assign({}, {id:action.id, status: 'waiting'}, action.time);
      return [...state, act];
    case 'REMOVE_LAST_ACTIVITY':
      if(state.length > 1) return state.slice(0, -1);
      return [];
    case 'END_PLAN':
      return [];
    default:
      return state;
  }
}
