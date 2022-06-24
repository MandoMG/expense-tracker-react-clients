import React, { useState, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../common/Colors';
import commonStyles from '../../common/CommonStyles';
import BalanceSummaryComponent from '../../components/balance/BalanceSummary';
import ScreenHeaderComponent from '../../components/headers/ScreenHeader';
import CurrentDateSubtitle from '../../components/subtitles/CurrentDateSubtitle';
import AddEditRecordModal from './components/AddEditRecordModal';
import RecordList from './components/RecordList';
import RecordsGraphs from './components/RecordsGraphs';
import useRecords from './hooks/useRecords';
import { Record } from '../../types';

const Records = () => {
   const { getRecordsInfo, recordsInfo, saveRecord, deleteRecord } = useRecords();
   const [shouldOpenModal, setShouldOpenModal] = useState(false);
   const [isBudgetSelected, setIsBudgetSelected] = useState<boolean>(true);
   const selectedRecord = useRef<Record>();

   const onTouchableTitlePress = (isBudget: boolean) => {
      setIsBudgetSelected(isBudget);
   };

   const onAddPress = () => {
      setShouldOpenModal(true);
   };

   const onRecordPress = (item: Record) => {
      selectedRecord.current = item;
      setShouldOpenModal(true);
   }

   const onRecordDelete = async (recordId: number) => {
      await deleteRecord(recordId);
      await getRecordsInfo();
   }

   const handleClose = () => {
      setShouldOpenModal(false);
      selectedRecord.current = undefined;
   }

   const handleOnSave = async (record: Record, recordId?: number) => {
      await saveRecord(record, recordId);
      setShouldOpenModal(false);
      selectedRecord.current = undefined;
      await getRecordsInfo();
   }

   const rightHeaderAction = {
      onPress: onAddPress,
      title: 'Add',
      isIcon: false
   };

   return (
      <SafeAreaView>
         <ScreenHeaderComponent title={recordsInfo?.featureLabels.title || ''} rightHeaderAction={rightHeaderAction} />
         <CurrentDateSubtitle isTouchable />
         <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <View>
               <BalanceSummaryComponent
                  currentBalance={recordsInfo?.pillsData.currentBalance}
                  income={recordsInfo?.pillsData.income}
                  expenses={recordsInfo?.pillsData.expenses}
               />
            </View>
            <View style={commonStyles.flexRow}>
               <TouchableOpacity style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }} onPress={() => onTouchableTitlePress(true)}>
                  <Text style={[commonStyles.sectionTitle, { color: isBudgetSelected ? Colors.expenseOrange : Colors.black }]}>
                     {recordsInfo?.featureLabels.budgets}
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20 }} onPress={() => onTouchableTitlePress(false)}>
                  <Text style={[commonStyles.sectionTitle, { color: isBudgetSelected ? Colors.black : Colors.expenseOrange }]}>
                     {recordsInfo?.featureLabels.activity}
                  </Text>
               </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: 40 }}>
               {isBudgetSelected ? (
                  <RecordsGraphs budgetGraphData={recordsInfo?.currentBudgetData} />
               ) : (
                  <View style={commonStyles.listWrapper}>
                     <RecordList
                        onPress={onRecordPress}
                        onDelete={onRecordDelete}
                        activityData={recordsInfo?.recordItemData} />
                  </View>
               )}
            </View>
         </ScrollView>
         {shouldOpenModal && (
            <AddEditRecordModal record={selectedRecord.current} handleClose={handleClose} handleSave={handleOnSave} />
         )}
      </SafeAreaView>
   )
};

export default Records;