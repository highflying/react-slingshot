import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreatorsMapObject, Dispatch } from 'redux';
import { calculateFuelSavings, saveFuelSavings } from '../actions/fuelSavingsActions';
import FuelSavingsForm from '../components/FuelSavingsForm';
import { FuelSavings, State, StateFuelSavings } from '../interfaces';

interface OwnProps {
  saveFuelSavings: (savings: FuelSavings) => void;
  calculateFuelSavings: (savings: FuelSavings, name: string, value: any) => void;
  fuelSavings: StateFuelSavings;
}

export const FuelSavingsPage = (props: OwnProps) => {
  return (
    <FuelSavingsForm
      saveFuelSavings={props.saveFuelSavings}
      calculateFuelSavings={props.calculateFuelSavings}
      fuelSavings={props.fuelSavings}
    />
  );
};

function mapStateToProps(state: State): { fuelSavings: StateFuelSavings } {
  return {
    fuelSavings: state.fuelSavings,
  };
}

export default connect(
  mapStateToProps,
  {saveFuelSavings, calculateFuelSavings},
)(FuelSavingsPage) as React.ComponentClass<void>;
