import React from 'react';
import { Text, View } from 'react-native';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import GraphBarComponent from '../../components/graphBar/GraphBar';
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
         <View style={{
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
         }}>
            <Text style={{ color: 'white', fontSize: 18 }}> Records </Text>
         </View>
         <View>
            <BalanceSummaryComponent currentBalance={1420.69} income={2000} expenses={579.31} />
         </View>
         <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingTop: 30 }}>
            {mockData.map(item => (
               <GraphBarComponent percentage={item.percentage} categoryName={item.categoryName} />
            ))}
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