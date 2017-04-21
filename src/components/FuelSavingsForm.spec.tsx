import { shallow } from 'enzyme';
import * as React from 'react';
import { StateFuelSavings } from '../interfaces';
import FuelSavingsForm from './FuelSavingsForm';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

describe('<FuelSavingsForm />', () => {
  it('should contain <FuelSavingsTextInput /> components', () => {
    // tslint:disable-next-line:no-empty
    const saveFuelSavings: any = () => {};
    // tslint:disable-next-line:no-empty
    const calculateFuelSavings: any = () => {};

    const fuelSavings: StateFuelSavings = {
      dateModified: '',
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: '',
        monthly: '',
        threeYear: '',
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    };

    const wrapper = shallow(
      <FuelSavingsForm
        saveFuelSavings={saveFuelSavings}
        calculateFuelSavings={calculateFuelSavings}
        fuelSavings={fuelSavings}
      />,
    );
    const allInputs = wrapper.find(FuelSavingsTextInput);

    expect(allInputs.length).toEqual(5);
    expect(allInputs.at(0).props().name).toEqual('newMpg');
    expect(allInputs.at(0).props().value).toEqual(fuelSavings.newMpg);
    expect(allInputs.at(1).props().name).toEqual('tradeMpg');
    expect(allInputs.at(1).props().value).toEqual(fuelSavings.tradeMpg);
    expect(allInputs.at(2).props().name).toEqual('newPpg');
    expect(allInputs.at(2).props().value).toEqual(fuelSavings.newPpg);
    expect(allInputs.at(3).props().name).toEqual('tradePpg');
    expect(allInputs.at(3).props().value).toEqual(fuelSavings.tradePpg);
    expect(allInputs.at(4).props().name).toEqual('milesDriven');
    expect(allInputs.at(4).props().value).toEqual(fuelSavings.milesDriven);
  });

  it('should contain options to change miles driven timeframe', () => {
    // tslint:disable-next-line:no-empty
    const saveFuelSavings: any = () => {};
    // tslint:disable-next-line:no-empty
    const calculateFuelSavings: any = () => {};

    const fuelSavings: StateFuelSavings = {
      dateModified: '',
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: '',
        monthly: '',
        threeYear: '',
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    };

    const wrapper = shallow(
      <FuelSavingsForm
        saveFuelSavings={saveFuelSavings}
        calculateFuelSavings={calculateFuelSavings}
        fuelSavings={fuelSavings}
      />,
    );
    const expectedOption1 = '<option value="week">Week</option>';
    const expectedOption2 = '<option value="month">Month</option>';
    const expectedOption3 = '<option value="year">Year</option>';

    expect(wrapper.find('select').childAt(0).html()).toEqual(expectedOption1);
    expect(wrapper.find('select').childAt(1).html()).toEqual(expectedOption2);
    expect(wrapper.find('select').childAt(2).html()).toEqual(expectedOption3);
  });

  it('should contain <FuelSavingsResults /> when necessary conditions are met', () => {
    // tslint:disable-next-line:no-empty
    const saveFuelSavings: any = () => {};
    // tslint:disable-next-line:no-empty
    const calculateFuelSavings: any = () => {};

    const fuelSavings: StateFuelSavings = {
      dateModified: '',
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: true,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: '120',
        monthly: '10',
        threeYear: '360',
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    };

    const wrapper = shallow(
      <FuelSavingsForm
        saveFuelSavings={saveFuelSavings}
        calculateFuelSavings={calculateFuelSavings}
        fuelSavings={fuelSavings}
      />,
    );
    const expected = <FuelSavingsResults savings={fuelSavings.savings} />;

    expect(wrapper.contains(expected)).toBeTruthy();
  });

  it('should not contain <FuelSavingsResults /> when necessary conditions are not met', () => {
    // tslint:disable-next-line:no-empty
    const saveFuelSavings: any = () => {};
    // tslint:disable-next-line:no-empty
    const calculateFuelSavings: any = () => {};

    const fuelSavings: StateFuelSavings = {
      dateModified: '',
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: '',
        monthly: '',
        threeYear: '',
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    };

    const wrapper = shallow(
      <FuelSavingsForm
        saveFuelSavings={saveFuelSavings}
        calculateFuelSavings={calculateFuelSavings}
        fuelSavings={fuelSavings}
      />,
    );
    const expected = <FuelSavingsResults savings={fuelSavings.savings} />;

    expect(wrapper.contains(expected)).toBeFalsy();
  });

  it('should handle form submit', () => {
    const saveFuelSavings: any = jest.fn();
    // tslint:disable-next-line:no-empty
    const calculateFuelSavings: any = () => {};

    const fuelSavings: StateFuelSavings = {
      dateModified: '',
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: '',
        monthly: '',
        threeYear: '',
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    };

    const wrapper = shallow(
      <FuelSavingsForm
        saveFuelSavings={saveFuelSavings}
        calculateFuelSavings={calculateFuelSavings}
        fuelSavings={fuelSavings}
      />,
    );

    expect(saveFuelSavings).not.toBeCalled();
    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveFuelSavings).toBeCalled();
  });

  it('should submit appState', () => {
    const saveFuelSavings: any = jest.fn();
    // tslint:disable-next-line:no-empty
    const calculateFuelSavings: any = () => {};

    const fuelSavings: StateFuelSavings = {
      dateModified: '',
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: '',
        monthly: '',
        threeYear: '',
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    };

    const wrapper = shallow(
      <FuelSavingsForm
        saveFuelSavings={saveFuelSavings}
        calculateFuelSavings={calculateFuelSavings}
        fuelSavings={fuelSavings}
      />,
    );

    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveFuelSavings).toBeCalledWith(fuelSavings);
  });

  it('should calculate fuel savings on text input change', () => {
    // tslint:disable-next-line:no-empty
    const saveFuelSavings: any = () => {};
    const calculateFuelSavings: any = jest.fn();

    const fuelSavings: StateFuelSavings = {
      dateModified: '',
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: '',
        monthly: '',
        threeYear: '',
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    };

    const wrapper = shallow(
      <FuelSavingsForm
        saveFuelSavings={saveFuelSavings}
        calculateFuelSavings={calculateFuelSavings}
        fuelSavings={fuelSavings}
      />,
    );

    expect(calculateFuelSavings).not.toBeCalled();
    wrapper.find(FuelSavingsTextInput).first().simulate('change');
    expect(calculateFuelSavings).toBeCalled();
  });

  it('should calculate fuel savings on miles driven timeframe change', () => {
    // tslint:disable-next-line:no-empty
    const saveFuelSavings: any = () => {};
    const calculateFuelSavings: any = jest.fn();

    const fuelSavings: StateFuelSavings = {
      dateModified: '',
      displayResults: false,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      necessaryDataIsProvidedToCalculateSavings: false,
      newMpg: 20,
      newPpg: 1.50,
      savings: {
        annual: '',
        monthly: '',
        threeYear: '',
      },
      tradeMpg: 10,
      tradePpg: 1.50,
    };

    const wrapper = shallow(
      <FuelSavingsForm
        saveFuelSavings={saveFuelSavings}
        calculateFuelSavings={calculateFuelSavings}
        fuelSavings={fuelSavings}
      />,
    );

    expect(calculateFuelSavings).not.toBeCalled();
    wrapper.find('select').simulate('change', { target: { value: 'year' } });
    expect(calculateFuelSavings).toBeCalledWith(fuelSavings, 'milesDrivenTimeframe', 'year');
  });
});
