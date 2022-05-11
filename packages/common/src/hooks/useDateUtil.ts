import { MonthNames } from "../constants/CommonConstants";
import TextUtil from "../util/TextUtil";

const useDateUtil = () => {
  const constructDateStringFromDateObject = (date: Date) => {
    if (typeof date === 'string') {
      const dateObj = new Date(date);
      return `${dateObj.getUTCFullYear()}-${TextUtil.padNumber(dateObj.getUTCMonth() + 1)}-${TextUtil.padNumber(dateObj.getUTCDate())}`;
    }

    return `${date.getUTCFullYear()}-${TextUtil.padNumber(date.getUTCMonth() + 1)}-${TextUtil.padNumber(date.getUTCDate())}`;
  }

  const getCurrentMonthYear = () => {
    const date = new Date();
    const currentMonthName = MonthNames[date.getMonth()];
    const currentYear = `${date.getFullYear()}`;

    return `${currentMonthName} ${currentYear}`
  };

  return { constructDateStringFromDateObject, getCurrentMonthYear }
}

export default useDateUtil;