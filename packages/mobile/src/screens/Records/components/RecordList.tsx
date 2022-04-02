import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import { Record } from '../../../types';

interface ActivityListProps {
   activityData: Record[];
}

const RecordList = ({ activityData }: ActivityListProps) => {
   const RecordItem = ({ item }: any) => {
      return (
         <View style={commonStyles.listItemWrapper}>
            <View style={commonStyles.listItemLeftColumn}>
               <Text style={commonStyles.listItemMainText}>{item.description}</Text>
               <Text style={commonStyles.listItemSubText}>{item.date}</Text>
            </View>
            <View style={commonStyles.listItemRightColumn}>
               <Text style={commonStyles.listItemMainText}>{TextUtil.formatCurrency(item.amount)}</Text>
               <Text style={commonStyles.listItemSubText}>{item.categoryName}</Text>
            </View>
         </View>
      );
   }

   return (
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
   )

}

export default React.memo(RecordList);