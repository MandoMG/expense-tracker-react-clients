import React from 'react';
import { FlatList, View } from 'react-native';
import {BudgetSummaryItem} from '../../../types';
import CategoryStyles from '../styles/CategoryStyles';
import CategoryListItem from './CategoryListItem';

interface CategoriesListProps {
  budgetList: BudgetSummaryItem[];
  handleOnPress: (selectedItem: BudgetSummaryItem) => void;
  onDelete: (categoryId: string) => void;
}

const CategoriesList = ({ budgetList, handleOnPress, onDelete }: CategoriesListProps) => {
  return (
    <View style={CategoryStyles.categoryListWrapper}>
      <FlatList
        data={budgetList}
        renderItem={({ item }: { item: BudgetSummaryItem }) => (
          <CategoryListItem item={item} handleOnPress={handleOnPress} onDelete={onDelete} />
        )}
      />
    </View >
  )
}

export default CategoriesList;
