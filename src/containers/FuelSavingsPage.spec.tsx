import {shallow} from 'enzyme';
import * as React from 'react';
import FuelSavingsForm from '../components/FuelSavingsForm';
import {FuelSavingsPage} from './FuelSavingsPage';

describe('<FuelSavingsPage />', () => {
  it('should contain <FuelSavingsForm />', () => {
    const actions = {
      // tslint:disable-next-line:no-empty
      calculateFuelSavings: () => {},
      // tslint:disable-next-line:no-empty
      saveFuelSavings: () => {},
    };
    const fuelSavings = {};
    const wrapper = shallow(
      <FuelSavingsPage
        calculateFuelSavings={actions.calculateFuelSavings}
        saveFuelSavings={actions.saveFuelSavings}
        fuelSavings={fuelSavings as any}
      />,
    );

    expect(wrapper.find(FuelSavingsForm).length).toEqual(1);
  });
});
