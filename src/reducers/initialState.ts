import { State } from '../interfaces';

export default {
  fuelSavings: {
    dateModified: '',
    displayResults: false,
    milesDriven: 0,
    milesDrivenTimeframe: 'week',
    necessaryDataIsProvidedToCalculateSavings: false,
    newMpg: 0,
    newPpg: 0,
    savings: {
      annual: '',
      monthly: '',
      threeYear: '',
    },
    tradeMpg: 0,
    tradePpg: 0,
  },
} as State;
