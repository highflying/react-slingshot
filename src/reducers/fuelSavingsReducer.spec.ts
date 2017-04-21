import * as ActionTypes from '../constants/actionTypes';
import { StateFuelSavings } from '../interfaces';
import {getFormattedDateTime} from '../utils/dateHelper';
import reducer from './fuelSavingsReducer';

describe('Reducers::FuelSavings', () => {
  const getInitialState = () => {
    return {
      dateModified: '',
      displayResults: false,
      milesDriven: 0,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 0,
      newPpg: 0,
      savings: {
        annual: '',
        monthly: '',
        threeYear: '',
      },
      tradeMpg: 0,
      tradePpg: 0,
    } as StateFuelSavings;
  };

  const getAppState = () => {
    return {
      dateModified: null,
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: null,
        monthly: null,
        threeYear: null,
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    } as StateFuelSavings;
  };
  const dateModified = getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action as any)).toEqual(expected);
  });

  it('should handle SAVE_FUEL_SAVINGS', () => {
    const action: ActionTypes.SaveFuelSavingsAction = {
      type: ActionTypes.SAVE_FUEL_SAVINGS,
      dateModified,
      settings: getAppState(),
    };
    const expected = Object.assign(getAppState(), { dateModified }) as StateFuelSavings;

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle CALCULATE_FUEL_SAVINGS', () => {
    const action: ActionTypes.CalcFuelSavingsAction = {
      type: ActionTypes.CALCULATE_FUEL_SAVINGS,
      dateModified,
      settings: getAppState(),
      fieldName: 'newMpg',
      value: 30,
    };

    const expectedMpg = 30;
    const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };

    expect(reducer(getAppState(), action).newMpg).toEqual(expectedMpg);
    expect(reducer(getAppState(), action).savings).toEqual(expectedSavings);
  });
});
