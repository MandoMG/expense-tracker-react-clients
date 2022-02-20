import { MonthNames } from "../constants/CommonConstants";

const useDateUtil = () => {
  const getCurrentMonthYear = () => {
    const date = new Date();
    const currentMonthName = MonthNames[date.getMonth()];
    const currentYear = `${date.getFullYear()}`;

    return `${currentMonthName} ${currentYear}`
  };

  return { getCurrentMonthYear }
}

export default useDateUtil;