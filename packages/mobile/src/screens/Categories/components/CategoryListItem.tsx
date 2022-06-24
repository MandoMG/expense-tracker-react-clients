import React from 'react';
import { TouchableOpacity, Text, View, AlertButton, Alert } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import { Category } from '../../../types';
import commonStyles from '../../../common/CommonStyles';

interface CategoryItemProps {
  item: Category;
  handleOnPress: (item: Category) => void;
  onDelete: (categoryId: number) => void;
}

const CategoryListItem = ({ item, handleOnPress, onDelete }: CategoryItemProps) => {
  const confirmDelete = (categoryId: number) => {
    onDelete(categoryId);
  };

  const handleDelete = (item: Category) => {
    const title = 'Delete Category';
    const msg = 'Do you want to delete this category?';
    const cancelButton: AlertButton = { text: 'Cancel' };
    const confirmButton: AlertButton = { text: 'Confirm', onPress: () => confirmDelete(item._id || 0) };

    const buttons: AlertButton[] = [cancelButton, confirmButton];
    Alert.alert(title, msg, buttons)
  }

  return (
    <TouchableOpacity onPress={() => handleOnPress(item)} onLongPress={() => handleDelete(item)}>
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