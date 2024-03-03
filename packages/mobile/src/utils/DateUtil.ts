export const getNumberOfMonth = (month: string, returnIndex = false) => {
  const index = monthArray.indexOf(month.toLowerCase());
  return returnIndex ? index : index + 1;
};

const monthArray = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
