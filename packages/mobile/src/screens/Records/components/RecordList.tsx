import { useDateUtil } from 'mandomg-expensetracker-common/src/hooks';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React from 'react';
import { Alert, AlertButton, FlatList, Text, TouchableOpacity, View } from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import { Record } from '../../../types';

interface ActivityListProps {
   activityData?: Record[];
   onPress: (item: Record) => void;
   onDelete: (recordId: number) => void;
}

const RecordList = ({ activityData, onPress, onDelete }: ActivityListProps) => {
   const { constructDateStringFromDateObject } = useDateUtil();

   const confirmDelete = (recordId: number) => {
      onDelete(recordId);
   };

   const handleDelete = (item: Record) => {
      const title = 'Delete Record';
      const msg = 'Do you want to delete this record?';
      const cancelButton: AlertButton = { text: 'Cancel' };
      const confirmButton: AlertButton = { text: 'Confirm', onPress: () => confirmDelete(item._id || 0) };

      const buttons: AlertButton[] = [cancelButton, confirmButton];
      Alert.alert(title, msg, buttons)
   }

   const RecordItem = ({ item }: any) => {
      return (
         <TouchableOpacity
            style={commonStyles.listItemWrapper}
            onLongPress={() => handleDelete(item)}
            onPress={() => onPress(item)}>
            <View style={commonStyles.listItemLeftColumn}>
               <Text style={commonStyles.listItemMainText}>{item.description}</Text>
               <Text style={commonStyles.listItemSubText}>{constructDateStringFromDateObject(item.recordDate)}</Text>
            </View>
            <View style={commonStyles.listItemRightColumn}>
               <Text style={commonStyles.listItemMainText}>{TextUtil.formatCurrency(item.amount)}</Text>
               <Text style={commonStyles.listItemSubText}>{item.category}</Text>
            </View>
         </TouchableOpacity>
      );
   }

   return (
      !!activityData ? (
         <View >
            <View style={commonStyles.listBottomPadding}>
               <FlatList
                  data={activityData}
                  scrollEnabled={false}
                  renderItem={({ item }) => (
                     <RecordItem item={item} />
                  )}
               />
            </View>
         </View >
      ) : (<></>)
   )
}

export default React.memo(RecordList);