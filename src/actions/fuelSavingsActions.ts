import { Dispatch } from 'redux';

import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function saveFuelSavings(settings: object) {
  return (dispatch: Dispatch<object>) => {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      dateModified: getFormattedDateTime(),
      type: types.SAVE_FUEL_SAVINGS,
      settings,
    });
  };
}

export function calculateFuelSavings(settings: object, fieldName: string, value: number) {
  return {
    dateModified: getFormattedDateTime(),
    type: types.CALCULATE_FUEL_SAVINGS,
    settings,
    fieldName,
    value,
  };
}
