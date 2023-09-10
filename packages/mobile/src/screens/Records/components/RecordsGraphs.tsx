import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {RecordGraphsStyles} from '../styles/RecordsStyles';
import HorizontalGraphBarComponent from '../../../components/graphBar/HorizontalGraphBar';
import commonStyles from '../../../common/CommonStyles';
import textStyles from '../../../common/TextStyles';
import {BudgetSummaryItem, Record} from '../../../types';
import useGraphBar from '../../../hooks/useGraphBar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../common/Colors';

const mockData: BudgetSummaryItem[] = [
  {
    categoryName: 'Restaurants',
    categoryValue: 119.52,
    categoryBudget: 200.0,
    budgetDifference: 80.48,
    hasBudget: true,
    isUnderBudget: true,
  },
  {
    categoryName: 'Bills',
    categoryValue: 150.0,
    categoryBudget: 300.0,
    budgetDifference: 150.0,
    hasBudget: true,
    isUnderBudget: true,
  },
  {
    categoryName: 'Groceries',
    categoryValue: 100.0,
    categoryBudget: 400.0,
    budgetDifference: 300.0,
    hasBudget: true,
    isUnderBudget: true,
  },
  {
    categoryName: 'Gas',
    categoryValue: 250.0,
    categoryBudget: 500.0,
    budgetDifference: 250.0,
    hasBudget: true,
    isUnderBudget: true,
  },
  {
    categoryName: 'Holly',
    categoryValue: 400.0,
    categoryBudget: 600.0,
    budgetDifference: 200.0,
    hasBudget: true,
    isUnderBudget: true,
  },
];

const mockRecords: Record[] = [
  {
    description: 'HEB',
    category: 'Groceries',
    recordDate: '2023-09-01',
    amount: 10.21,
    isIncome: false,
  },
  {
    description: 'Walmart',
    category: 'Groceries',
    recordDate: '2023-09-02',
    amount: 30.22,
    isIncome: false,
  },
  {
    description: 'Exxon',
    category: 'Gas',
    recordDate: '2023-09-03',
    amount: 30.55,
    isIncome: false,
  },
  {
    description: 'House',
    category: 'Bills',
    recordDate: '2023-09-04',
    amount: 2000.23,
    isIncome: false,
  },
];

interface RecordsGraphsProps {
  budgetGraphData?: BudgetSummaryItem[];
}

const RecordsGraphs = ({budgetGraphData}: RecordsGraphsProps) => {
  const {getGraphPercentage} = useGraphBar();
  const [selectedRecordList, setSelectedRecordList] = useState<Record[]>([]);
  const [selectedBudgetCategory, setSelectedBudgetCategory] =
    useState<string>('');

  const getCategoryBudgetText = (item: BudgetSummaryItem) => {
    if (!item.hasBudget) {
      return 'No Budget Set';
    }

    return TextUtil.formatCurrency(item.categoryBudget);
  };

  const onItemPress = (category: string) => {
    // Get real data
    const list = mockRecords.filter(record => record.category === category);
    setSelectedRecordList(list);

    if (selectedBudgetCategory === category) {
      console.log('Reset Category');
      setSelectedBudgetCategory('');
    } else {
      console.log(`Set Category to ${category}`);
      setSelectedBudgetCategory(category);
    }
  };

  return !!budgetGraphData ? (
    <View>
      <FlatList
        data={budgetGraphData}
        scrollEnabled={false}
        contentContainerStyle={RecordGraphsStyles.graphFlatListContainer}
        renderItem={({item}) => (
          <>
            <TouchableOpacity
              style={RecordGraphsStyles.graphFlatListItemWrapper}
              onPress={() => onItemPress(item.categoryName)}>
              <HorizontalGraphBarComponent
                percentage={getGraphPercentage(item)}
                categoryName={item.categoryName}
              />
              <View style={commonStyles.flexRow}>
                <Text style={[commonStyles.flexOne, textStyles.itemText]}>
                  {TextUtil.formatCurrency(item.categoryValue)}
                  {!item.isUnderBudget && (
                    <View style={{paddingLeft: 5}}>
                      <Icon
                        name="exclamation-circle"
                        style={{color: Colors.expenseOrange}}
                      />
                    </View>
                  )}
                </Text>
                <Text style={textStyles.itemText}>
                  {' '}
                  {getCategoryBudgetText(item)}{' '}
                </Text>
              </View>
            </TouchableOpacity>
            {item.categoryName === selectedBudgetCategory &&
              (!!selectedRecordList.length ? (
                selectedRecordList.map(record => (
                  <View
                    style={{
                      marginVertical: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                      }}>
                      <Text>{record.description}</Text>
                      <Text>{record.amount}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: 10,
                      }}>
                      <Text>{record.recordDate}</Text>
                    </View>
                  </View>
                ))
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}>
                  <Text>{'No records for this category'}</Text>
                </View>
              ))}
          </>
        )}
      />
    </View>
  ) : (
    <></>
  );
};

export default RecordsGraphs;
