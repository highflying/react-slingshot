export interface FuelSavings {
  milesDriven: number;
  tradePpg: number;
  tradeMpg: number;
  newPpg: number;
  newMpg: number;
  milesDrivenTimeframe: string;
}

export interface Savings {
  monthly: string;
  annual: string;
  threeYear: string;
}

export interface StateFuelSavings {
  milesDriven: number;
  milesDrivenTimeframe: string;
  dateModified: string;
  necessaryDataIsProvidedToCalculateSavings: boolean;
  newMpg: number;
  tradeMpg: number;
  newPpg: number;
  tradePpg: number;
  savings: Savings;
  [key: string]: number | string | boolean | Savings;
}

export interface State {
  fuelSavings: StateFuelSavings;
}

// export interface SaveFuelSavingsAction {
//   type: SaveFuelSavings;
//   dateModified: string;
//   settings: FuelSavings;
// }

// export interface CalcFuelSavingsAction {
//   type: CalculateFuelSavings;
//   dateModified: string;
//   settings: FuelSavings;
//   fieldName: string;
//   value: number | string;
// }
