import { connect } from 'react-redux';
import { showSettings } from './../actions/timeUnit';
import { fetchDeleteTimeUnit, fetchTimeUnit } from './../actions/fetchTimeUnit';
import { fetchTimeUnitID } from './../actions/fetchCounters';
import IntervalsSettings from './../components/IntervalsSettings';

const baseUrl = 'http://localhost:9336/api/';

const mapStateToProps = state => {
  return {
    timeUnits: {...state.timeUnits},
    lastTimeUnitID: state.idCounterTimeUnits
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clickToDeleteTimeUnit: id => {
      dispatch(fetchDeleteTimeUnit(`${baseUrl}time-unit`, id));
    },
    submitToCreateTimeUnit: (hours, minutes, id) => {
      dispatch(fetchTimeUnit(`${baseUrl}time-unit`, hours, minutes, id));
      dispatch(fetchTimeUnitID(`${baseUrl}id-counter-timeunits`));
    },
    clickToCloseSettings: () => {
      dispatch(showSettings('close'));
    }
  }
};

const SetIntervals = connect(mapStateToProps, mapDispatchToProps)(IntervalsSettings);

export default SetIntervals;
