import { StyleSheet } from "react-native";

export const BalanceSummaryStyles = StyleSheet.create({
  balanceSummaryWrapper: {
    backgroundColor: '#323246',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 25,
    elevation: 50,
  },
  currentBalanceWrapper: {
    paddingVertical: 15,
    paddingLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  incomeExpensePillsWrapper: { flexDirection: 'row', marginHorizontal: 20 },
  labelText: { color: 'white', fontSize: 14 },
  valueText: { color: 'white', fontSize: 36, fontWeight: 'bold' }
});

export const IncomeExpenseSummaryStyles = StyleSheet.create({
  textWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  labelText: { color: 'white', fontSize: 14 },
  valueText: { color: 'white', fontSize: 28, fontWeight: 'bold' }
});