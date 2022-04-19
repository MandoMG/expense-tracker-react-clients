import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import { RecordGraphsStyles } from '../styles/RecordsStyles';
import HorizontalGraphBarComponent from '../../../components/graphBar/HorizontalGraphBar';
import commonStyles from '../../../common/CommonStyles';
import textStyles from '../../../common/TextStyles';
import { BudgetSummaryItem } from '../../../types';
import useGraphBar from '../../../hooks/useGraphBar';

const mockData = [
  { id: 1, categoryName: 'Restaurants', currentTotal: 119.52, totalBudget: 200.00, percentage: 60 },
  { id: 2, categoryName: 'Bills', currentTotal: 302.52, totalBudget: 400.00, percentage: 75 },
  { id: 3, categoryName: 'Groceries', currentTotal: 411.19, totalBudget: 450.00, percentage: 91 },
  { id: 4, categoryName: 'Streaming Services', currentTotal: 108.66, totalBudget: 150.00, percentage: 72 },
  { id: 5, categoryName: 'Gas', currentTotal: 383.76, totalBudget: 460.00, percentage: 83 },
  { id: 6, categoryName: 'Restaurants', currentTotal: 119.52, totalBudget: 200.00, percentage: 60 },
  { id: 7, categoryName: 'Bills', currentTotal: 302.52, totalBudget: 400.00, percentage: 75 },
  { id: 8, categoryName: 'Groceries', currentTotal: 411.19, totalBudget: 450.00, percentage: 91 },
  { id: 9, categoryName: 'Streaming Services', currentTotal: 108.66, totalBudget: 150.00, percentage: 72 },
  { id: 10, categoryName: 'Gas', currentTotal: 383.76, totalBudget: 460.00, percentage: 83 },
];

interface RecordsGraphsProps {
  budgetGraphData?: BudgetSummaryItem[]
}


const RecordsGraphs = ({ budgetGraphData }: RecordsGraphsProps) => {
  const { getGraphPercentage } = useGraphBar();

  const getCategoryBudgetText = (item: BudgetSummaryItem) => {
    if (!item.hasBudget) {
      return 'No Budget Set';
    }

    return TextUtil.formatCurrency(item.categoryBudget);
  };

  return (
    !!budgetGraphData ? (
      <View>
        <FlatList
          data={budgetGraphData}
          scrollEnabled={false}
          contentContainerStyle={RecordGraphsStyles.graphFlatListContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={RecordGraphsStyles.graphFlatListItemWrapper}>
              <HorizontalGraphBarComponent
                percentage={getGraphPercentage(item)}
                categoryName={item.categoryName} />
              <View style={commonStyles.flexRow}>
                <Text style={[commonStyles.flexOne, textStyles.itemText]}>
                  {TextUtil.formatCurrency(item.categoryValue)}
                </Text>
                <Text style={textStyles.itemText}> {getCategoryBudgetText(item)} </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    ) : (<></>)
  );
};

export default RecordsGraphs;