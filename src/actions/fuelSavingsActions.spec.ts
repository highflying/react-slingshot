import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './fuelSavingsActions';

import * as MockDate from 'mockdate';

import { IStateFuelSavings } from '../interfaces';
import {getFormattedDateTime} from '../utils/dateHelper';

describe('Actions', () => {
  let dateModified: string;
  beforeAll(() => {
    MockDate.set(new Date());
    dateModified = getFormattedDateTime();
  });
  afterAll(() => MockDate.reset());

  const appState: IStateFuelSavings = {
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
  };

  it('should create an action to save fuel savings', () => {
    const dispatch = jest.fn();
    const expected = {
      dateModified,
      settings: appState,
      type: ActionTypes.SAVE_FUEL_SAVINGS,
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.saveFuelSavings(appState))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.saveFuelSavings(appState)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to calculate fuel savings', () => {
    const fieldName = 'newMpg';
    const value = 100;
    const actual = ActionCreators.calculateFuelSavings(appState, fieldName, value);
    const expected = {
      dateModified,
      fieldName,
      settings: appState,
      type: ActionTypes.CALCULATE_FUEL_SAVINGS,
      value,
    };

    expect(actual).toEqual(expected); // Notice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });
});
