import { connect } from 'react-redux';
import { deleteTimeUnit, createTimeUnit, showSettings } from './../actions/timeUnit';
import { increaseTimeUnitID } from './../actions/counters';
import IntervalsSettings from './../components/IntervalsSettings';

const mapStateToProps = state => {
  return {
    timeUnits: {...state.timeUnits},
    lastTimeUnitID: state.idCounterTimeUnits
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clickToDeleteTimeUnit: id => {
      dispatch(deleteTimeUnit(id));
    },
    submitToCreateTimeUnit: (hours, minutes, id) => {
      dispatch(createTimeUnit(hours, minutes, id));
      dispatch(increaseTimeUnitID());
    },
    clickToCloseSettings: () => {
      dispatch(showSettings('close'));
    }
  }
};

const SetIntervals = connect(mapStateToProps, mapDispatchToProps)(IntervalsSettings);

export default SetIntervals;
