import { IState } from '../interfaces';

export default {
  fuelSavings: {
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
  },
} as IState;
