import { CurrencyTypes } from "../constants/CurrencyTypes";

export default class TextUtil {
   static formatCurrency(amount: number, precision: number = 2, currencyType?: string) {
      const formattedValue = Number.isInteger(amount) ? amount.toFixed(precision) : amount;

      switch (currencyType) {
         case CurrencyTypes.USD:
            return `$${formattedValue}`;
         case CurrencyTypes.EUR:
            return `€${formattedValue}`;
         default:
            return `$${formattedValue}`;
      }
   }
}