import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import GraphBarComponent from '../../components/graphBar/GraphBar';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import RecordList from './components/RecordList';
import RecordsGraphs from './components/RecordsGraphs';

const Records = () => {
   return (
      <View style={{ flex: 1 }}>
         <ScreenHeaderComponent title='Records' />
         <ScrollView>
            <View>
               <BalanceSummaryComponent currentBalance={1420.69} income={2000} expenses={579.31} />
            </View>
            <RecordsGraphs />
            <View style={{
               flex: 1,
               marginTop: 10,
               borderRadius: 15
            }}>
               <RecordList />
            </View>
         </ScrollView>
      </View>
   )
};

export default Records;