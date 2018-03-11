export const getTimeAndDate = () => {
  const date_time = new Date();
  const dateSettings = ['en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}];
  const timeSettings = ['en-US', {hour12: false}];
  const date = date_time.toLocaleDateString(...dateSettings);
  const time = date_time.toLocaleTimeString(...timeSettings);
  return { time, date };
}

export const calcTotalEfficiency = effArr => {
  let averageEff = 'N/A';
  let resArr = [...effArr];
  while(resArr.length > 14) resArr.shift();
  if(resArr.length) {
    let sum = resArr.reduce((a, eff) => a += parseFloat(eff), 0);
    let length = resArr.length;
    averageEff = (Math.round((sum/length)*10000)/100).toString();
  }
  return averageEff;
}

export const checkIfActivityAvailableForDelete = (idToCheck, activeId, planInUse) => {
  const idN = parseInt(idToCheck),
        activeIdN = parseInt(activeId);
  let planInUseN = [];
  planInUse.forEach(id => {
    let idN = parseInt(id);
    planInUseN.push(idN);
  });
  const isActive = idN === activeIdN;
  const isUsedInPlan = planInUseN.some(act => act === idN);
  const forbidDelete = isActive || isUsedInPlan;
  return !forbidDelete;
}

export const formatTimeUnit = num => {
  let strVal = num.toString();
  if(strVal.length === 1) strVal = '0' + strVal;
  return strVal;
}

export const getActivityDurationInMinutes = (m1_s, m2_s, h1_s, h2_s) => {
  const m1 = parseInt(m1_s);
  const m2 = parseInt(m2_s);
  const h1 = parseInt(h1_s);
  const h2 = parseInt(h2_s)
  let minutes, t1, t2;
  if(h1 < h2) {
    t1 = h1*60 + m1;
    t2 = h2*60 + m2;
    minutes = t2- t1;
  } else if ((h1 > h2) || (h1 === h2 && m1 > m2)) {
    t1 = 24*60 - h1*60 - m1;
    t2 = h2*60 + m2;
    minutes = t2 + t1;
  } else if((h1 === h2 && m1 < m2)) {
    t1 = m1;
    t2 = m2;
    minutes = t2 - t1;
  }
  return minutes;
}

export const allActivitiesFinished = activities => {
  let statuses = [];
  for(let act in activities) {
    let status = activities[act].status;
    statuses.push(status);
  }
  return statuses.every(status => (status === 'completed' || status === 'failed'));
}
