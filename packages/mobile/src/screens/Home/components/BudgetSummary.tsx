import React from 'react';
import TextUtil from 'mandomg-expensetracker-common/src/util/TextUtil';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import commonStyles from '../../../common/CommonStyles';
import {BudgetSummaryStyles} from '../styles/HomeStyles';
import {BudgetSummaryItem} from '../../../types';

interface BudgetSummaryProps {
  summaryData?: BudgetSummaryItem[];
}

interface BudgetSummaryItemProps {
  summaryItem: BudgetSummaryItem;
}

const BudgetSummary = ({summaryData}: BudgetSummaryProps) => {
  const BudgetSummaryItem = ({summaryItem}: BudgetSummaryItemProps) => {
    return (
      <View style={commonStyles.listItemWrapper}>
        <View style={commonStyles.listItemSingleLineLeftColumn}>
          <Text style={commonStyles.listItemMainText}>
            {summaryItem.categoryName}
          </Text>
        </View>
        <View style={commonStyles.listItemRightColumn}>
          <Text style={commonStyles.listItemMainText}>
            {TextUtil.formatCurrency(summaryItem.categoryValue)}
          </Text>
          <View style={commonStyles.flexRow}>
            <Icon
              name="circle"
              color={summaryItem.isUnderBudget ? '#14a023' : '#c82d1e'}
              style={{marginHorizontal: 5, marginTop: 3}}
              solid
            />
            <Text
              style={commonStyles.listItemSubText}>{`${TextUtil.formatCurrency(
              summaryItem.budgetDifference,
            )} ${summaryItem.isUnderBudget ? 'under' : 'over'} budget`}</Text>
          </View>
        </View>
      </View>
    );
  };

  return !!summaryData ? (
    <View style={BudgetSummaryStyles.budgetSummaryWrapper}>
      <View>
        <Text style={commonStyles.sectionTitle}> Budget Summary </Text>
      </View>
      <View style={BudgetSummaryStyles.BudgetSummaryListWrapper}>
        <FlatList
          data={summaryData}
          contentContainerStyle={
            BudgetSummaryStyles.BudgetSummaryFlatlistContainer
          }
          renderItem={({item}) => <BudgetSummaryItem summaryItem={item} />}
        />
      </View>
    </View>
  ) : (
    <></>
  );
};

export default BudgetSummary;
