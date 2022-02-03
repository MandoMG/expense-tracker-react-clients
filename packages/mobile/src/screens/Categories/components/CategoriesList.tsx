import React from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Category, TabNavigationScreensParams } from '../../../types';
import CategoryListItem from './CategoryListItem';

type CategoryListNavigationProp = BottomTabNavigationProp<
  TabNavigationScreensParams
>

const CategoriesList = () => {
  const navigation = useNavigation<CategoryListNavigationProp>();

  const mockData: Category[] = [
    { id: 1, name: 'Bills', budget: 1400.00, hasBudget: true, isExpense: true },
    { id: 2, name: 'Car', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 3, name: 'Credit', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 4, name: 'Gas', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 5, name: 'Groceries', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 6, name: 'Holly', budget: 0.00, hasBudget: false, isExpense: true },
    { id: 7, name: 'Miscellaneous', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 8, name: 'Restaurants', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 9, name: 'Savings', budget: 460.00, hasBudget: true, isExpense: true },
    { id: 10, name: 'Services', budget: 460.00, hasBudget: true, isExpense: true },
  ];

  const handleOnPress = (item: Category) => {
    navigation.jumpTo('CategoryDetail', { category: item });
  };

  return (
    <View>
      <FlatList
        data={mockData}
        renderItem={({ item }: { item: Category }) => (
          <CategoryListItem item={item} handleOnPress={handleOnPress} />
        )}
      />
    </View >
  )
}

export default CategoriesList;
