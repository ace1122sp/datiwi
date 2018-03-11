import { connect } from 'react-redux';
import { endPlan, changeStatus } from './../actions/activePlan';
import { switchMainPage } from './../actions/mainPage';
import { updateActivityStats, sendTodayEfficiency } from './../actions/library';
import MainPageC from './../components/MainPage/MainPageC';

const mapStateToProps = state => {
  return {
    activePlan: [...state.activePlan],
    activities: {...state.activities}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChangingStatus: id => {
      dispatch(changeStatus(id));
    },
    finishingPlan: () => {
      dispatch(endPlan());
      dispatch(switchMainPage('A'));
    },
    handleUpdatingActivityStats: (id, minutes) => {
      dispatch(updateActivityStats(id, minutes));
    },
    handleDiscardingPlan: () => {
      dispatch(endPlan());
      dispatch(switchMainPage('A'));
    },
    handleSendingTodayEfficiency: eff => {
      dispatch(sendTodayEfficiency(eff));
    }
  }
}

const DailyPlan = connect(mapStateToProps, mapDispatchToProps)(MainPageC);

export default DailyPlan;
