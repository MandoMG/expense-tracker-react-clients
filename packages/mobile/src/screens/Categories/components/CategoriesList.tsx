import { useNavigation } from '@react-navigation/native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';

const CategoriesList = () => {
  const navigation = useNavigation();

  const mockData = [
    { id: 1, description: 'Bills', budget: 1400.00, hasBudget: true, isExpense: true },
    { id: 2, description: 'Car', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 3, description: 'Credit', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 4, description: 'Gas', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 5, description: 'Groceries', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 6, description: 'Holly', budget: 0.00, hasBudget: false, isExpense: true },
    { id: 7, description: 'Miscellaneous', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 8, description: 'Restaurants', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 9, description: 'Savings', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 10, description: 'Services', budget: 460.00, hasBudget: true, isExpense: true },
  ];

  const handleOnPress = () => {
    // Handle navigation here
    // navigation.navigate('CategoryDetail');
  };

  return (
    <View>
      <FlatList
        data={mockData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleOnPress}>
            <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 20 }}>
              <View style={{ flex: 1, paddingVertical: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.description}</Text>
              </View>
              {item.hasBudget && (
                <View style={{ flex: 1, alignItems: 'flex-end', paddingVertical: 10 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{TextUtil.formatCurrency(item.budget)}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View >
  )
}

export default CategoriesList;
