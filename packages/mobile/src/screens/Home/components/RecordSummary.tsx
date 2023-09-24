import React from 'react';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {FlatList, Text, View} from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import {useDateUtil} from 'mandomg-expensetracker-common/src/hooks';
import {Record} from '../../../types';

const summaryData: Record[] = [
  {
    amount: 40,
    category: 'Gas',
    description: 'HEB Gas',
    isIncome: false,
    recordDate: '2023-09-19T00:00:00.000Z',
  },
  {
    amount: 29,
    category: 'Holly',
    description: 'Boozy Bark',
    isIncome: false,
    recordDate: '2023-09-19T00:00:00.000Z',
  },
  {
    amount: 100,
    category: 'Investments',
    description: 'Vanguard',
    isIncome: false,
    recordDate: '2023-09-18T00:00:00.000Z',
  },
  {
    amount: 17.62,
    category: 'Restaurants',
    description: 'Burger King',
    isIncome: false,
    recordDate: '2023-09-17T00:00:00.000Z',
  },
  {
    amount: 40.04,
    category: 'Gas',
    description: 'HEB Gas ',
    isIncome: false,
    recordDate: '2023-09-16T00:00:00.000Z',
  },
  {
    amount: 8.06,
    category: 'Restaurants',
    description: 'Chick fil a',
    isIncome: false,
    recordDate: '2023-09-16T00:00:00.000Z',
  },
  {
    amount: 2.12,
    category: 'Travel',
    description: 'Roadrunner ',
    isIncome: false,
    recordDate: '2023-09-16T00:00:00.000Z',
  },
  {
    amount: 7.24,
    category: 'Miscellaneous',
    description: 'Walmart',
    isIncome: false,
    recordDate: '2023-09-16T00:00:00.000Z',
  },
  {
    amount: 32,
    category: 'Gas',
    description: 'Murphy Express',
    isIncome: false,
    recordDate: '2023-09-16T00:00:00.000Z',
  },
  {
    amount: 2808.83,
    category: 'Paycheck',
    description: 'GM',
    isIncome: true,
    recordDate: '2023-09-15T00:00:00.000Z',
  },
  {
    amount: 150,
    category: 'Bills',
    description: 'House payment',
    isIncome: false,
    recordDate: '2023-09-15T00:00:00.000Z',
  },
];

interface RecordSummaryProps {
  item: Record;
}

const RecordSummaryItem = ({item}: RecordSummaryProps) => {
  const {constructDateStringFromDateObject} = useDateUtil();
  const date = new Date(item.recordDate);

  return (
    <View style={commonStyles.listItemWrapper}>
      <View style={commonStyles.listItemLeftColumn}>
        <Text style={commonStyles.listItemMainText}>{item.description}</Text>
        <Text style={commonStyles.listItemSubText}>
          {constructDateStringFromDateObject(date)}
        </Text>
      </View>
      <View style={commonStyles.listItemRightColumn}>
        <Text style={commonStyles.listItemMainText}>
          {TextUtil.formatCurrency(item.amount)}
        </Text>
        <Text style={commonStyles.listItemSubText}>{item.category}</Text>
      </View>
    </View>
  );
};

const RecordSummary = () => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View>
        <Text style={commonStyles.sectionTitle}>{'Last 7 Days'}</Text>
        <FlatList
          data={summaryData}
          renderItem={({item}) => <RecordSummaryItem item={item} />}
        />
      </View>
    </View>
  );
};

export default RecordSummary;
