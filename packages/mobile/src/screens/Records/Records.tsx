import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../common/Colors';
import commonStyles from '../../common/CommonStyles';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import CurrentDateSubtitle from '../../components/subtitles/CurrentDateSubtitle';
import RecordList from './components/RecordList';
import RecordsGraphs from './components/RecordsGraphs';

const Records = () => {
   const [isBudgetSelected, setIsBudgetSelected] = useState<boolean>(true);

   const onTouchableTitlePress = (isBudget: boolean) => {
      setIsBudgetSelected(isBudget);
   };

   return (
      <View style={commonStyles.flexOne}>
         <ScreenHeaderComponent title='Records' />
         <CurrentDateSubtitle isTouchable />
         <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <View>
               <BalanceSummaryComponent currentBalance={1420.69} income={2000} expenses={579.31} />
            </View>
            <View style={commonStyles.flexRow}>
               <TouchableOpacity style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }} onPress={() => onTouchableTitlePress(true)}>
                  <Text style={[commonStyles.sectionTitle, { color: isBudgetSelected ? Colors.expenseOrange : Colors.black }]}> Budgets </Text>
               </TouchableOpacity>
               <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20 }} onPress={() => onTouchableTitlePress(false)}>
                  <Text style={[commonStyles.sectionTitle, { color: isBudgetSelected ? Colors.black : Colors.expenseOrange }]}> Activity </Text>
               </TouchableOpacity>
            </View>
            {isBudgetSelected ? (
               <RecordsGraphs />
            ) : (
               <View style={commonStyles.listWrapper}>
                  <RecordList />
               </View>
            )}
         </ScrollView>
      </View>
   )
};

export default Records;