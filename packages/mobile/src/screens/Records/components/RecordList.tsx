import { useDateUtil } from 'mandomg-expensetracker-common/src/hooks';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import { Record } from '../../../types';

interface ActivityListProps {
   activityData?: Record[];
}

const RecordList = ({ activityData }: ActivityListProps) => {
   const { constructDateStringFromDateObject } = useDateUtil();

   const RecordItem = ({ item }: any) => {
      return (
         <View style={commonStyles.listItemWrapper}>
            <View style={commonStyles.listItemLeftColumn}>
               <Text style={commonStyles.listItemMainText}>{item.description}</Text>
               <Text style={commonStyles.listItemSubText}>{constructDateStringFromDateObject(item.recordDate)}</Text>
            </View>
            <View style={commonStyles.listItemRightColumn}>
               <Text style={commonStyles.listItemMainText}>{TextUtil.formatCurrency(item.amount)}</Text>
               <Text style={commonStyles.listItemSubText}>{item.category}</Text>
            </View>
         </View>
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