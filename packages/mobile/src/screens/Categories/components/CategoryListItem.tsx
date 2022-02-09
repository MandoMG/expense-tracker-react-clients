import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import { Category } from '../../../types';
import commonStyles from '../../../styles/CommonStyles';

interface CategoryItemProps {
  item: Category;
  handleOnPress: (item: Category) => void;
}

const CategoryListItem = ({ item, handleOnPress }: CategoryItemProps) => {
  return (
    <TouchableOpacity onPress={() => handleOnPress(item)}>
      <View style={commonStyles.listItemWrapper}>
        <View style={commonStyles.listItemSingleLineLeftColumn}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.name}</Text>
        </View>
        {item.hasBudget && (
          <View style={commonStyles.listItemSingleLineRightColumn}>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{TextUtil.formatCurrency(item.budget)}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CategoryListItem;