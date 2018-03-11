import { connect } from 'react-redux';
import { setTimePoint } from './../actions/productionPlan';
import { switchMainPage } from './../actions/mainPage';
import MainPageA from './../components/MainPage/MainPageA';

const mapStateToProps = state => {
  return {
    startingTime: state.timePoint
  }
}

const mapDispatchToProps = dispatch => {
  return {
    settingStartingTime: val => {
      dispatch(setTimePoint(val));
    },
    handleSubmit: () => {
      dispatch(switchMainPage('B'));
    }
  }
}

const StartPage = connect(mapStateToProps, mapDispatchToProps)(MainPageA);

export default StartPage;
