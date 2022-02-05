import React from 'react';
import { FlatList, Text, View } from 'react-native';
import GraphBarComponent from '../../../components/graphBar/GraphBar';
import commonStyles from '../../../styles/CommonStyles';

const mockData = [
  { categoryName: 'Restaurants', percentage: 40 },
  { categoryName: 'Bills', percentage: 70 },
  { categoryName: 'Groceries', percentage: 30 },
  { categoryName: 'Streaming', percentage: 50 },
];

const RecordsGraphs = () => {
  return (
    <View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={commonStyles.sectionTitle}> Budgets </Text>
      </View>
      <FlatList
        horizontal
        data={mockData}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 20, paddingBottom: 15 }}
        renderItem={({ item }) => (
          <GraphBarComponent percentage={item.percentage} categoryName={item.categoryName} />
        )}
      />
    </View>
  );
};

export default RecordsGraphs;