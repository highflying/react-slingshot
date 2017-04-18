import * as React from 'react';
import { ISavings } from '../interfaces';
import NumberFormatter from '../utils/numberFormatter';

export default function FuelSavingsResults({ savings }: {savings: ISavings}) {
  const savingsExist = parseInt(NumberFormatter.scrubFormatting(savings.monthly), 10) > 0;
  const savingsClass = savingsExist ? 'savings' : 'loss';
  const resultLabel = savingsExist ? 'Savings' : 'Loss';

  return (
    <table>
      <tbody>
      <tr>
        <td className="fuel-savings-label">{resultLabel}</td>
        <td>
          <table>
            <tbody>
            <tr>
              <td>Monthly</td>
              <td>1 Year</td>
              <td>3 Year</td>
            </tr>
            <tr>
              <td className={savingsClass}>{savings.monthly}</td>
              <td className={savingsClass}>{savings.annual}</td>
              <td className={savingsClass}>{savings.threeYear}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  );
}
