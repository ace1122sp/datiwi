import React from 'react';

const MainPageA = ({ startingTime, settingStartingTime, handleSubmit }) =>
  <div className='main-a'>
    <form onSubmit={event => {
      event.preventDefault();
      handleSubmit();
    }}>
      <label>Your Day Starts At: </label><br/><br/><br/>
      <input type="time" name="startingTime" value={startingTime} onChange={event => {
        let val = event.target.value;
        settingStartingTime(val);
      }} className='inp setter'/>
      <input type="submit" value="submit" className='btn setter submit-btn'/>
    </form>
  </div>;

export default MainPageA;
