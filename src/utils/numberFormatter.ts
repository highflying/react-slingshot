import MathHelper from './mathHelper';

class NumberFormatter {
  public static getCurrencyFormattedNumber(value: number): string {
    if (value === null) {
      return '';
    }

    return '$' + this.getFormattedNumber(value); // eslint-disable-line prefer-template
  }

  public static getFormattedNumber(value: number): string {
    if (value === 0) {
      return '0';
    }

    if (!value) {
      return '';
    }

    const roundedValue = MathHelper.roundNumber(value, 2); // round if more than 2 decimal points

    // add commas for 1,000's. RegEx from
    // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

    const roundedValueStr = roundedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const roundedValueContainsDecimalPlace = (roundedValueStr.indexOf('.') !== -1);

    if (roundedValueContainsDecimalPlace) {
      const numbersToTheRightOfDecimal = roundedValueStr.split('.')[1];

      switch (numbersToTheRightOfDecimal.length) {
        case 0:
          return roundedValueStr.replace('.', ''); // no decimal necessary since no numbers after decimal
        case 1:
          return `${roundedValue}0`;
        default:
          return roundedValueStr;
      }
    }
    return roundedValueStr;
  }

  public static scrubFormatting(value: string): string {
    return value.toString().replace('$', '').replace(',', '').replace('.', '');
  }

}

export default NumberFormatter;
