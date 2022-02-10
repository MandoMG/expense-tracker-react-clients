import React from 'react';
import { ScrollView, View } from 'react-native';
import commonStyles from '../../common/CommonStyles';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import RecordList from './components/RecordList';
import RecordsGraphs from './components/RecordsGraphs';

const Records = () => {
   return (
      <View style={commonStyles.flexOne}>
         <ScreenHeaderComponent title='Records' />
         <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <View>
               <BalanceSummaryComponent currentBalance={1420.69} income={2000} expenses={579.31} />
            </View>
            <RecordsGraphs />
            <View style={commonStyles.listWrapper}>
               <RecordList />
            </View>
         </ScrollView>
      </View>
   )
};

export default Records;