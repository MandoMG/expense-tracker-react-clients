import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import Colors from '../../common/Colors';
import { IncomeExpenseSummaryStyles } from './styles/BalancePillsStyles';

interface IncomeExpensePillProps {
  value: number;
  isExpense?: boolean
}

const IncomeExpensePill = ({ value, isExpense }: IncomeExpensePillProps) => {
  const title = isExpense ? 'Expenses' : 'Income';

  return (
    <View style={isExpense ? style.expensePillWrapper : style.incomePillWrapper}>
      <View style={IncomeExpenseSummaryStyles.textWrapper}>
        <Text style={IncomeExpenseSummaryStyles.labelText}> {title} </Text>
        <Text style={IncomeExpenseSummaryStyles.valueText}>{TextUtil.formatCurrency(value, 0)}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  expensePillWrapper: {
    flex: 1,
    backgroundColor: Colors.expenseOrange,
    marginTop: 20,
    borderRadius: 25,
    elevation: 20,
    shadowOpacity: 0.3,
  },
  incomePillWrapper: {
    flex: 1,
    backgroundColor: Colors.incomePurple,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 25,
    elevation: 20,
    shadowOpacity: 0.3,
  }
});

export default IncomeExpensePill;
