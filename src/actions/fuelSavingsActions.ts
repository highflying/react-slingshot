import { Dispatch } from 'redux';

import * as types from '../constants/actionTypes';

import { ICalcFuelSavingsAction, IFuelSavings, ISaveFuelSavingsAction } from '../interfaces';
import {getFormattedDateTime} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function saveFuelSavings(settings: IFuelSavings): (dispatch: Dispatch<object>) => ISaveFuelSavingsAction {
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

export function calculateFuelSavings(settings: IFuelSavings, fieldName: string, value: number): ICalcFuelSavingsAction {
  return {
    dateModified: getFormattedDateTime(),
    type: types.CALCULATE_FUEL_SAVINGS,
    settings,
    fieldName,
    value,
  };
}
