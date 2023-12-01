import React, {useState, useRef, useEffect, useMemo} from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../common/Colors';
import commonStyles from '../../common/CommonStyles';
import CurrentDateSubtitle from '../../components/subtitles/CurrentDateSubtitle';
import AddEditRecordModal from './components/AddEditRecordModal';
import RecordList from './components/RecordList';
import RecordsGraphs from './components/RecordsGraphs';
import useRecords from './hooks/useRecords';
import {Record} from '../../types';
import {useAppSelector as useSelector} from '../../redux/hooks';
import {selectIsRecordLoading} from '../../redux/slices/recordSlice';
import ScreenWrapper from '../../components/screenWrapper/ScreenWrapper';
import Summary from '../Home/components/Summary';
import {useNavigation} from '@react-navigation/native';
import {RecordScreenNavigationProp} from '../../navigators/NativeStackNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';

const isAndroid = Platform.OS === 'android';

const Records = () => {
  const navigation = useNavigation<RecordScreenNavigationProp>();
  const {getRecordsInfo, recordsInfo, saveRecord, deleteRecord} = useRecords();
  const isLoading = useSelector(selectIsRecordLoading);
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [isBudgetSelected, setIsBudgetSelected] = useState<boolean>(true);
  const selectedRecord = useRef<Record>();

  const headerStyle = useMemo(() => {
    return isAndroid
      ? commonStyles.androidHeaderText
      : commonStyles.iosHeaderText;
  }, [Platform]);

  const onTouchableTitlePress = (isBudget: boolean) => {
    setIsBudgetSelected(isBudget);
  };

  const onAddPress = () => {
    setShouldOpenModal(true);
  };

  const onRecordPress = (item: Record) => {
    selectedRecord.current = item;
    setShouldOpenModal(true);
  };

  const onRecordDelete = async (recordId: number) => {
    await deleteRecord(recordId);
    await getRecordsInfo();
  };

  const handleClose = () => {
    setShouldOpenModal(false);
    selectedRecord.current = undefined;
  };

  const handleOnSave = async (record: Record, recordId?: number) => {
    await saveRecord(record, recordId);
    setShouldOpenModal(false);
    selectedRecord.current = undefined;
    await getRecordsInfo();
  };

  const onPreviousMonthsTap = () => {
    navigation.navigate('PreviousMonths');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={onAddPress}>
            {isAndroid ? (
              <Icon style={headerStyle} name="plus" />
            ) : (
              <Text style={headerStyle}>Add</Text>
            )}
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <ScreenWrapper>
      <View>
        <CurrentDateSubtitle isTouchable />
        <Summary
          balance={recordsInfo?.pillsData.currentBalance}
          income={recordsInfo?.pillsData.income}
          expenses={recordsInfo?.pillsData.expenses}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {!isLoading ? (
            <>
              <View style={commonStyles.flexRow}>
                <TouchableOpacity
                  onPress={onPreviousMonthsTap}
                  style={{
                    backgroundColor: Colors.incomePurple,
                    flex: 1,
                    marginTop: 12,
                    marginHorizontal: 16,
                    paddingVertical: 12,
                    borderRadius: 12,
                    elevation: 50,
                    shadowOpacity: 0.5,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: Colors.white,
                      fontSize: 16,
                    }}>
                    View Previous Months Data
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={commonStyles.flexRow}>
                <TouchableOpacity
                  style={{flex: 1, marginHorizontal: 20, marginTop: 20}}
                  onPress={() => onTouchableTitlePress(true)}>
                  <Text
                    style={[
                      commonStyles.sectionTitle,
                      {
                        color: isBudgetSelected
                          ? Colors.expenseOrange
                          : Colors.black,
                      },
                    ]}>
                    {recordsInfo?.featureLabels.budgets}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginHorizontal: 20, marginTop: 20}}
                  onPress={() => onTouchableTitlePress(false)}>
                  <Text
                    style={[
                      commonStyles.sectionTitle,
                      {
                        color: isBudgetSelected
                          ? Colors.black
                          : Colors.expenseOrange,
                      },
                    ]}>
                    {recordsInfo?.featureLabels.activity}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{paddingBottom: 40}}>
                {isBudgetSelected ? (
                  <RecordsGraphs
                    budgetGraphData={recordsInfo?.currentBudgetData}
                  />
                ) : (
                  <View style={commonStyles.listWrapper}>
                    <RecordList
                      onPress={onRecordPress}
                      onDelete={onRecordDelete}
                      activityData={recordsInfo?.recordItemData}
                    />
                  </View>
                )}
              </View>
            </>
          ) : (
            <View
              style={{
                backgroundColor: Colors.appBackground,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 60,
              }}>
              <ActivityIndicator size="large" color={Colors.expenseOrange} />
            </View>
          )}
        </ScrollView>
        {shouldOpenModal && (
          <AddEditRecordModal
            record={selectedRecord.current}
            handleClose={handleClose}
            handleSave={handleOnSave}
          />
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Records;
