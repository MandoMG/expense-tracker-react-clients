import { CurrencyTypes } from "../constants/CurrencyTypes";

export default class TextUtil {
   static formatCurrency(amount: number, precision: number = 2, currencyType?: string) {
      if (amount === undefined) {
         return 'Undef number';
      };

      let formattedValue;

      if (typeof amount === 'string') {
         const numAmount = Number(amount);
         formattedValue = Number.isInteger(numAmount) ? numAmount.toFixed(precision) : numAmount;
      } else {
         formattedValue = this.formatDecimals(amount);
      }

      switch (currencyType) {
         case CurrencyTypes.USD:
            return `$${formattedValue}`;
         case CurrencyTypes.EUR:
            return `€${formattedValue}`;
         default:
            return `$${formattedValue}`;
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