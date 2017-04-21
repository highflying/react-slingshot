import { FuelSavings } from '../interfaces';

export const SAVE_FUEL_SAVINGS = 'SAVE_FUEL_SAVINGS';
export const CALCULATE_FUEL_SAVINGS = 'CALCULATE_FUEL_SAVINGS';

type SaveFuelSavings = 'SAVE_FUEL_SAVINGS';
type CalculateFuelSavings = 'CALCULATE_FUEL_SAVINGS';
type Action = CalculateFuelSavings | SaveFuelSavings;

export interface SaveFuelSavingsAction {
  type: SaveFuelSavings;
  dateModified: string;
  settings: FuelSavings;
}

export interface CalcFuelSavingsAction {
  type: CalculateFuelSavings;
  dateModified: string;
  settings: FuelSavings;
  fieldName: string;
  value: number | string;
}

export type Actions = SaveFuelSavingsAction | CalcFuelSavingsAction;
