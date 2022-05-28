import React from 'react';
import { FlatList, View } from 'react-native';
import { Category } from '../../../types';
import CategoryListItem from './CategoryListItem';

interface CategoriesListProps {
  categoryList: Category[];
  handleOnPress: (selectedItem: Category) => void;
}

const CategoriesList = ({ categoryList, handleOnPress }: CategoriesListProps) => {
  return (
    <View style={{ marginHorizontal: 20, paddingBottom: 20 }}>
      <FlatList
        data={categoryList}
        renderItem={({ item }: { item: Category }) => (
          <CategoryListItem item={item} handleOnPress={handleOnPress} />
        )}
      />
    </View >
  )
}

export default CategoriesList;
