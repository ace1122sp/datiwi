import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartPage from './../containers/StartPage';
import CreatePlan from './../containers/CreatePlan';
import DailyPlan from './../containers/DailyPlan';
import { showingLibrary } from './../actions/library';

const mapStateToProps = state => {
  return {
    pageToShow: state.showingMainPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleLibrary: () => {
      dispatch(showingLibrary());
    }
  }
}

let MainPage = ({ pageToShow, toggleLibrary }) => {
  let page;
  let activityButton = <button onClick={toggleLibrary} className='btn special-btn' id='showActivities'>activities</button>;
  if(pageToShow === 'A') {
    page = <StartPage />;
  } else if(pageToShow === 'B') {
    page = <CreatePlan />;
  } else if(pageToShow === 'C') {
    page = <DailyPlan />;
  }
  if(pageToShow === 'A') activityButton = null;

  return(
    <div className='main'>
      {page}
      {activityButton}
    </div>
  );
}

MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPage;
