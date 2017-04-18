export interface IFuelSavings {
  milesDriven: number;
  tradePpg: number;
  tradeMpg: number;
  newPpg: number;
  newMpg: number;
  milesDrivenTimeframe: string;
}

export interface ISavings {
  monthly: string;
  annual: string;
  threeYear: string;
}

export interface IStateFuelSavings {
  milesDriven: number;
  milesDrivenTimeframe: string;
  dateModified: string;
  necessaryDataIsProvidedToCalculateSavings: boolean;
  newMpg: number;
  tradeMpg: number;
  newPpg: number;
  tradePpg: number;
  savings: ISavings;
  [key: string]: number | string | boolean | ISavings;
}

export interface IState {
  fuelSavings: IStateFuelSavings;
}

export interface IFuelSavingsAction {
  dateModified?: string;
  fieldName?: string;
  value?: number | string;
  type: string;
}
