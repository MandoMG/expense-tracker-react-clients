import React from 'react';
import {FlatList, Text, View} from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import {BudgetSummaryStyles} from '../styles/HomeStyles';
import {BudgetSummaryItem} from '../../../types';
import Tile from '../../../components/tile/Tile';
import Colors from '../../../common/Colors';
import NavigationLink from "../../../components/navigationLink/NavigationLink";

interface BudgetSummaryProps {
  summaryData?: BudgetSummaryItem[];
}

interface BudgetSummaryItemProps {
  summaryItem: BudgetSummaryItem;
}

const BudgetSummary = ({summaryData}: BudgetSummaryProps) => {
  const BudgetSummaryItem = ({summaryItem}: BudgetSummaryItemProps) => {
    return (
      <Tile
        label={summaryItem.categoryName}
        value={summaryItem.categoryValue}
        backgroundColor={Colors.darkPurple}
        statusColor={summaryItem.isUnderBudget ? Colors.green : Colors.red}
      />
    );
  };

  return !!summaryData ? (
    <View style={BudgetSummaryStyles.budgetSummaryWrapper}>
      <View style={{ flexDirection: "row"}}>
        <Text style={commonStyles.sectionTitle}> Budget Summary </Text>
        <NavigationLink label="Go to Budgets" route="Budgets" />
      </View>
      <View style={BudgetSummaryStyles.BudgetSummaryListWrapper}>
        <FlatList
          horizontal
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
