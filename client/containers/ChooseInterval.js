import { connect } from 'react-redux';
import { activateTimeUnit } from './../actions/active';
import { showSettings } from './../actions/timeUnit';
import IntervalsShort from './../components/IntervalsShort';

const mapStateToProps = state => {
  return {
    timeUnits: {...state.timeUnits}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTimeUnitClick: id => {
      dispatch(activateTimeUnit(id));
    },
    clickToShowSettings: () => {
      dispatch(showSettings('show'));
    }
  }
}

const ChooseInterval = connect(mapStateToProps, mapDispatchToProps)(IntervalsShort);

export default ChooseInterval;
