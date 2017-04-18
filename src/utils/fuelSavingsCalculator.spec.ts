import { IFuelSavings } from '../interfaces';
import FuelSavingsCalculator from './fuelSavingsCalculator';

describe('Fuel Savings Calculator', () => {
  describe('necessaryDataIsProvidedToCalculateSavings', () => {
    it('returns false when necessary data isn\'t provided', () => {
      // arrange
      const settings: IFuelSavings = {
        milesDriven: null,
        milesDrivenTimeframe: null,
        newMpg: 20,
        newPpg: null,
        tradeMpg: null,
        tradePpg: null,
      };

      // assert
      expect(FuelSavingsCalculator.necessaryDataIsProvidedToCalculateSavings(settings)).toEqual(false);
    });

    it('returns true when necessary data is provided', () => {
      // arrange
      const settings: IFuelSavings = {
        milesDriven: 100,
        milesDrivenTimeframe: null,
        newMpg: 20,
        newPpg: 1.50,
        tradeMpg: 10,
        tradePpg: 1.50,
      };

      // assert
      expect(FuelSavingsCalculator.necessaryDataIsProvidedToCalculateSavings(settings)).toEqual(true);
    });
  });

  describe('milesPerMonth', () => {
    it('converts a weekly timeframe to a monthly timeframe', () => {
      // arrange
      const milesPerWeek = 100;

      // act
      const milesPerMonth = FuelSavingsCalculator.calculateMilesDrivenPerMonth(milesPerWeek, 'week');

      // assert
      expect(milesPerMonth).toEqual(433.3333333333333);
    });

    it('returns a monthly timeframe untouched', () => {
      // arrange
      const milesPerMonth = 300;

      // act
      const milesPerMonthCalculated = FuelSavingsCalculator.calculateMilesDrivenPerMonth(milesPerMonth, 'month');

      // assert
      expect(milesPerMonthCalculated).toEqual(milesPerMonth);
    });

    it('converts a yearly timeframe to a monthly timeframe', () => {
      // arrange
      const milesPerYear = 1200;

      // act
      const milesPerMonth = FuelSavingsCalculator.calculateMilesDrivenPerMonth(milesPerYear, 'year');

      // assert
      expect(milesPerMonth).toEqual(100);
    });

    it('throws an error on invalid timeFrame', () => {
      // arrange
      const milesPerYear = 1200;

        // act & assert
      expect(() => FuelSavingsCalculator.calculateMilesDrivenPerMonth(milesPerYear, 'minute'))
        .toThrow('Unknown milesDrivenTimeframe passed: minute');
    });
  });

  describe('calculateSavingsPerMonth', () => {
    it('returns 29.93 in savings per month with these settings', () => {
      // arrange
      const settings: IFuelSavings = {
        milesDriven: 120,
        milesDrivenTimeframe: 'week',
        newMpg: 38,
        newPpg: 3.75,
        tradeMpg: 24,
        tradePpg: 3.75,
      };

      // act
      const savingsPerMonth = FuelSavingsCalculator.calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).toEqual(29.93);
    });

    it('returns 40.83 in savings per month with these settings', () => {
      // arrange
      const settings: IFuelSavings = {
        milesDriven: 550,
        milesDrivenTimeframe: 'month',
        newMpg: 38,
        newPpg: 3.75,
        tradeMpg: 24,
        tradePpg: 4.15,
      };

      // act
      const savingsPerMonth = FuelSavingsCalculator.calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).toEqual(40.83);
    });

    it('returns -157.12 in loss per month with these settings', () => {
      // arrange
      const settings: IFuelSavings = {
        milesDriven: 14550,
        milesDrivenTimeframe: 'year',
        newMpg: 18,
        newPpg: 3.75,
        tradeMpg: 40,
        tradePpg: 3.15,
      };

      // act
      const savingsPerMonth = FuelSavingsCalculator.calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).toEqual(-157.12);
    });

    it('returns 0 per month with these settings', () => {
      // arrange
      const settings: IFuelSavings = {
        milesDriven: 0,
        milesDrivenTimeframe: 'year',
        newMpg: 18,
        newPpg: 3.75,
        tradeMpg: 40,
        tradePpg: 3.15,
      };

      // act
      const savingsPerMonth = FuelSavingsCalculator.calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).toEqual(0);
    });
  });
});
