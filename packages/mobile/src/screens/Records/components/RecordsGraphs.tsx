import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { RecordGraphsStyles } from '../styles/RecordsStyles';
import HorizontalGraphBarComponent from '../../../components/graphBar/HorizontalGraphBar';
import commonStyles from '../../../common/CommonStyles';
import textStyles from '../../../common/TextStyles';

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

const RecordsGraphs = () => {
  return (
    <View>
      <FlatList
        data={mockData}
        scrollEnabled={false}
        contentContainerStyle={RecordGraphsStyles.graphFlatListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={RecordGraphsStyles.graphFlatListItemWrapper}>
            <HorizontalGraphBarComponent percentage={item.percentage} categoryName={item.categoryName} />
            <View style={commonStyles.flexRow}>
              <Text style={[commonStyles.flexOne, textStyles.itemText]}> {'$119.52'} </Text>
              <Text style={textStyles.itemText}> {'$200.00'} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecordsGraphs;