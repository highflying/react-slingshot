import * as ActionTypes from '../constants/actionTypes';
import { IStateFuelSavings } from '../interfaces';
import {getFormattedDateTime} from '../utils/dateHelper';
import reducer from './fuelSavingsReducer';

describe('Reducers::FuelSavings', () => {
  const getInitialState = () => {
    return  {
      dateModified: null,
      displayResults: false,
      milesDriven: null,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: null,
      newPpg: null,
      savings: {
        annual: null,
        monthly: null,
        threeYear: null,
      },
      tradeMpg: null,
      tradePpg: null,
    } as IStateFuelSavings;
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
    } as IStateFuelSavings;
  };
  const dateModified = getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SAVE_FUEL_SAVINGS', () => {
    const action = { type: ActionTypes.SAVE_FUEL_SAVINGS, dateModified, settings: getAppState() };
    const expected = Object.assign(getAppState(), { dateModified }) as IStateFuelSavings;

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle CALCULATE_FUEL_SAVINGS', () => {
    const action = {
      dateModified,
      fieldName: 'newMpg',
      settings: getAppState(),
      type: ActionTypes.CALCULATE_FUEL_SAVINGS,
      value: 30,
    };

    const expectedMpg = 30;
    const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };

    expect(reducer(getAppState(), action).newMpg).toEqual(expectedMpg);
    expect(reducer(getAppState(), action).savings).toEqual(expectedSavings);
  });
});
