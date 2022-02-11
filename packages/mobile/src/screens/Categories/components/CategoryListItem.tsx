import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import { Category } from '../../../types';
import commonStyles from '../../../common/CommonStyles';

interface CategoryItemProps {
  item: Category;
  handleOnPress: (item: Category) => void;
}

const CategoryListItem = ({ item, handleOnPress }: CategoryItemProps) => {
  return (
    <TouchableOpacity onPress={() => handleOnPress(item)}>
      <View style={commonStyles.listItemWrapper}>
        <View style={commonStyles.listItemSingleLineLeftColumn}>
          <Text style={commonStyles.listItemMainText}>{item.name}</Text>
        </View>
        {item.hasBudget && (
          <View style={commonStyles.listItemSingleLineRightColumn}>
            <Text style={commonStyles.listItemMainText}>{TextUtil.formatCurrency(item.budget)}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CategoryListItem;