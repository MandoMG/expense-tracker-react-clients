import { MonthNames } from "../constants/CommonConstants";
import TextUtil from "../util/TextUtil";

const useDateUtil = () => {
  const constructDateStringFromDateObject = (date: Date) => {
    if (typeof date === "string") {
      const dateObj = new Date(date);
      return `${dateObj.getUTCFullYear()}-${TextUtil.padNumber(
        dateObj.getUTCMonth() + 1
      )}-${TextUtil.padNumber(dateObj.getUTCDate())}`;
    }

    return `${date.getUTCFullYear()}-${TextUtil.padNumber(
      date.getUTCMonth() + 1
    )}-${TextUtil.padNumber(date.getUTCDate())}`;
  };

  const getCurrentMonthYear = () => {
    const date = new Date();
    const currentMonthName = MonthNames[date.getMonth()];
    const currentYear = `${date.getFullYear()}`;

    return `${currentMonthName} ${currentYear}`;
  };

  const isTimestampValid = (timestamp: Date | null) => {
    if (!timestamp) {
      return false;
    }

    // Get the current time
    const currentTime = new Date();

    // Calculate the time 30 minutes ago
    const thirtyMinutesAgo = new Date(currentTime);
    thirtyMinutesAgo.setMinutes(currentTime.getMinutes() - 30);

    // Compare the provided date with the time 30 minutes ago
    return timestamp.getTime() > thirtyMinutesAgo.getTime();
  };

  return {
    constructDateStringFromDateObject,
    getCurrentMonthYear,
    isTimestampValid,
  };
};

export default useDateUtil;
