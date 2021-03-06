import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../style/index.css';
import MainPage from './MainPage';
import DynamicLibrary from './../containers/DynamicLibrary';
import Header from './Header';
import ChooseInterval from './../containers/ChooseInterval';
import SetIntervals from './../containers/SetIntervals';

const mapStateToProps = state => {
  return {
    showTimeUnitsSettings: state.showTimeUnitsSettings,
    showLibrary: state.showingLibrary,
    showingMainPage: state.showingMainPage
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let timeUnitSection = <ChooseInterval />;
    let library = null;

    if(this.props.showTimeUnitsSettings === 'show') timeUnitSection = <SetIntervals />;
    if(this.props.showLibrary === 'show') library = <DynamicLibrary />;
    if(this.props.showingMainPage === 'A') {
      library = null;
      timeUnitSection = null;
    } else if(this.props.showingMainPage === 'C') {
      timeUnitSection = null;
    }

    let libActSector =
      <div className='lib-act-sector'>
        {library}
        <MainPage />
      </div>;

    if(this.props.showTimeUnitsSettings === 'show') libActSector = null;

    return (
      <div className='app'>
        <Header />
        <div className='content-sector'>
          {libActSector}
          {timeUnitSection}
        </div>
      </div>
    );
  }
}

App = connect(mapStateToProps)(App);

export default App;
