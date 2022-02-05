import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';

interface IncomeExpensePillProps {
  value: number;
  isExpense?: boolean
}

const IncomeExpensePill = ({ value, isExpense }: IncomeExpensePillProps) => {
  const title = isExpense ? 'Expenses' : 'Income';

  return (
    <View style={isExpense ? style.expensePillWrapper : style.incomePillWrapper}>
      <View style={{
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
        <Text style={{ color: 'white', fontSize: 14 }}> {title} </Text>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>{TextUtil.formatCurrency(value, 0)}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  expensePillWrapper: {
    flex: 1,
    backgroundColor: '#ff6937',
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 25,
    elevation: 20,
  },
  incomePillWrapper: {
    flex: 1,
    backgroundColor: '#8132ff',
    marginRight: 10,
    marginTop: 20,
    borderRadius: 25,
    elevation: 20,
  }
});

export default IncomeExpensePill;