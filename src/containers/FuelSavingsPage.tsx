import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import FuelSavingsForm from '../components/FuelSavingsForm';
import { IFuelSavings, IState, IStateFuelSavings } from '../interfaces';

interface IActions {
  saveFuelSavings: (savings: IFuelSavings) => never;
  calculateFuelSavings: (savings: IFuelSavings, name: string, value: any) => never;
}

interface IOwnProps {
  actions: IActions;
  fuelSavings: IStateFuelSavings;
}

export const FuelSavingsPage = (props: IOwnProps) => {
  return (
    <FuelSavingsForm
      saveFuelSavings={props.actions.saveFuelSavings}
      calculateFuelSavings={props.actions.calculateFuelSavings}
      fuelSavings={props.fuelSavings}
    />
  );
};

function mapStateToProps(state: IState) {
  return {
    fuelSavings: state.fuelSavings,
  };
}

function mapDispatchToProps(dispatch: (param: any) => {}) {
  return {
    actions: bindActionCreators(actions as any, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FuelSavingsPage);
