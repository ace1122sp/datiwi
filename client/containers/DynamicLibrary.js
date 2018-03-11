import { connect } from 'react-redux';
import { resetDayEfficiency, deleteActivity } from './../actions/library'
import { activateActivity } from './../actions/active';
import Library from './../components/Library';

const mapStateToProps = state => {
  return {
    activeActivity: state.activeActivity,
    activePlan: state.activePlan,
    activities: {...state.activities},
    totalEfficiency: [...state.dayEfficiency]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResetClick: () => {
      dispatch(resetDayEfficiency());
    },
    deleteActivity: id => {
      dispatch(deleteActivity(id));
    },
    onActivityClick: id => {
      dispatch(activateActivity(id));
    }
  }
}

const DynamicLibrary = connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);

export default DynamicLibrary;
