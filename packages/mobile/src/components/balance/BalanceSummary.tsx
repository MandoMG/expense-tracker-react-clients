import React from 'react';
import { Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import IncomeExpensePill from './IncomeExpensePill';

interface BalanceSummaryProps {
   currentBalance: number;
   income: number;
   expenses: number;
}

const BalanceSummaryComponent = (props: BalanceSummaryProps) => {
   const { currentBalance, income, expenses } = props;

   return (
      <View>
         <View style={[{
            backgroundColor: '#323246',
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 25,
            elevation: 50,
         }]}>
            <View style={{
               paddingVertical: 15,
               paddingLeft: 20,
               alignItems: 'flex-start',
               justifyContent: 'flex-start',
            }}>
               <Text style={{ color: 'white', fontSize: 14 }}> Current Balance </Text>
               <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>{TextUtil.formatCurrency(currentBalance, 0)}</Text>
            </View>
         </View>
         <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <IncomeExpensePill value={income} />
            <IncomeExpensePill value={expenses} isExpense />
         </View>
      </View>
   )
}

export default BalanceSummaryComponent;