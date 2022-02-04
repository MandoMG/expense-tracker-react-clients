import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const RecordList = () => {
   const mockData = [
      { id: 1, description: 'Rent', categoryName: 'Bills', date: '01/01/2022', amount: 1070.58, isExpense: true },
      { id: 2, description: 'AT&T', categoryName: 'Bills', date: '01/01/2022', amount: 60.10, isExpense: true },
      { id: 3, description: 'Netflix', categoryName: 'Streaming Services', date: '01/01/2022', amount: 19.99, isExpense: true },
      { id: 4, description: 'FANG Paycheck', categoryName: 'Paycheck', date: '01/02/2022', amount: 3800.98, isExpense: true },
      { id: 5, description: 'Best Buy', categoryName: 'Credit Cards', date: '01/02/2022', amount: 200.00, isExpense: true },
      { id: 6, description: 'Grande', categoryName: 'Bills', date: '01/03/2022', amount: 58.29, isExpense: true },
   ];

   return (
      <View>
         <View style={{ paddingVertical: 10 }}>
            <FlatList
               data={mockData}
               renderItem={({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 20 }}>
                     <View style={{ flex: 1, paddingVertical: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.description}</Text>
                        <Text style={{ color: '#FFFFFF' }}>{item.date}</Text>
                     </View>
                     <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontWeight: 'bold' }}>{TextUtil.formatCurrency(item.amount)}</Text>
                        <Text style={{ color: '#FFFFFF' }}>{item.categoryName}</Text>
                     </View>
                  </View>
               )}
            />
         </View>
      </View >
   )

}

export default RecordList;