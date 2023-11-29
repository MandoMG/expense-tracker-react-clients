import React from 'react';
import {FlatList, Text, View} from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';

const mockData = [
  {
    description: 'Summer Moon Coffee',
    amount: 11.29,
    date: '2023-11-28',
    category: 'Restaurants',
  },
  {
    description: 'Birthday Gift',
    amount: 64.12,
    date: '2023-11-27',
    category: 'Miscellaneous',
  },
  {
    description: 'Spotify',
    amount: 16.23,
    date: '2023-11-26',
    category: 'Streaming Services',
  },
  {
    description: 'Starbucks Mva',
    amount: 8.29,
    date: '2023-11-25',
    category: 'Restaurants',
  },
  {description: 'HEB Gas', amount: 18.02, date: '2023-11-23', category: 'Gas'},
  {
    description: 'Taco Feliz',
    amount: 7.52,
    date: '2023-11-23',
    category: 'Restaurants',
  },
  {
    description: 'ACL Live',
    amount: 13.0,
    date: '2023-11-22',
    category: 'Restaurants',
  },
  {
    description: 'Water & Gas',
    amount: 103.91,
    date: '2023-11-20',
    category: 'Bills',
  },
  {
    description: 'Paper Tiger',
    amount: 7.95,
    date: '2023-11-19',
    category: 'Restaurants',
  },
  {
    description: 'Rawayana',
    amount: 35.0,
    date: '2023-11-19',
    category: 'Miscellaneous',
  },
];

interface SpendingListProps {
  description: string;
  amount: number;
  date: string;
  category: string;
}

const SpendingList = (props: SpendingListProps) => {
  const {amount, category, date, description} = props;

  return (
    <View style={{flexDirection: 'row', paddingVertical: 4}}>
      <View style={commonStyles.listItemLeftColumn}>
        <Text style={commonStyles.listItemMainText}>{description}</Text>
        <Text style={commonStyles.listItemSubText}>{date}</Text>
      </View>
      <View style={commonStyles.listItemRightColumn}>
        <Text style={commonStyles.listItemMainText}>
          {TextUtil.formatCurrency(amount)}
        </Text>
        <Text style={commonStyles.listItemSubText}>{category}</Text>
      </View>
    </View>
  );
};

const RecentSpendingWidget = () => {
  return (
    <View
      style={[
        commonStyles.listItemWrapper,
        {marginHorizontal: 20, marginBottom: 20},
      ]}>
      <View style={commonStyles.flexOne}>
        <Text style={{fontWeight: 'bold', fontSize: 16, paddingBottom: 8}}>Recent Spending</Text>
        <FlatList
          data={mockData}
          renderItem={({item}) => <SpendingList {...item} />}
        />
      </View>
    </View>
  );
};

export default RecentSpendingWidget;
