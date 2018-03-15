import { connect } from 'react-redux';
import { fetchTimePoint } from './../actions/fetchTimePoint';
import { switchMainPage } from './../actions/mainPage';
import MainPageA from './../components/MainPage/MainPageA';

const baseUrl = 'http://localhost:9336/api/';

const mapStateToProps = state => {
  return {
    startingTime: state.timePoint
  }
}

const mapDispatchToProps = dispatch => {
  return {
    settingStartingTime: val => {
      dispatch(fetchTimePoint(`${baseUrl}time-point`, val));
    },
    handleSubmit: () => {
      dispatch(switchMainPage('B'));
    }
  }
}

const StartPage = connect(mapStateToProps, mapDispatchToProps)(MainPageA);

export default StartPage;
