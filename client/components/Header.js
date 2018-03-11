import React, { Component } from 'react';
import { getTimeAndDate } from './../methods';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '17:09:13',
      date: 'January, 10, 2018.'
    }
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.updateDateAndTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  updateDateAndTime() {
    let timeObj = getTimeAndDate();
    this.setState({...timeObj});
  }

  render() {
    return(
      <header>
        <h4>datiwi</h4>
        <div>
          <time>{this.state.time}</time>
          <label>{this.state.date}</label>
        </div>
      </header>
    );
  }
}

export default Header;
