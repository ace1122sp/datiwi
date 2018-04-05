import { connect } from 'react-redux';
import { fetchDeleteActivity } from './../actions/fetchActivity';
import { fetchReset } from './../actions/fetchEfficiency';
import { activateActivity } from './../actions/active';
import Library from './../components/Library';

const baseUrl = 'http://localhost:9336/api/';

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
      dispatch(fetchReset(`${baseUrl}day-efficiency`));
    },
    deleteActivity: id => {
      dispatch(fetchDeleteActivity(`${baseUrl}activity`, id));
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
