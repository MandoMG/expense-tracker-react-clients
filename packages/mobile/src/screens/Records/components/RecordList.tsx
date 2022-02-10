import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import commonStyles from '../../../common/CommonStyles';

const RecordList = () => {
   const mockData = [
      { id: 1, description: 'Rent', categoryName: 'Bills', date: '01/01/2022', amount: 1070.58, isExpense: true },
      { id: 2, description: 'AT&T', categoryName: 'Bills', date: '01/01/2022', amount: 60.10, isExpense: true },
      { id: 3, description: 'Netflix', categoryName: 'Streaming Services', date: '01/01/2022', amount: 19.99, isExpense: true },
      { id: 4, description: 'FANG Paycheck', categoryName: 'Paycheck', date: '01/02/2022', amount: 3800.98, isExpense: true },
      { id: 5, description: 'Best Buy', categoryName: 'Credit Cards', date: '01/02/2022', amount: 200.00, isExpense: true },
      { id: 6, description: 'Grande', categoryName: 'Bills', date: '01/03/2022', amount: 58.29, isExpense: true },
   ];

   const RecordItem = ({ item }: any) => {
      return (
         <View style={commonStyles.listItemWrapper}>
            <View style={commonStyles.listItemLeftColumn}>
               <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.description}</Text>
               <Text style={{ color: '#FFFFFF' }}>{item.date}</Text>
            </View>
            <View style={commonStyles.listItemRightColumn}>
               <Text style={{ fontWeight: 'bold' }}>{TextUtil.formatCurrency(item.amount)}</Text>
               <Text style={{ color: '#FFFFFF' }}>{item.categoryName}</Text>
            </View>
         </View>
      );
   }


   return (
      <View style={{ marginHorizontal: 20 }}>
         <View>
            <Text style={commonStyles.sectionTitle}> Activity </Text>
         </View>
         <View style={{ paddingBottom: 10 }}>
            <FlatList
               data={mockData}
               scrollEnabled={false}
               renderItem={({ item }) => (
                  <RecordItem item={item} />
               )}
            />
         </View>
      </View >
   )

}

export default RecordList;