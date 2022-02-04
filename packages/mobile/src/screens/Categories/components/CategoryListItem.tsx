import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import { Category } from '../../../types';

interface CategoryItemProps {
  item: Category;
  handleOnPress: (item: Category) => void;
}

const CategoryListItem = ({ item, handleOnPress }: CategoryItemProps) => {
  return (
    <TouchableOpacity onPress={() => handleOnPress(item)}>
      <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 20 }}>
        <View style={{ flex: 1, paddingVertical: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.name}</Text>
        </View>
        {item.hasBudget && (
          <View style={{ flex: 1, alignItems: 'flex-end', paddingVertical: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{TextUtil.formatCurrency(item.budget)}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CategoryListItem;