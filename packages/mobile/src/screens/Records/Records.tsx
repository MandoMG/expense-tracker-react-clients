import React, { useMemo, useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../common/Colors';
import commonStyles from '../../common/CommonStyles';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import CurrentDateSubtitle from '../../components/subtitles/CurrentDateSubtitle';
import AddEditRecordModal from './components/AddEditRecordModal';
import RecordList from './components/RecordList';
import RecordsGraphs from './components/RecordsGraphs';

const Records = () => {
   const [shouldOpenModal, setShouldOpenModal] = useState(false);
   const [isBudgetSelected, setIsBudgetSelected] = useState<boolean>(true);

   const onTouchableTitlePress = (isBudget: boolean) => {
      setIsBudgetSelected(isBudget);
   };

   const onAddPress = () => {
      setShouldOpenModal(true)
   };

   const rightHeaderAction = {
      onPress: onAddPress,
      title: 'Add',
      isIcon: false
   };

   const mockActivityData = [
      { id: 1, description: 'Rent', categoryName: 'Bills', date: '01/01/2022', amount: 1070.58, isExpense: true },
      { id: 2, description: 'AT&T', categoryName: 'Bills', date: '01/01/2022', amount: 60.10, isExpense: true },
      { id: 3, description: 'Netflix', categoryName: 'Streaming Services', date: '01/01/2022', amount: 19.99, isExpense: true },
      { id: 4, description: 'FANG Paycheck', categoryName: 'Paycheck', date: '01/02/2022', amount: 3800.98, isExpense: true },
      { id: 5, description: 'Best Buy', categoryName: 'Credit Cards', date: '01/02/2022', amount: 200.00, isExpense: true },
      { id: 6, description: 'Grande', categoryName: 'Bills', date: '01/03/2022', amount: 58.29, isExpense: true },
   ];

   return (
      <SafeAreaView>
         <ScreenHeaderComponent title='Records' rightHeaderAction={rightHeaderAction} />
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
            <View style={{ paddingBottom: 40 }}>
               {isBudgetSelected ? (
                  <RecordsGraphs />
               ) : (
                  <View style={commonStyles.listWrapper}>
                     <RecordList activityData={mockActivityData} />
                  </View>
               )}
            </View>
         </ScrollView>
         {shouldOpenModal && (
            <AddEditRecordModal handleClose={() => setShouldOpenModal(false)} handleSave={() => setShouldOpenModal(false)} />
         )}
      </SafeAreaView>
   )
};

export default Records;