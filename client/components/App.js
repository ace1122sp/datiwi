import React from 'react';
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


let App = ({ showTimeUnitsSettings, showLibrary, showingMainPage }) => {
  let timeUnitSection = <ChooseInterval />;
  let library = null;
  if(showTimeUnitsSettings === 'show') timeUnitSection = <SetIntervals />;
  if(showLibrary === 'show') library = <DynamicLibrary />;
    if(showingMainPage === 'A') {
    library = null;
    timeUnitSection = null;
  } else if(showingMainPage === 'C') {
    timeUnitSection = null;
  }
  let libActSector =
    <div className='lib-act-sector'>
      {library}
      <MainPage />
    </div>;
  if(showTimeUnitsSettings === 'show') libActSector = null;
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

App = connect(mapStateToProps)(App);

export default App;
