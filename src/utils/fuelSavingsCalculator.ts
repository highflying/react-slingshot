import { FuelSavings, Savings, StateFuelSavings } from '../interfaces';
import mathHelper from './mathHelper';
import NumberFormatter from './numberFormatter';

// This file uses the factory function pattern instead of a class.
// Just showing an alternative to using a class.
// This declares a function with a private method.
// The public function returns an object literal.
// Could arguably be called FuelSavingCalculatorFactory.
export default class FuelSavingsCalculator {
  public static calculateMilesDrivenPerMonth(milesDriven: number, milesDrivenTimeframe: string) {
    const monthsPerYear = 12;
    const weeksPerYear = 52;

    switch (milesDrivenTimeframe) {
        case 'week':
          return (milesDriven * weeksPerYear) / monthsPerYear;
        case 'month':
          return milesDriven;
        case 'year':
          return milesDriven / monthsPerYear;
        default:
          throw new Error(`Unknown milesDrivenTimeframe passed: ${milesDrivenTimeframe}`);
      }
    }

    public static calculateSavings(settings: FuelSavings): Savings {
      const monthlySavings = this.calculateSavingsPerMonth(settings);

      return {
        annual: NumberFormatter.getCurrencyFormattedNumber(monthlySavings * 12).toString(),
        monthly: NumberFormatter.getCurrencyFormattedNumber(monthlySavings).toString(),
        threeYear: NumberFormatter.getCurrencyFormattedNumber(monthlySavings * 12 * 3).toString(),
      };
    }

    public static calculateSavingsPerMonth(settings: FuelSavings): number {
      if (!settings.milesDriven ) {
        return 0;
      }

      const milesDrivenPerMonth = this.calculateMilesDrivenPerMonth(
        settings.milesDriven, settings.milesDrivenTimeframe,
      );
      const tradeFuelCostPerMonth
        = this.calculateMonthlyCost(milesDrivenPerMonth, settings.tradePpg, settings.tradeMpg);
      const newFuelCostPerMonth = this.calculateMonthlyCost(milesDrivenPerMonth, settings.newPpg, settings.newMpg);
      const savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;

      return mathHelper.roundNumber(savingsPerMonth, 2);
    }

    public static necessaryDataIsProvidedToCalculateSavings(settings: FuelSavings): boolean {
      return settings.newMpg > 0
        && settings.tradeMpg > 0
        && settings.newPpg > 0
        && settings.tradePpg > 0
        && settings.milesDriven > 0;
    }

  private static calculateMonthlyCost(milesDrivenPerMonth: number, ppg: number, mpg: number): number {
    const gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
    return gallonsUsedPerMonth * ppg;
  }
}
