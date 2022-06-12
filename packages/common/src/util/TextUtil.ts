import { CurrencyTypes } from "../constants/CurrencyTypes";

export default class TextUtil {
   static formatCurrency(amount: number, precision: number = 2, currencyType?: string) {
      if (amount === undefined) {
         return 'Undef number';
      };

      let isNegativeNumber = false;
      let formattedValue;

      if (typeof amount === 'string') {
         const numAmount = Number(amount);
         formattedValue = Number.isInteger(numAmount) ? numAmount.toFixed(precision) : numAmount;
      } else {
         formattedValue = this.formatDecimals(amount);
      }

      if (formattedValue < 0) {
         isNegativeNumber = formattedValue < 0;
         formattedValue = Math.abs(Number(formattedValue));
      }

      switch (currencyType) {
         case CurrencyTypes.USD:
            return isNegativeNumber ? `($${formattedValue})` : `$${formattedValue}`;
         case CurrencyTypes.EUR:
            return isNegativeNumber ? `(€${formattedValue})` : `€${formattedValue}`;
         default:
            return isNegativeNumber ? `($${formattedValue})` : `$${formattedValue}`;
      }
   }

   static padNumber(unpaddedNumber: number): string {
      return String(unpaddedNumber).padStart(2, '0');
   }

   private static formatDecimals(value: number) {
      if (Number.isInteger(value)) {
         return value.toFixed(2);
      }

      const decimalPlaces = String(value).split('.')[1];
      return (decimalPlaces.length !== 2) ? value.toFixed(2) : value;
   }
}