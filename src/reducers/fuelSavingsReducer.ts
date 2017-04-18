import * as objectAssign from 'object-assign';
import {CALCULATE_FUEL_SAVINGS, SAVE_FUEL_SAVINGS} from '../constants/actionTypes';
import { IFuelSavingsAction, IStateFuelSavings } from '../interfaces';
import FuelSavingsCalculator from '../utils/fuelSavingsCalculator';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(state = initialState.fuelSavings, action: IFuelSavingsAction) {
  let newState: IStateFuelSavings;

  switch (action.type) {
    case SAVE_FUEL_SAVINGS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {dateModified: action.dateModified});

    case CALCULATE_FUEL_SAVINGS:
      newState = objectAssign({}, state) as IStateFuelSavings;
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
