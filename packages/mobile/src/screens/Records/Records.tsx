import React from 'react';
import { FlatList, Text, View } from 'react-native';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import GraphBarComponent from '../../components/graphBar/GraphBar';
import HeaderComponent from '../../components/header/Header';
import RecordList from './components/RecordList';

const Records = () => {
   const mockData = [
      { categoryName: 'Restaurants', percentage: 40 },
      { categoryName: 'Bills', percentage: 70 },
      { categoryName: 'Groceries', percentage: 30 },
      { categoryName: 'Streaming', percentage: 50 },
   ];

   return (
      <View style={{ flex: 1, backgroundColor: '#4285F4' }}>
         <HeaderComponent title='Records' />
         <View>
            <BalanceSummaryComponent currentBalance={1420.69} income={2000} expenses={579.31} />
         </View>
         <View>
            <FlatList
               horizontal
               data={mockData}
               contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 30 }}
               renderItem={({ item }) => (
                  <GraphBarComponent percentage={item.percentage} categoryName={item.categoryName} />
               )}
            />
         </View>
         <View style={{
            flex: 1,
            marginTop: 10,
            borderRadius: 15
         }}>
            <RecordList />
         </View>
      </View>
   )
};

export default Records;