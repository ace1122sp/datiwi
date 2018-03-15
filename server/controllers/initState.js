const express = require('express');

const initState = (req, res) => {
  res.json(); //api
  res.end();
}

module.exports = initState;


let whatIniStateShouldLookLike = {
  activePlan: [/*isto kao u app state*/],
  activities: {/*isto kao u app state*/},
  dayEfficiency: %,
  idCounterActivities: #,
  idCounterTimeUnits: #,
  timePoint: ??,
  timeUnits: {}
}

//uzmi iz db podatke, kreiraj json obj i onda posalji response

//prvo kreiraj na fe strani fetch methode za slanje update-a
//onda formiraj na be strani middleware koji ce update-ovati db 
