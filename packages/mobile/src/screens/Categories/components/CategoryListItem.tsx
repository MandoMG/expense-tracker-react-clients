import React from 'react';
import {TouchableOpacity, Text, View, AlertButton, Alert} from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {BudgetSummaryItem} from '../../../types';
import commonStyles from '../../../common/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface CategoryItemProps {
  item: BudgetSummaryItem;
  handleOnPress: (item: BudgetSummaryItem) => void;
  onDelete: (categoryId: string) => void;
}

interface BudgetTextProps {
  summaryItem: BudgetSummaryItem;
}

const shouldShowBudgetData = (categoryItem: BudgetSummaryItem) => {
  if (!categoryItem) {
    return false;
  }

  return !categoryItem.isIncome || categoryItem.hasBudget;
};

const BudgetText = ({summaryItem}: BudgetTextProps) => {
  return summaryItem.hasBudget ? (
    <View style={commonStyles.flexRow}>
      <Icon
        name="circle"
        color={summaryItem.isUnderBudget ? '#14a023' : '#c82d1e'}
        style={{marginHorizontal: 5, marginTop: 3}}
        solid
      />
      <Text style={commonStyles.listItemSubText}>{`${TextUtil.formatCurrency(
        summaryItem.budgetDifference,
      )} ${summaryItem.isUnderBudget ? 'under' : 'over'} budget`}</Text>
    </View>
  ) : (
    <View style={commonStyles.flexRow}>
      <Text style={commonStyles.listItemSubText}>{'No Budget'}</Text>
    </View>
  );
};

const CategoryListItem = ({
  item,
  handleOnPress,
  onDelete,
}: CategoryItemProps) => {
  const confirmDelete = (categoryId: string) => {
    onDelete(categoryId);
  };

  const handleDelete = (item: BudgetSummaryItem) => {
    const title = 'Delete Category';
    const msg = 'Do you want to delete this category?';
    const cancelButton: AlertButton = {text: 'Cancel'};
    const confirmButton: AlertButton = {
      text: 'Confirm',
      onPress: () => confirmDelete(item.id || ''),
    };

    const buttons: AlertButton[] = [cancelButton, confirmButton];
    Alert.alert(title, msg, buttons);
  };

  return (
    <TouchableOpacity
      style={commonStyles.listItemWrapper}
      onPress={() => handleOnPress(item)}
      onLongPress={() => handleDelete(item)}>
      <View style={commonStyles.listItemLeftColumn}>
        <Text style={commonStyles.listItemMainText}>{item.categoryName}</Text>
        {shouldShowBudgetData(item) && (
          <Text style={commonStyles.listItemSubText}>
            {TextUtil.formatCurrency(item.categoryValue)}
          </Text>
        )}
      </View>
      <View style={commonStyles.listItemRightColumn}>
        <Text style={commonStyles.listItemMainText}>
          {TextUtil.formatCurrency(item.categoryBudget)}
        </Text>
        <BudgetText summaryItem={item} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryListItem;
