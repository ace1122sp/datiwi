import { combineReducers } from 'redux';
import { activeActivity } from './activeActivity';
import { activePlan } from './activePlan';
import { activeTimeUnit } from './activeTimeUnit';
import { activities } from './activities';
import { dataFailedToLoad } from './dataFailedToLoad';
import { dataIsLoading } from './dataIsLoading';
import { dataLoaded } from './dataLoaded';
import { dayEfficiency } from './dayEfficiency';
import { idCounterActivities } from './idCounterActivities';
import { idCounterTimeUnits } from './idCounterTimeUnits';
import { showingLibrary } from './showingLibrary';
import { showingMainPage } from './showingMainPage';
import { showTimeUnitsSettings } from './showTimeUnitsSettings';
import { timePoint } from './timePoint';
import { timeUnits } from './timeUnits';

const rootReducer = combineReducers({
  activeActivity,
  activePlan,
  activeTimeUnit,
  activities,
  dataFailedToLoad,
  dataIsLoading,
  dataLoaded,
  dayEfficiency,
  idCounterActivities,
  idCounterTimeUnits,
  showingLibrary,
  showingMainPage,
  showTimeUnitsSettings,
  timePoint,
  timeUnits
});

export default rootReducer;
