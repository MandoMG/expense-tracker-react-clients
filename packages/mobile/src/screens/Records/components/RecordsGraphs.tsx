import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDateUtil} from 'mandomg-expensetracker-common/src/hooks';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {RecordGraphsStyles} from '../styles/RecordsStyles';
import HorizontalGraphBarComponent from '../../../components/graphBar/HorizontalGraphBar';
import commonStyles from '../../../common/CommonStyles';
import textStyles from '../../../common/TextStyles';
import {BudgetSummaryItem, Record} from '../../../types';
import useGraphBar from '../../../hooks/useGraphBar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../common/Colors';
import {useAppSelector as useSelector} from '../../../redux/hooks';
import {selectRecords} from '../../../redux/slices/recordSlice';

interface RecordsGraphsProps {
  budgetGraphData?: BudgetSummaryItem[];
}

const RecordsGraphs = ({budgetGraphData}: RecordsGraphsProps) => {
  const {getGraphPercentage} = useGraphBar();
  const {constructDateStringFromDateObject} = useDateUtil();
  const records = useSelector(selectRecords);
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
    const list = records.filter(record => record.category === category);
    setSelectedRecordList(list);

    if (selectedBudgetCategory === category) {
      setSelectedBudgetCategory('');
    } else {
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
                      marginVertical: 6,
                      marginHorizontal: 10,
                      borderLeftColor: Colors.expenseOrange,
                      borderLeftWidth: 2,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                      }}>
                      <Text style={{ color: Colors.black}}>{record.description}</Text>
                      <Text style={{ color: Colors.black}}>{TextUtil.formatCurrency(record.amount)}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: 10,
                      }}>
                      <Text style={{ color: Colors.subTextGray}}>
                        {constructDateStringFromDateObject(
                          new Date(record.recordDate),
                        )}
                      </Text>
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
