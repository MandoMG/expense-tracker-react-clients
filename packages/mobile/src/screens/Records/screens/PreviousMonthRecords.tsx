import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import RecordList from '../components/RecordList';
import {useAppSelector as useSelector} from '../../../redux/hooks';
import {
  selectIsRecordLoading,
  selectSelectedMonthRecords,
} from '../../../redux/slices/recordSlice';
import Colors from '../../../common/Colors';
import commonStyles from "../../../common/CommonStyles";

const PreviousMonthRecords = () => {
  const isLoading = useSelector(selectIsRecordLoading);
  const monthRecords = useSelector(selectSelectedMonthRecords);

  return isLoading ? (
    <View
      style={{
        backgroundColor: Colors.appBackground,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
      }}>
      <ActivityIndicator size="large" color={Colors.expenseOrange} />
    </View>
  ) : (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={commonStyles.listWrapper}>
        <RecordList
          activityData={monthRecords}
          onPress={() => {}}
          onDelete={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default PreviousMonthRecords;
