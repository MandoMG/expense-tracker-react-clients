import { CurrencyTypes } from "../constants/CurrencyTypes";

export default class TextUtil {
   static formatCurrency(amount: number, currencyType?: string) {
      switch (currencyType) {
         case CurrencyTypes.USD:
            return `$${amount}`;
         case CurrencyTypes.EUR:
            return `€${amount}`;
         default:
            return `$${amount}`;
      }
   }
}