import React from 'react';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import { FlatList, Text, View } from 'react-native';
import commonStyles from '../../../common/CommonStyles';

const BudgetSummary = () => {
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
    { id: 14, name: 'Streaming Services', amount: 180.66, budgetDifference: 41.34, isUnderBudget: false },
    { id: 15, name: 'Groceries', amount: 411.19, budgetDifference: 11.19, isUnderBudget: false }
  ];

  const BudgetSummaryItem = ({ item }: any) => {
    return (
      <View style={commonStyles.listItemWrapper}>
        <View style={commonStyles.listItemSingleLineLeftColumn}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.name}</Text>
        </View>
        <View style={commonStyles.listItemRightColumn}>
          <Text style={{ fontWeight: 'bold' }}>{TextUtil.formatCurrency(item.amount)}</Text>
          <Text style={{ color: '#707070' }}>{`${TextUtil.formatCurrency(item.budgetDifference)} ${item.isUnderBudget ? 'under' : 'over'} budget`}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{
      marginTop: 20,
      marginHorizontal: 20,
      height: '95%'
    }}>
      <View>
        <Text style={commonStyles.sectionTitle}> Budget Summary </Text>
      </View>
      <View style={{ marginTop: 5, flex: 1 }}>
        <FlatList
          data={mockData}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item }) => (
            <BudgetSummaryItem item={item} />
          )}
        />
      </View>
    </View>
  );
};

export default BudgetSummary;