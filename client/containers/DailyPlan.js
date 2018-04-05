import { connect } from 'react-redux';
import { fetchEnd, fetchStatusUpdate } from './../actions/fetchPlan';
import { switchMainPage } from './../actions/mainPage';
import { fetchTodayEfficiency } from './../actions/fetchEfficiency';
import { fetchUpdate } from './../actions/fetchActivity';
import MainPageC from './../components/MainPage/MainPageC';

const baseUrl = 'http://localhost:9336/api/';

const mapStateToProps = state => {
  return {
    activePlan: [...state.activePlan],
    activities: {...state.activities}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChangingStatus: id => {
      dispatch(fetchStatusUpdate(`${baseUrl}active-plan`, id));
    },
    finishingPlan: () => {
      dispatch(fetchEnd(`${baseUrl}active-plan`));
      dispatch(switchMainPage('A'));
    },
    handleUpdatingActivityStats: (id, minutes) => {
      dispatch(fetchUpdate(`${baseUrl}activity`, id, minutes));
    },
    handleDiscardingPlan: () => {
      dispatch(fetchEnd(`${baseUrl}active-plan`));
      dispatch(switchMainPage('A'));
    },
    handleSendingTodayEfficiency: eff => {
      dispatch(fetchTodayEfficiency(`${baseUrl}day-efficiency`, eff));
    }
  }
}

const DailyPlan = connect(mapStateToProps, mapDispatchToProps)(MainPageC);

export default DailyPlan;
