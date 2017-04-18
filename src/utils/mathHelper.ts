class MathHelper {
  public static roundNumber(numberToRound: number, numberOfDecimalPlaces: number = 2): number {
    if (numberToRound === 0) {
      return 0;
    }

    if (!numberToRound) {
      return 0;
    }

    const scrubbedNumber: number = parseFloat(numberToRound.toString().replace('$', '').replace(',', ''));
    return Math.round(scrubbedNumber * Math.pow(10, numberOfDecimalPlaces)) / Math.pow(10, numberOfDecimalPlaces);
  }

  public static addArray(values: number[]) { // adds array of values passed.
    const total = values.reduce((previousValue: number, currentValue: number) => {
      return previousValue
        + this.convertToPennies(currentValue); // do math in pennies to assure accuracy.
    }, 0);

    return total / 100; // convert back into dollars
  }

  public static convertToPennies(value: number): number {
    if (value === 0) {
      return 0;
    }

    let dollarValue = value;
    dollarValue = this.roundNumber(dollarValue, 2); // round to 2 decimal places.
    const dollarValueContainsDecimal = (dollarValue.toString().indexOf('.') !== -1);
    return (dollarValueContainsDecimal)
      ? parseInt(dollarValue.toString().replace('.', ''), 10)
      : dollarValue * 100;
  }
}

export default MathHelper;
