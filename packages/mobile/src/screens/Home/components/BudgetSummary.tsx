import React from 'react';
import {FlatList, Text, View} from 'react-native';
import commonStyles from '../../../common/CommonStyles';
import {BudgetSummaryStyles} from '../styles/HomeStyles';
import {BudgetSummaryItem} from '../../../types';
import Colors from '../../../common/Colors';
import NavigationLink from '../../../components/navigationLink/NavigationLink';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface BudgetSummaryProps {
  summaryData?: BudgetSummaryItem[];
}

const Widget = ({summaryData}: BudgetSummaryProps) => {
  const categoriesOverBudget = summaryData
    ? summaryData
        ?.filter(item => !item.isUnderBudget)
        .map(item => item.categoryName)
    : [];
  const numberOfCategories = categoriesOverBudget.length;
  if (numberOfCategories >= 5) {
    categoriesOverBudget.slice(0, 4).push('... tap here to see more.');
  }

  return (
    <>
      <View style={[commonStyles.listItemWrapper, {flexDirection: 'column'}]}>
        {!!numberOfCategories ? (
          <>
            <Text>{`${numberOfCategories} Categories Over`}</Text>
            <FlatList
              horizontal
              data={categoriesOverBudget}
              contentContainerStyle={
                BudgetSummaryStyles.BudgetSummaryFlatlistContainer
              }
              renderItem={({item}) => (
                <View style={commonStyles.flexRow}>
                  <Icon
                    name="circle"
                    color={Colors.expenseOrange}
                    style={{marginHorizontal: 5, marginTop: 3}}
                    solid
                  />
                  <Text style={commonStyles.listItemSubText}>{item}</Text>
                </View>
              )}
            />
          </>
        ) : (
          <Text>{`No Categories Over Budget ...yet`}</Text>
        )}
      </View>
    </>
  );
};

const BudgetSummary = ({summaryData}: BudgetSummaryProps) => {
  return !!summaryData ? (
    <View style={BudgetSummaryStyles.budgetSummaryWrapper}>
      <View style={{flexDirection: 'row'}}>
        <Text style={commonStyles.sectionTitle}> Budget Summary </Text>
        <NavigationLink label="Go to Budgets" route="Budgets" />
      </View>
      <View style={BudgetSummaryStyles.BudgetSummaryListWrapper}>
        <Widget summaryData={summaryData} />
      </View>
    </View>
  ) : (
    <></>
  );
};

export default BudgetSummary;
