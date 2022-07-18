import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import { RecordGraphsStyles } from '../styles/RecordsStyles';
import HorizontalGraphBarComponent from '../../../components/graphBar/HorizontalGraphBar';
import commonStyles from '../../../common/CommonStyles';
import textStyles from '../../../common/TextStyles';
import { BudgetSummaryItem } from '../../../types';
import useGraphBar from '../../../hooks/useGraphBar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../common/Colors';

const mockData: BudgetSummaryItem[] = [
  { categoryName: 'Restaurants', categoryValue: 119.52, categoryBudget: 200.00, budgetDifference: 80.48, hasBudget: true, isUnderBudget: true },
  { categoryName: 'Bills', categoryValue: 150.00, categoryBudget: 300.00, budgetDifference: 150.00, hasBudget: true, isUnderBudget: true },
  { categoryName: 'Groceries', categoryValue: 100.00, categoryBudget: 400.00, budgetDifference: 300.00, hasBudget: true, isUnderBudget: true },
  { categoryName: 'Gas', categoryValue: 250.00, categoryBudget: 500.00, budgetDifference: 250.00, hasBudget: true, isUnderBudget: true },
  { categoryName: 'Holly', categoryValue: 400.00, categoryBudget: 600.00, budgetDifference: 200.00, hasBudget: true, isUnderBudget: true },
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
                  {!item.isUnderBudget && (
                    <View style={{ paddingLeft: 5 }}>
                      <Icon name="exclamation-circle" style={{ color: Colors.expenseOrange }} />
                    </View>
                  )}
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