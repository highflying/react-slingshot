import * as objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import { StateFuelSavings } from '../interfaces';
import FuelSavingsCalculator from '../utils/fuelSavingsCalculator';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(
  state = initialState.fuelSavings,
  action: types.Actions,
) {
  let newState: StateFuelSavings;

  switch (action.type) {
    case types.SAVE_FUEL_SAVINGS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {dateModified: action.dateModified});

    case types.CALCULATE_FUEL_SAVINGS:
      newState = objectAssign({}, state) as StateFuelSavings;
      newState[action.fieldName] = action.value;

      newState.necessaryDataIsProvidedToCalculateSavings
          = FuelSavingsCalculator.necessaryDataIsProvidedToCalculateSavings(newState);
      newState.dateModified = action.dateModified;

      if (newState.necessaryDataIsProvidedToCalculateSavings) {
        newState.savings = FuelSavingsCalculator.calculateSavings(newState);
      }

      return newState;

    default:
      return state;
  }
}
