import React from 'react';
import { Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';

interface BalanceSummaryProps {
   currentBalance: number;
   income: number;
   expenses: number;
}

const BalanceSummaryComponent = (props: BalanceSummaryProps) => {
   const { currentBalance, income, expenses } = props;

   return (
      <View>
         <View style={{
            paddingTop: 10,
            alignItems: 'center',
            justifyContent: 'flex-start',
         }}>
            <Text style={{ color: 'white', fontSize: 14 }}> Current Balance </Text>
            <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>{TextUtil.formatCurrency(currentBalance)}</Text>
         </View>
         <View style={{
            paddingTop: 15,
            paddingHorizontal: 20,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row'
         }}>
            <View style={{
               flex: 1,
               alignItems: 'flex-start',
               justifyContent: 'flex-start',
            }}>
               <Text style={{ color: 'white', fontSize: 14 }}> Income </Text>
               <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>{TextUtil.formatCurrency(income)}</Text>
            </View>
            <View style={{
               flex: 1,
               alignItems: 'flex-end',
               justifyContent: 'flex-end',
            }}>
               <Text style={{ color: 'white', fontSize: 14 }}> Expenses </Text>
               <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>{TextUtil.formatCurrency(expenses)}</Text>
            </View>
         </View>
      </View>
   )
}

export default BalanceSummaryComponent;