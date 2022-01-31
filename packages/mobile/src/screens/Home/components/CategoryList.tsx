import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const CategoryList = () => {
   const mockData = [
      { id: 1, name: 'Restaurants', amount: 119.52, budgetDifference: 80.48, isUnderBudget: true },
      { id: 2, name: 'Bills', amount: 302.52, budgetDifference: 12.45, isUnderBudget: true },
      { id: 3, name: 'Groceries', amount: 411.19, budgetDifference: 11.19, isUnderBudget: false },
      { id: 4, name: 'Streaming Services', amount: 108.66, budgetDifference: 41.34, isUnderBudget: false },
      { id: 5, name: 'Groceries', amount: 411.19, budgetDifference: 11.19, isUnderBudget: false },
      { id: 6, name: 'Restaurants', amount: 119.52, budgetDifference: 80.48, isUnderBudget: true },
      { id: 7, name: 'Bills', amount: 302.52, budgetDifference: 12.45, isUnderBudget: true },
      { id: 8, name: 'Groceries', amount: 411.19, budgetDifference: 11.19, isUnderBudget: false },
      { id: 9, name: 'Streaming Services', amount: 108.66, budgetDifference: 41.34, isUnderBudget: false },
      { id: 10, name: 'Groceries', amount: 411.19, budgetDifference: 11.19, isUnderBudget: false },
      { id: 11, name: 'Restaurants', amount: 119.52, budgetDifference: 80.48, isUnderBudget: true },
      { id: 12, name: 'Bills', amount: 302.52, budgetDifference: 12.45, isUnderBudget: true },
      { id: 13, name: 'Groceries', amount: 411.19, budgetDifference: 11.19, isUnderBudget: false },
      { id: 14, name: 'Streaming Services', amount: 108.66, budgetDifference: 41.34, isUnderBudget: false },
      { id: 15, name: 'Groceries', amount: 411.19, budgetDifference: 11.19, isUnderBudget: false }
   ];

   return (
      <View style={{
         backgroundColor: 'white',
         marginHorizontal: 25,
         marginTop: 30,
         marginBottom: 50,
         borderRadius: 15
      }}>
         <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <FlatList
               data={mockData}
               renderItem={({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 10, borderBottomColor: '#CACACA', borderBottomWidth: 1 }}>
                     <View style={{ flex: 1, paddingVertical: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.name}</Text>
                     </View>
                     <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontWeight: 'bold' }}>{TextUtil.formatCurrency(item.amount)}</Text>
                        <Text style={{ color: '#707070' }}>{`${TextUtil.formatCurrency(item.budgetDifference)} ${item.isUnderBudget ? 'under' : 'over'} budget`}</Text>
                     </View>
                  </View>
               )}
            />
         </View>
      </View >
   )

}

export default CategoryList;