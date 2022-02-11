import React from 'react';
import { Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import IncomeExpensePill from './IncomeExpensePill';
import { BalanceSummaryStyles } from './styles/BalancePillsStyles';

interface BalanceSummaryProps {
   currentBalance: number;
   income: number;
   expenses: number;
}

const BalanceSummaryComponent = (props: BalanceSummaryProps) => {
   const { currentBalance, income, expenses } = props;

   return (
      <View>
         <View style={BalanceSummaryStyles.balanceSummaryWrapper}>
            <View style={BalanceSummaryStyles.currentBalanceWrapper}>
               <Text style={BalanceSummaryStyles.labelText}> Current Balance </Text>
               <Text style={BalanceSummaryStyles.valueText}>{TextUtil.formatCurrency(currentBalance, 0)}</Text>
            </View>
         </View>
         <View style={BalanceSummaryStyles.incomeExpensePillsWrapper}>
            <IncomeExpensePill value={income} />
            <IncomeExpensePill value={expenses} isExpense />
         </View>
      </View>
   )
}

export default BalanceSummaryComponent;